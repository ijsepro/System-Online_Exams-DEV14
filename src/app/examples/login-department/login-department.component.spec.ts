import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDepartmentComponent } from './login-department.component';

describe('LoginDepartmentComponent', () => {
  let component: LoginDepartmentComponent;
  let fixture: ComponentFixture<LoginDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
