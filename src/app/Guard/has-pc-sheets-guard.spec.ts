import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hasPcSheetsGuard } from './has-pc-sheets-guard';

describe('hasPcSheetsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hasPcSheetsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
