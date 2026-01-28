import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
_client = inject(HttpClient)

Character: string;
  
constructor() {
    this.Character = this._client.get<string>(environment.ApiUrl + '/Character/GetCharacterName') as unknown as string;
    
  }
  
}
