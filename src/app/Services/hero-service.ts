import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, computed } from '@angular/core';
import { environment } from '../../environments/environment';
import { PCSheet } from '../models/PCSheet';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private _client = inject(HttpClient);
  private _router = inject(Router);
  private _pcSheet = signal<PCSheet | null>(null);

  loadPCSheet(id: number) {
    this._client.get<PCSheet>(
      environment.ApiUrl + '/Character/GetPCStat/' + id,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
    ).subscribe({
      next: data => {
        this._pcSheet.set(data);
      },
      error: err => {
        console.error('Error fetching PCSheet:', err);
        this._router.navigate(['/logscreen']);
      }
    });
  }

  baseStats = computed(() => {
    const sheet = this._pcSheet();
    if (!sheet) return null;

    return {
      hpMax: sheet.hpMax,
      manaMax: sheet.manaMax,
      str: sheet.str,
      dex: sheet.dex,
      intel: sheet.intel,
      resFire: sheet.resFire,
      resIce: sheet.resIce,
      resLightning: sheet.resLightning
    };
  });

  job = computed(() => this._pcSheet()?.job ?? null);
  weapon = computed(() => this._pcSheet()?.weapon ?? null);
  helmet = computed(() => this._pcSheet()?.helmet ?? null);
  armor = computed(() => this._pcSheet()?.armor ?? null);
  boots = computed(() => this._pcSheet()?.boots ?? null);

  HpMax = computed(() =>
    (this.baseStats()?.hpMax ?? 0) +
    (this.job()?.bonusHP ?? 0) +
    (this.weapon()?.modHP ?? 0) +
    (this.helmet()?.modHP ?? 0) +
    (this.armor()?.modHP ?? 0) +
    (this.boots()?.modHP ?? 0)
  );

  ManaMax = computed(() =>
    (this.baseStats()?.manaMax ?? 0) +
    (this.job()?.bonusMana ?? 0) +
    (this.weapon()?.modMana ?? 0) +
    (this.helmet()?.modMana ?? 0) +
    (this.armor()?.modMana ?? 0) +
    (this.boots()?.modMana ?? 0)
  );

  Str = computed(() =>
    (this.baseStats()?.str ?? 0) +
    (this.job()?.bonusStr ?? 0) +
    (this.weapon()?.modStr ?? 0) +
    (this.helmet()?.modStr ?? 0) +
    (this.armor()?.modStr ?? 0) +
    (this.boots()?.modStr ?? 0)
  );

  Dex = computed(() =>
    (this.baseStats()?.dex ?? 0) +
    (this.job()?.bonusDex ?? 0) +
    (this.weapon()?.modDex ?? 0) +
    (this.helmet()?.modDex ?? 0) +
    (this.armor()?.modDex ?? 0) +
    (this.boots()?.modDex ?? 0)
  );

  Intel = computed(() =>
    (this.baseStats()?.intel ?? 0) +
    (this.job()?.bonusIntel ?? 0) +
    (this.weapon()?.modIntel ?? 0) +
    (this.helmet()?.modIntel ?? 0) +
    (this.armor()?.modIntel ?? 0) +
    (this.boots()?.modIntel ?? 0)
  );

  ResFire = computed(() =>
    (this.baseStats()?.resFire ?? 0) +
    (this.job()?.bonusResFire ?? 0) +
    (this.weapon()?.modResFire ?? 0) +
    (this.helmet()?.modResFire ?? 0) +
    (this.armor()?.modResFire ?? 0) +
    (this.boots()?.modResFire ?? 0)
  );

  ResIce = computed(() =>
    (this.baseStats()?.resIce ?? 0) +
    (this.job()?.bonusResIce ?? 0) +
    (this.weapon()?.modResIce ?? 0) +
    (this.helmet()?.modResIce ?? 0) +
    (this.armor()?.modResIce ?? 0) +
    (this.boots()?.modResIce ?? 0)
  );

  ResLightning = computed(() =>
    (this.baseStats()?.resLightning ?? 0) +
    (this.job()?.bonusResLightning ?? 0) +
    (this.weapon()?.modResLightning ?? 0) +
    (this.helmet()?.modResLightning ?? 0) +
    (this.armor()?.modResLightning ?? 0) +
    (this.boots()?.modResLightning ?? 0)
  );

  identity = computed(() => {
    const s = this._pcSheet();
    if (!s) return null;

    return {
      name: s.name,
      lvl: s.lvl,
      xp: s.xp,
      xpToNextLevel: s.xpToNextLevel,
      gold: s.gold,
      hp: s.hp,
      mana: s.mana,
      str: s.str,
      dex: s.dex,
      intel: s.intel,
      job: s.job
    };
  });

  rest() {
    this._pcSheet.update(sheet => {
      if (!sheet) return sheet;

      return {
        ...sheet,
        hp: this.HpMax(),
        mana: this.ManaMax()
      };
    });
    alert('Repos effectué !');
  }
}
