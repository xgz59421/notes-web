import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Myc12PopupComponent } from './myc12-popup.component';

describe('Myc12PopupComponent', () => {
  let component: Myc12PopupComponent;
  let fixture: ComponentFixture<Myc12PopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Myc12PopupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Myc12PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
