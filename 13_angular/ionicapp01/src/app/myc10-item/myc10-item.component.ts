import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc10-item',
  templateUrl: './myc10-item.component.html',
  styleUrls: ['./myc10-item.component.scss'],
})
export class Myc10ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  buttonClick(){
    console.log("buttonClick");
    
  }
}
