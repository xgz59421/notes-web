import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenterAvatarComponent } from './ucenter-avatar.component';

describe('UcenterAvatarComponent', () => {
  let component: UcenterAvatarComponent;
  let fixture: ComponentFixture<UcenterAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenterAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenterAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
