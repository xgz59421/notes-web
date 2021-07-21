import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenterSecurityComponent } from './ucenter-security.component';

describe('UcenterSecurityComponent', () => {
  let component: UcenterSecurityComponent;
  let fixture: ComponentFixture<UcenterSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenterSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenterSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
