import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc03-service-http',
  templateUrl: './myc03-service-http.component.html',
  styleUrls: ['./myc03-service-http.component.css']
})
export class Myc03ServiceHttpComponent implements OnInit {
  // 商品列表
  productList: object[] = [];
  private pno:number = 0;
  constructor(private http:HttpClient) { }

    //http 依赖注入
    public loadMore():void{
      this.pno++;
      let url = "http://101.96.128.94:9999/data/product/list.php?pno=" + this.pno;
      //httpClient 用的是 观察者模式: 发布 - 订阅
      this.http.get(url).subscribe((res:any)=>{
        console.log("得到了异步的订阅响应消息");
        console.log(res);
        
        this.productList = this.productList.concat(res.data);
      });
    }
    public delete(index):void{
      this.productList.splice(index, 1);
    }

  ngOnInit(): void {
    console.log(" 生命周期钩子函数 ngOnInit" );
    
    // this.loadMore();
  }

}
