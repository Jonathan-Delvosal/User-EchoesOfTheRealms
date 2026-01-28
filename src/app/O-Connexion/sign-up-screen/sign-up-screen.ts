import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';
import { PasswordModule } from 'primeng/password';
import { HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-sign-up-screen',
  imports: [IftaLabelModule, PasswordModule, ButtonModule, InputTextModule, FormsModule, RouterModule],
  templateUrl: './sign-up-screen.html',
  styleUrl: './sign-up-screen.scss'
})
export class SignUpScreen {

  private _httpClient = inject(HttpClient);
  private _router = inject(Router);

  nickName: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  mail: string = '';

  onSignUp() {
    const payload = {
      nickName: this.nickName,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      mail: this.mail
    };

    this._httpClient.post<any>(environment.ApiUrl +'/Authentication/register', payload)
      .subscribe({
        next: () => {
          alert('Inscription réussie !');
          this._router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
          if (err.status === 400) {
            alert('Le pseudo et l\'email doivent être uniques.');
          } else {
            alert('Une erreur est survenue lors de l\'inscription.');
          }
        }
      });
  }
}
