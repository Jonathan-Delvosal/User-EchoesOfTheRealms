import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  //sert à savoir si je suis logger et si j'ai un token de connexion ou pas

  get isLogged() {

    return localStorage.getItem("token") !== null;

  }

  // méthode pour créer les tokens, effacer les tokens et récupérer les tokens
  setToken(newValue: string) {

    localStorage.setItem("token", newValue);

  }

  clearToken() {

    localStorage.removeItem("token");

  }

  getToken() {

    return localStorage.getItem("token");

  }



  
  private _username: string | null = null;
// jwtdecode
  setUsername(username: string) {
    this._username = username;
  }

  getUsername(): string | null {
    return this._username;
  }



}
