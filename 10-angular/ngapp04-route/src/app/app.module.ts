import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//http
import { HttpClientModule } from "@angular/common/http";
// 组件
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserCenterComponent } from './user-center/user-center.component';
// CLI imports router
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UcenterInfoComponent } from './user-center/ucenter-info/ucenter-info.component';
import { UcenterAvatarComponent } from './user-center/ucenter-avatar/ucenter-avatar.component';
import { UcenterSecurityComponent } from './user-center/ucenter-security/ucenter-security.component';

// 声明路由词典
const routes:Routes = [
  //""重定向到 "index"
  {path:"", redirectTo:"index", pathMatch:"full"},
  {path:"index", component:IndexComponent},
  {path:"plist", component:ProductListComponent},
  {path:"pdetail/:lid", component:ProductDetailComponent},
  {
    path:"ucenter", 
    component:UserCenterComponent,
    // 嵌套的二级路由
    children:[
      {path: "", redirectTo:"info", pathMatch:"full"},
      {path: "info", component: UcenterInfoComponent},
      {path: "avatar", component: UcenterAvatarComponent},
      {path: "security", component: UcenterSecurityComponent},
    ]
  },
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserCenterComponent,
    IndexComponent,
    ProductListComponent,
    ProductDetailComponent,
    NotFoundComponent,
    // 下面是 user-center里的功能
    UcenterInfoComponent,
    UcenterAvatarComponent,
    UcenterSecurityComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // 导入路由模块, 并注册路由词典, forRoot:词典用于跟模块中
    RouterModule.forRoot(routes),
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
