import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-myc02-child1-modify',
  templateUrl: './myc02-child1-modify.component.html',
  styleUrls: ['./myc02-child1-modify.component.css']
})
export class Myc02ChildModifyComponent implements OnInit {
  public userInput:string = null;
  constructor() { }

  // 事件发射器
  @Output()    //输出型属性 可以向父组件输出数据
  private sonEvent = new EventEmitter();
  changeName(){
    console.log(this.userInput);
    //子组件发射数据给父组件
    this.sonEvent.emit(this.userInput);
  }
  ngOnInit(): void {
  }

}
