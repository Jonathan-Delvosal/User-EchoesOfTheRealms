import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';
import { PasswordModule } from 'primeng/password';
import { HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Logscreen } from '../logscreen/logscreen';

@Component({
  selector: 'app-sign-up-screen',
  imports: [IftaLabelModule, PasswordModule, ButtonModule, InputTextModule, FormsModule, RouterModule],
  templateUrl: './sign-up-screen.html',
  styleUrl: './sign-up-screen.scss'
})
export class SignUpScreen {

  private _httpClient = inject(HttpClient);
  private _router = inject(Router);

  usernameSU: string = '';
  passwordSU: string = '';

  onSignUp() {
    this._httpClient.post<any>('http://localhost:3000/account', { name: this.usernameSU, password: this.passwordSU }).subscribe(data => {
      alert('Inscription réussie !');

      this._router.navigate(['/login']);
    })
  }
}
