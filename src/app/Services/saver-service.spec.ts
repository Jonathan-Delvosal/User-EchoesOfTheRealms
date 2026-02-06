import { TestBed } from '@angular/core/testing';

import { SaverService } from './saver-service';

describe('SaverService', () => {
  let service: SaverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
