import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepRegistrationComponent } from './dep-registration.component';

describe('DepRegistrationComponent', () => {
  let component: DepRegistrationComponent;
  let fixture: ComponentFixture<DepRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
