import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PCSheet } from '../models/PCSheet';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
_client = inject(HttpClient)

pcSheet!: PCSheet;
  
constructor() {
    this._client.get<PCSheet>(environment.ApiUrl + '/Character/GetPCStat').subscribe(data => {
      this.pcSheet = data;
    })


    
  }
  
}
