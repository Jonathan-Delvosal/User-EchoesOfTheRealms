import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePersonnage } from './fiche-personnage';

describe('FichePersonnage', () => {
  let component: FichePersonnage;
  let fixture: ComponentFixture<FichePersonnage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichePersonnage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichePersonnage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
