import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  public product = {}
  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient, 
    public url: UrlService,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.route.params.subscribe((result)=>{
      console.log(result);
      this.http.get(this.url.pdetailAPI_get+result.lid).subscribe((data:any)=>{
        console.log("得到商品详细数据");
        console.log(data);
        this.product = data.details;
        console.log(this.product);
      })
    });
  }

  goBack(){
    this.navController.back();
  }

}
