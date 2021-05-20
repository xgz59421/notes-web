import { Component } from '@angular/core';

@Component({
  selector: 'app-myc05-ngstyle',
  templateUrl: './myc05-ngstyle.component.html',
  styleUrls: ['./myc05-ngstyle.component.css']
})
export class Myc05NgstyleComponent  {
  myBtnStyle = {
    backgroundColor : "#383",
    color: "#fff",
    "border-color": "#252"
  }

  changeStyle(){
    this.myBtnStyle.backgroundColor = "#f00";
    this.myBtnStyle.color = "#000";
    this.myBtnStyle["border-color"] = "#fff"
  }

  myBtnClass = {
    btn: true,
    "btn-danger" : true
  }
  changeClass(){
    this.myBtnClass["btn-danger"] = false;
    this.myBtnClass["btn-success"] = true;
  }
}
