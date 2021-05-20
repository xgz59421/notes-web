import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  @ViewChild("myscroll",{static: false})
  private myscroll:IonInfiniteScroll;
  private pno = 0;
  public hasMore = true;
  public product_list = [];

  constructor(public url:UrlService, private http:HttpClient, private router:Router, 
    private navController:NavController) { }

  ngOnInit() {
    this.loadMore();
    this.loadMore();
  }

  loadMore(){
    if(this.hasMore){
      this.pno++;
      this.http.get(this.url.plistAPI_get+this.pno).subscribe((result:any)=>{
        console.log("商品列表的请求数据: ");
        console.log(result);
        this.product_list = this.product_list.concat(result.data);
        // 无线滚动加载完成
        this.myscroll.complete();
  
        if(this.product_list.length >= result.recordCount){
          this.hasMore = false;
        }
      });
    }
  }

  goBack(){
    // this.router.navigateByUrl("index")
    // ionic 自带路由跳转
    this.navController.back();
  }

  jumpdetail(lid: number){
    console.log(lid);
    this.router.navigateByUrl("product-detail/"+lid)
  }

}
