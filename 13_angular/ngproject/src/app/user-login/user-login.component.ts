import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UrlService } from '../service/url.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private nav: NavController, 
    private http:HttpClient, 
    private urlService:UrlService
  ) { }
  public uname ="dingding";
  public upwd = "123456";
  ngOnInit() {
  }

  goBack(){
    this.nav.back();
  }
  dologin(){
    console.log(this.uname);
    console.log(this.upwd);

    // post login
    // var url = "http://localhost:5050/user/login";
    var url = this.urlService.loginAPI_post;
    var body =`uname=${this.uname}&upwd=${this.upwd}`;
    var httpOptions = {
      headers:{"Content-Type":"application/x-www-form-urlencoded"}
    }
    this.http.post(
      url, 
      body,
      httpOptions
      ).subscribe((res)=>{
      console.log(res);
      
    });
    
  }
  unameChange(){
    // console.log(this.uname);
    
  }
}
