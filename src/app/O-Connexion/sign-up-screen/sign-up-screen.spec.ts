import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpScreen } from './sign-up-screen';

describe('SignUpScreen', () => {
  let component: SignUpScreen;
  let fixture: ComponentFixture<SignUpScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
