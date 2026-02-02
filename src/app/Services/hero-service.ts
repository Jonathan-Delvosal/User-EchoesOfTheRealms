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


  HpMax = computed(() =>
    (this.baseStats()?.hpMax ?? 0) +
    (this.job()?.bonusHP ?? 0)
  );

  ManaMax = computed(() =>
    (this.baseStats()?.manaMax ?? 0) +
    (this.job()?.bonusMana ?? 0)
  );

  Str = computed(() =>
    (this.baseStats()?.str ?? 0) +
    (this.job()?.bonusStr ?? 0)
  );

  Dex = computed(() =>
    (this.baseStats()?.dex ?? 0) +
    (this.job()?.bonusDex ?? 0)
  );

  Intel = computed(() =>
    (this.baseStats()?.intel ?? 0) +
    (this.job()?.bonusIntel ?? 0)
  );

  ResFire = computed(() =>
    (this.baseStats()?.resFire ?? 0) +
    (this.job()?.bonusResFire ?? 0)
  );

  ResIce = computed(() =>
    (this.baseStats()?.resIce ?? 0) +
    (this.job()?.bonusResIce ?? 0)
  );

  ResLightning = computed(() =>
    (this.baseStats()?.resLightning ?? 0) +
    (this.job()?.bonusResLightning ?? 0)
  );

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
