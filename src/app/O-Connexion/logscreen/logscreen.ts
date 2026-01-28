import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LogService } from '../../Services/log-service';

import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-logscreen',
  imports: [FormsModule, DividerModule, PasswordModule, InputTextModule, IftaLabelModule, ButtonModule, RouterModule],
  templateUrl: './logscreen.html',
  styleUrl: './logscreen.scss'
})
//


export class Logscreen {

  usernameSI: string = '';
  passwordSI: string = '';

  private _logService = inject(LogService);

  private _router = inject(Router);

  private _httpClient = inject(HttpClient);

  onSignIn() {

    const body = {
      username: this.usernameSI,
      password: this.passwordSI
    };

    this._httpClient
      .post<any>(environment.ApiUrl +'/Authentication/login', body)
      .subscribe({
        next: (response) => {

          const jwt = response.token;

          if (jwt) {
            this._logService.setToken(jwt);
            this._logService.setUsername(this.usernameSI);

            alert('Connexion réussie !');
            this._router.navigate(['/menu']);
          }
        },
        error: () => {
          alert('Nom d\'utilisateur ou mot de passe incorrect.');
        }
      });
  }
}



