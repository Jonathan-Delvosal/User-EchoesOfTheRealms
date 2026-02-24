import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PCSheet } from '../models/PCSheet';

@Injectable({
  providedIn: 'root'
})
export class NewCharacterService {

   _client = inject(HttpClient)

   newPCSheet(Name: string, JobId: number) {

    let dataFromNew = {
      name: Name,
      jobId: JobId,      
    }

    // call api to save dataFromNew to backend
    return this._client.post<PCSheet>(environment.ApiUrl + '/Character/PostNewPC', dataFromNew);
    }
  
}
