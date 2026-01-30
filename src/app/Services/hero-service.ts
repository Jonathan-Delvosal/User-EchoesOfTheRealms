import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { PCSheet } from '../models/PCSheet';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  _client = inject(HttpClient)
  _router = inject(Router)

  pcSheet = signal<PCSheet|null>(null);

  loadPCSheet(id: number) {
    this._client.get<PCSheet>(environment.ApiUrl + '/Character/GetPCStat/' + id, {
      headers:
      {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).subscribe({
        next: data => {
          this.pcSheet.set(data);
        },
        error: err => {
          console.error('Error fetching PCSheet:', err);
          this._router.navigate(['/logscreen']);
        }
      })
  }

}


