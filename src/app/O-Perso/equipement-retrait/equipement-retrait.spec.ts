import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementRetrait } from './equipement-retrait';

describe('EquipementRetrait', () => {
  let component: EquipementRetrait;
  let fixture: ComponentFixture<EquipementRetrait>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipementRetrait]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipementRetrait);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
