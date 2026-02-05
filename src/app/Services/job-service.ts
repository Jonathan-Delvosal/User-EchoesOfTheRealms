import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { JobSheet } from '../models/JobSheet';
import { environment } from '../../environments/environment.development';
import { tab } from '@primeuix/themes/aura/tabs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  _client = inject(HttpClient)

  Jobsheet = signal<JobSheet[] | null>(null);

  loadJobSheet() {
    return this._client.get<JobSheet[]>(environment.ApiUrl + '/Character/GetAllJob')
    .pipe(tap(data => {
        this.Jobsheet.set(data);

        console.log(this.Jobsheet());
      }));
  }
}
