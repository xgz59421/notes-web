import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-myc09-slides',
  templateUrl: './myc09-slides.component.html',
  styleUrls: ['./myc09-slides.component.scss'],
})
export class Myc09SlidesComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true
  };

  @ViewChild("myAD", {static:false})
  private myAD:IonSlides;
  constructor() { }

  ngOnInit() {
    this.myAD.startAutoplay();
  }

}
