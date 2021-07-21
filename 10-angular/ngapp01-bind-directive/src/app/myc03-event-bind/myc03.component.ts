import { Component } from '@angular/core';

@Component({
  selector: 'app-myc03',
  templateUrl: './myc03.component.html',
  styleUrls: ['./myc03.component.css']
})
export class Myc03EventComponent {
  uname = "lucy";
  age = 26;
  count = 0;
  imgPath = "p3.png"

  add(){
    this.count++;
  }
  
  minus(){
    this.count--;
  }

  pintUname() {
    console.log("姓名是:",this.uname);
  }
  pintAge() {
    console.log("年龄是:",this.age);
  }
}
