import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PCSheetResolved } from '../models/PCSheetResolved';

@Injectable({ providedIn: 'root' })
export class CharacterApiService {
  private _client = inject(HttpClient);

  getPCResolved(idPc: number) {
    return this._client.get<PCSheetResolved>(
      `${environment.ApiUrl}/Character/GetPCResolved/${idPc}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  }
}
