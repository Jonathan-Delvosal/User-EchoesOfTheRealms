import { TestBed } from '@angular/core/testing';

import { CreatingService } from './creating-service';

describe('CreatingService', () => {
  let service: CreatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
