import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SavingSheet } from '../models/SavingSheet';
import { PCSheetResolved } from '../models/PCSheetResolved';

@Injectable({
  providedIn: 'root'
})
export class SaverService {

  private _client = inject(HttpClient);

  savePCSheet(sheet: PCSheetResolved) {

    const dataToSave: SavingSheet = {
      hp: sheet.hp,
      mana: sheet.mana,

      lvl: sheet.lvl,
      xp: sheet.xp,
      gold: sheet.gold,

      jobId: sheet.jobId,

      weaponId: sheet.weapon?.id ?? null,
      helmetId: sheet.helmet?.id ?? null,
      armorId: sheet.armor?.id ?? null,
      bootId: sheet.boot?.id ?? null
    };

    return this._client.put<void>(
      `${environment.ApiUrl}/Character/PutSavePC/${sheet.id}`,
      dataToSave,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  }
}
