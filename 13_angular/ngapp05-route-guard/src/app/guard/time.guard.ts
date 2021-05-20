import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TimeGuard implements CanActivate {
  constructor(private router:Router){
    console.log("TimeGuard");
    
  }
  canActivate(){
    console.log("正在进行登录时间访问");
    // 当前访问时间 8~17 激活路由,否则 阻止
    let time = new Date().getHours();
    if(time>=8 && time<=17){
      return true;
    }else{
      this.router.navigateByUrl("/login");
      return false;
    }
  }
  
}
