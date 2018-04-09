import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentregistrationComponent } from './departmentregistration.component';

describe('DepartmentregistrationComponent', () => {
  let component: DepartmentregistrationComponent;
  let fixture: ComponentFixture<DepartmentregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
