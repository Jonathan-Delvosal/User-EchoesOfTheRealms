import { Injectable, signal, computed } from '@angular/core';
import { PCSheetResolved } from '../models/PCSheetResolved';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Source de vérité unique : fiche résolue venant de l'API
  private _pc = signal<PCSheetResolved | null>(null);

  // ---- Load / Clear ----
  load(sheet: PCSheetResolved) {
    this._pc.set(sheet);
  }

  clear() {
    this._pc.set(null);
  }

  // ---- Exposition brute ----
  sheet = computed(() => this._pc());

  // ---- Identity / UI ----
  identity = computed(() => {
    const s = this._pc();
    if (!s) return null;

    return {
      id: s.id,
      name: s.name,
      lvl: s.lvl,
      xp: s.xp,
      xpToNextLevel: s.xpToNextLevel,
      gold: s.gold,
      hp: s.hp,
      mana: s.mana
    };
  });

  job = computed(() => this._pc()?.job ?? null);

  weapon = computed(() => this._pc()?.weapon ?? null);
  helmet = computed(() => this._pc()?.helmet ?? null);
  armor = computed(() => this._pc()?.armor ?? null);
  boot = computed(() => this._pc()?.boot ?? null);

  // ---- Totaux (directement du DTO résolu) ----
  HpMax = computed(() => this._pc()?.hpMaxTotal ?? 0);
  ManaMax = computed(() => this._pc()?.manaMaxTotal ?? 0);

  Str = computed(() => this._pc()?.strTotal ?? 0);
  Dex = computed(() => this._pc()?.dexTotal ?? 0);
  Intel = computed(() => this._pc()?.intelTotal ?? 0);
  Vita = computed(() => this._pc()?.vitaTotal ?? 0);

  Defense = computed(() => this._pc()?.defenseTotal ?? 0);

  CritChance = computed(() => this._pc()?.critChanceTotal ?? 0);
  CritMultiplier = computed(() => this._pc()?.critMultiplierTotal ?? 0);

  // ---- Résistances : brut + effectif capé ----
  ResCapMin = computed(() => this._pc()?.resCapMin ?? -70);
  ResCapMax = computed(() => this._pc()?.resCapMax ?? 70);

  ResFireTotal = computed(() => this._pc()?.resFireTotal ?? 0);
  ResIceTotal = computed(() => this._pc()?.resIceTotal ?? 0);
  ResLightningTotal = computed(() => this._pc()?.resLightningTotal ?? 0);

  ResFire = computed(() => this._pc()?.resFireEffective ?? 0);
  ResIce = computed(() => this._pc()?.resIceEffective ?? 0);
  ResLightning = computed(() => this._pc()?.resLightningEffective ?? 0);

  // ---- Actions ----
  rest() {
    const s = this._pc();
    if (!s) return;

    this._pc.set({
      ...s,
      hp: s.hpMaxTotal,
      mana: s.manaMaxTotal
    });

    alert('Repos effectué !');
  }

  // (optionnel) appliqué après une attaque
  applyDelta(hpDelta: number, manaDelta: number) {
    const s = this._pc();
    if (!s) return;

    const newHp = Math.max(0, s.hp + hpDelta);
    const newMana = Math.max(0, s.mana + manaDelta);

    this._pc.set({
      ...s,
      hp: newHp,
      mana: newMana
    });
  }
}
