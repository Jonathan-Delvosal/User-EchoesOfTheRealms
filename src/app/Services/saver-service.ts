import { Injectable } from '@angular/core';
import { PCSheet } from '../models/PCSheet';
import { SavingSheet } from '../models/SavingSheet';

@Injectable({
  providedIn: 'root'
})
export class SaverService {

  private _savingSheet: SavingSheet | null = null;
  private _pcSheet: PCSheet | null = null;



  savePCSheet(sheet: PCSheet) {

    let dataToSave: SavingSheet = {
      hp: sheet.hp,
      hpMax: sheet.hpMax,
      mana: sheet.mana,
      manaMax: sheet.manaMax,
      str: sheet.str,
      dex: sheet.dex,
      intel: sheet.intel,
      vita: sheet.vita,
      vitaMax: sheet.vitaMax,
      resFire: sheet.resFire,
      resIce: sheet.resIce,
      resLightning: sheet.resLightning,
      lvl: sheet.lvl,
      xp: sheet.xp,
      gold: sheet.gold,
      jobId: sheet.jobId,
      weaponId: sheet.weaponId,
      helmetId: sheet.helmetId,
      armorId: sheet.armorId,
      bootsId: sheet.bootsId

    }

    // call api to save dataToSave to backend

  }
  
}
