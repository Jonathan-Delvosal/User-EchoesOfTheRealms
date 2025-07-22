import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sauvegarder } from './sauvegarder';

describe('Sauvegarder', () => {
  let component: Sauvegarder;
  let fixture: ComponentFixture<Sauvegarder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sauvegarder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sauvegarder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
