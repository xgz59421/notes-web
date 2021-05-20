import { Injectable } from '@angular/core';

// 所有的服务对象都是可被注入的
@Injectable(
  // 方式一 
  //   {
  //   providedIn: 'root'
  //   // 指定当前服务对象 在"跟模块"中提供--- AppModule
  // }
  // 方式二 在 AppModule 中的providers: [LogService], 进行注册服务
)
export class LogService {
  constructor() { 
    console.log("创建服务LogService");
  }

  doLog(action){
    let uname = 'admin2';
    let time = new Date().getTime();
    console.log(`管理员:${uname} 时间:${time} 动作:${action}`);
    
  }
}
