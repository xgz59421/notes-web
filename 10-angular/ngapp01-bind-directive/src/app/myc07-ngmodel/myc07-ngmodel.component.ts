import { Component } from '@angular/core';

@Component({
  selector: 'app-myc07-ngmodel',
  templateUrl: './myc07-ngmodel.component.html',
  styleUrls: ['./myc07-ngmodel.component.css']
})
export class Myc07NgmodelComponent {
  uname = "tom";
  upwd = "";
  pwdtip = "";
  unameChange(){
    console.log(this.uname);
  } 
  upwdChange(){
    console.log(this.upwd);
    if(this.upwd.length < 6){
      this.pwdtip = "密码长度6~10位"
    }else{
      this.pwdtip = "密码正确"
    }
  }


}
