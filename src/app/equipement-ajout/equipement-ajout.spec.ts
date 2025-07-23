import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementAjout } from './equipement-ajout';

describe('EquipementAjout', () => {
  let component: EquipementAjout;
  let fixture: ComponentFixture<EquipementAjout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipementAjout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipementAjout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
