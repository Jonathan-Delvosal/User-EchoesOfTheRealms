import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichEquip } from './affich-equip';

describe('AffichEquip', () => {
  let component: AffichEquip;
  let fixture: ComponentFixture<AffichEquip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffichEquip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichEquip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
