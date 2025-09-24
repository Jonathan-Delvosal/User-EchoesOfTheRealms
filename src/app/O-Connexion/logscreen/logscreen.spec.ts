import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logscreen } from './logscreen';

describe('Logscreen', () => {
  let component: Logscreen;
  let fixture: ComponentFixture<Logscreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logscreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logscreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
