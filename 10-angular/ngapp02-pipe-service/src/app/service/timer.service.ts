import { Injectable } from '@angular/core';

export class TimerService {

  private startTime = 0; 
  private endTime = 0;
  constructor() {
    console.log("创建了一个 timer 服务");
  }
  // constructor(private startTime:number, private endTime:number){
  // }

  start(){
    this.startTime = new Date().getTime();
  }
  end(name: string){
    this.endTime = new Date().getTime();
    console.log(name + "操作耗时: " + (this.endTime - this.startTime));
    
  }
  
}
