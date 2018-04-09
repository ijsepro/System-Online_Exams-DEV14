import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentloginComponent } from './departmentlogin.component';

describe('DepartmentloginComponent', () => {
  let component: DepartmentloginComponent;
  let fixture: ComponentFixture<DepartmentloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
