import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc06-input',
  templateUrl: './myc06-input.component.html',
  styleUrls: ['./myc06-input.component.scss'],
})
export class Myc06InputComponent implements OnInit {
  public uname = "";
  constructor() { }

  ngOnInit() {}
  onClick(){
    console.log(this.uname);
  }
  changeUname(){
    console.log(this.uname);
  }
}
