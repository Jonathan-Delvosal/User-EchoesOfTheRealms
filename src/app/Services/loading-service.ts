import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { PCSheet } from '../models/PCSheet';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  _client = inject(HttpClient)
  _router = inject(Router)

  pcSheets = signal<PCSheet[]|null>(null);

  loadPCSheets() {this._client.get<PCSheet[]>(environment.ApiUrl + '/Character/GetPCByUser', {
      headers:
      {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .subscribe({
        next: data => {
          this.pcSheets.set(data);
        },
        error: () => {
          this._router.navigate(['/logscreen']);
        }
      })}

}
