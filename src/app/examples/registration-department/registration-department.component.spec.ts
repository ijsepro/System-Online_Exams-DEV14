import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDepartmentComponent } from './registration-department.component';

describe('RegistrationDepartmentComponent', () => {
  let component: RegistrationDepartmentComponent;
  let fixture: ComponentFixture<RegistrationDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
