import { CanActivateFn, Router } from '@angular/router';
import { LogService } from '../Services/log-service';
import { inject } from '@angular/core';

export const isLoggedGuard: CanActivateFn = () => {
  
  const logService = inject(LogService);
  const router = inject(Router);

  if (logService.isLogged()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
  
};
