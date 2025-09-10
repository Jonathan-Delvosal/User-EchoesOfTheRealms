import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statperso } from './statperso';

describe('Statperso', () => {
  let component: Statperso;
  let fixture: ComponentFixture<Statperso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statperso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statperso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
