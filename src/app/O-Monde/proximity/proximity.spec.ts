import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proximity } from './proximity';

describe('Proximity', () => {
  let component: Proximity;
  let fixture: ComponentFixture<Proximity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proximity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proximity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
