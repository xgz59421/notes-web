import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Myc03BadgeComponent } from './myc03-badge.component';

describe('Myc03BadgeComponent', () => {
  let component: Myc03BadgeComponent;
  let fixture: ComponentFixture<Myc03BadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Myc03BadgeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Myc03BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
