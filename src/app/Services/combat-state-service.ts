import { Injectable, computed, signal } from '@angular/core';
import { MonsterState } from '../models/MonsterState';
import { CombatApiService } from './combat-api-service';
import { HeroService } from './hero-service';
import { pcToActorResolved } from '../Utils/combat-mapper';
import { monsterToActorResolved } from '../Utils/monster-to-actor';

@Injectable({
  providedIn: 'root'
})
export class CombatStateService {

  constructor(
    private hero: HeroService,
    private api: CombatApiService
  ) {}

  // --- STATE ---
  private _monster = signal<MonsterState | null>(null);
  private _logs = signal<string[]>([]);
  private _isActive = signal(false);
  private _isFinished = signal(false);

  // --- READONLY ---
  monster = computed(() => this._monster());
  logs = computed(() => this._logs());
  isActive = computed(() => this._isActive());
  isFinished = computed(() => this._isFinished());

  // --- INIT / RESET ---
  startEncounter(monster: MonsterState) {
    this._monster.set(monster);
    this._logs.set([`Un ennemi apparaît : ${monster.name} !`]);
    this._isActive.set(true);
    this._isFinished.set(false);
  }

  endEncounter(reason: string) {
    this._isFinished.set(true);
    this._isActive.set(false);
    this.pushLog(reason);
  }

  clear() {
    this._monster.set(null);
    this._logs.set([]);
    this._isActive.set(false);
    this._isFinished.set(false);
  }

  // --- LOGS ---
  pushLog(line: string) {
    this._logs.update(arr => [...arr, line]);
  }

  // --- ACTION: ATTACK ---
  attack(attackId: number) {
    const pc = this.hero.sheet();
    const m = this._monster();

    if (!pc) {
      this.pushLog("Aucun personnage chargé.");
      return;
    }
    if (!m) {
      this.pushLog("Aucun monstre en combat.");
      return;
    }
    if (this._isFinished()) return;

    // Guard mana côté UI (évite appel inutile)
    // On ne connaît pas le manaCost ici (attaque stockée en DB),
    // donc le vrai check se fait API. On garde juste une barrière simple.
    if (pc.mana <= 0) {
      this.pushLog("Pas assez de mana.");
      return;
    }

    const req = {
      attackId,
      attacker: pcToActorResolved(pc),
      defender: monsterToActorResolved(m)
    };

    this.api.attack(req).subscribe({
      next: (res) => {
        if (!res.success) {
          if (res.errorCode === 'NOT_ENOUGH_MANA') {
            this.pushLog("Pas assez de mana !");
          } else {
            this.pushLog("Action impossible.");
          }
          return;
        }

        // 1) appliquer mana au héros (HP pas touché ici)
        this.hero.applyDelta(0, -res.manaSpent);

        // 2) appliquer HP au monstre
        const monsterAfter: MonsterState = {
          ...m,
          hp: res.defenderHpAfter
        };
        this._monster.set(monsterAfter);

        // 3) log UI
        const varPct = Math.round(res.variancePercent * 100);
        const critTxt = res.isCrit ? " (CRIT !)" : "";
        const varTxt = varPct === 0 ? "" : ` [${varPct > 0 ? "+" : ""}${varPct}%]`;

        this.pushLog(`Tu infliges ${res.damage} dégâts${critTxt}${varTxt}.`);

        if (res.defenderKo) {
          this.endEncounter(`${m.name} est KO !`);
        }
      },
      error: () => {
        this.pushLog("Erreur réseau / serveur pendant l'attaque.");
      }
    });
  }
}
