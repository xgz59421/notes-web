import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-myc11-infinite-scroll',
  templateUrl: './myc11-infinite-scroll.component.html',
  styleUrls: ['./myc11-infinite-scroll.component.scss'],
})
export class Myc11InfiniteScrollComponent implements OnInit {

  constructor() { }

  @ViewChild("myscroll", {static: false})
  private myscroll:IonInfiniteScroll
  ngOnInit() {}

  public list = [
    1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,
    2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,
  ];
  public list2 = [
    3000,3001,3002,3003,3004,3005,3006,3007,3008,3009,
    1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,
  ];

  loadData(event) {
    console.log('正在加载更多数据...');

    // 获取滚动条组件方式一:
    // event.target.complete();
    // 获取滚动条组件方式二:
    this.myscroll.complete();
    // 此处应该发送异步请求
    // 模拟
    setTimeout(() => {
    this.list = this.list.concat(this.list2);
    }, 2000);

  }

}
