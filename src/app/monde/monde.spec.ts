import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Monde } from './monde';

describe('Monde', () => {
  let component: Monde;
  let fixture: ComponentFixture<Monde>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Monde]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Monde);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
