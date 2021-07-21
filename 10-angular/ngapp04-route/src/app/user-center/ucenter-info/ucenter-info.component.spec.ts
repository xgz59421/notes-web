import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenterInfoComponent } from './ucenter-info.component';

describe('UcenterInfoComponent', () => {
  let component: UcenterInfoComponent;
  let fixture: ComponentFixture<UcenterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
