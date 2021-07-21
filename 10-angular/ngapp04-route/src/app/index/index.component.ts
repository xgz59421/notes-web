import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router:Router ) { }
  // 脚本路由跳转
  jumpProductList(){
    this.router.navigateByUrl("/plist");
  }

  ngOnInit(): void {
  }

}
