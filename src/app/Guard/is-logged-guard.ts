import { CanActivateFn, Router } from '@angular/router';
import { LogService } from '../Services/log-service';
import { inject } from '@angular/core';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  

  // importe le service de log et le router pour les utiliser
  let _logged :LogService = inject(LogService);
  let _router = inject(Router);

  // vérifie si je suis loggé ou pas

  if(_logged.isLogged){
    return true;
    // si je suis loggé, je peux accéder à la route
  } 

  else {
    _router.navigate(["/login"]);
    return false;
    // si je ne suis pas loggé, je suis redirigé vers la page de login
  }
};
