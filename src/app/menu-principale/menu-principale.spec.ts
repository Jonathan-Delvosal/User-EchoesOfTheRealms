import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipale } from './menu-principale';

describe('MenuPrincipale', () => {
  let component: MenuPrincipale;
  let fixture: ComponentFixture<MenuPrincipale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPrincipale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPrincipale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
