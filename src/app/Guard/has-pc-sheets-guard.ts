import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoadingService } from '../Services/loading-service';

export const hasPcSheetsGuard: CanActivateFn = () => {
  const loadServ = inject(LoadingService);
  const router = inject(Router);

  const sheets = loadServ.pcSheets();

  if (sheets === null) {
    loadServ.loadPCSheets();
    return true; // on laisse passer, on évaluera après
  }

  if (sheets.length === 0) {
    router.navigate(['/menu/option/creer']);
    return false;
  }

  return true;
};
