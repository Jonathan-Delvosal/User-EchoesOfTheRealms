import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LogService } from '../Services/log-service';

import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';



@Component({
  selector: 'app-logscreen',
  imports: [FormsModule, DividerModule, PasswordModule, InputTextModule, IftaLabelModule, ButtonModule, RouterModule],
  templateUrl: './logscreen.html',
  styleUrl: './logscreen.scss'
})
//


export class Logscreen {

  private _logService = inject(LogService);

  private _router = inject(Router);

  usernameSI: string = '';
  passwordSI: string = '';

  usernameSU: string = '';
  passwordSU: string = '';

  usernameAdmin: string = 'Haku';
  passwordAdmin: string = '1234-*';

  onSignIn() {

    if (this.usernameSI === this.usernameAdmin && this.passwordSI === this.passwordAdmin) {

      alert('Connexion réussie !');

      // Remplacez par un vrai token
      this._logService.setToken('Hakus_Token'); 

      // Rediriger vers une autre page ou effectuer d'autres actions
      this._router.navigate(['/menu']);

    } 
    else {

      alert('Nom d\'utilisateur ou mot de passe incorrect.');

    }
  }  

}
