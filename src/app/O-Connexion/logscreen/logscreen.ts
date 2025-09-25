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

  private _httpClient = inject(HttpClient);

  public usernameSI: string = '';
  public passwordSI: string = '';

  onSignIn() {

    this._httpClient.get<any>('http://localhost:3000/account').subscribe(data => {

      if (data.some((a: any) => a.name === this.usernameSI && a.password === this.passwordSI )) {
  
        this._logService.setUsername(this.usernameSI);
        alert('Connexion réussie !');
  
        // Remplacez par un vrai token
        this._logService.setToken('Hakus_Token'); 
  
        // Rediriger vers une autre page ou effectuer d'autres actions
        this._router.navigate(['/menu']);
  
      } 
      else {
  
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
  
      }
    })

  }

  
}
