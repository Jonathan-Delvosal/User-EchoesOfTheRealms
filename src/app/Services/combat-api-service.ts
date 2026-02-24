import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AttackRequest } from '../models/AttackRequest';
import { AttackResult } from '../models/AttackResult';

@Injectable({
  providedIn: 'root'
})
export class CombatApiService {
  private _client = inject(HttpClient);

  attack(req: AttackRequest) {
    return this._client.post<AttackResult>(
      `${environment.ApiUrl}/Combat/Attack`,
      req);
  }
}
