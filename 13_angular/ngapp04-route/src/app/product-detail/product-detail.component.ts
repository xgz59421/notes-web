import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // 商品号
  public pid:number = null;
  //声明依赖, 读取参数需要的"当前路由"服务对象
  constructor(private route:ActivatedRoute/* , private http:HttpClient */) { 

  }

  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      console.log("得到了订阅的路由参数");
      console.log(res);
      this.pid = res.lid;

      // let url = "http://101.96.128.94:9999/data/product/list.php?pno=" + this.pid;
      // this.http.get(url).subscribe(res=>{
      //   console.log(res);
      // });
    })
  }

}
