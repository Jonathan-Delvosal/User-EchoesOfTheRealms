import { Component, inject,  } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LogService } from '../../Services/log-service';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-account',
  imports: [ButtonModule, RouterModule, InputTextModule, FormsModule],
  templateUrl: './account.html',
  styleUrl: './account.scss',
  standalone: true,
})
export class Account {

  private _logService = inject(LogService);

  private _router = inject(Router);

  accountName: string | null = this._logService.getUsername();

  LogOut(){

    alert('Déconnexion réussie !');

      // Remplacez par un vrai token
      this._logService.clearToken(); 

      // Rediriger vers une autre page ou effectuer d'autres actions
      this._router.navigate(['/login']);

  }

}
