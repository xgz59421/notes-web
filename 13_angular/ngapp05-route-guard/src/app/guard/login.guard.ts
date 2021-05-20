import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  private isLogin = false; //是否登录

  canActivate(){
    console.log("正在进行登录验证");
    if (this.isLogin) {
      return true;  // 可以激活后续的组件
    } else {
      return false; // 阻止激活后续的组件
    }
  }
  
}
