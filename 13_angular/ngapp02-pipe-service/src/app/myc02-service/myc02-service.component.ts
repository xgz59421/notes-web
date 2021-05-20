import { Component, OnInit } from '@angular/core';
import { LogService } from '../service/log.service';
import { TimerService } from '../service/timer.service';

@Component({
  selector: 'app-myc02-service',
  templateUrl: './myc02-service.component.html',
  styleUrls: ['./myc02-service.component.css'],
  providers: [TimerService]
})
export class Myc02ServiceComponent {

  log:LogService = null;  //自定义服务
  timer:TimerService = null;  
  // http:HttpClientModule = null; //官方提供服务
  constructor(logs:LogService, timer:TimerService) {  //声明依赖
    this.log = logs;
    this.timer = timer
    console.log("声明了依赖注入", this.log);
    
  }

  doAdd(){
    var action = "添加了商品: xxx1"
    this.log.doLog(action);
  }
  doDelete(){
    this.timer.start();
    var action = "删除了商品: xxx2"
    this.log.doLog(action);
    this.timer.end("delete");
  }

}
