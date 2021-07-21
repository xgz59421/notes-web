import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { UrlService } from '../service/url.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  // 轮播图设置
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true
  }
  // 录播图
  carouselItems: []; 
  // 首页推荐
  recommendedItems:[];
  // 新品上市
  newArrivalItems:[];
  // 热销单品
  topSaleItems:[];

  @ViewChild('myadslides', {static: true})
  private myadslides:IonSlides;
  constructor(public url:UrlService, private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url.indexAPI_get)
    .subscribe((data:any)=>{
      console.log(data);
      this.carouselItems = data.carouselItems;
      this.newArrivalItems = data.newArrivalItems;
      this.recommendedItems = data.recommendedItems;
      this.topSaleItems = data.topSaleItems;
      // 轮播图自动播放
      this.myadslides.startAutoplay();
    });
    
  }

}
