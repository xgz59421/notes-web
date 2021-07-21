import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from "@angular/common/http";

// 引入组件
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { TabsComponent } from './tabs/tabs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ImgUrlPipe } from './pipe/img-url.pipe';
import { FormsModule } from '@angular/forms';

const routs:Routes = [
  {path: "", redirectTo: "index", pathMatch:"full"},
  {path: "index", component: IndexComponent},
  {path: "product-list", component: ProductListComponent},
  {path: "product-detail/:lid", component: ProductDetailComponent},
  {path: "cart", component: CartComponent},
  {path: "login", component: UserLoginComponent},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent, IndexComponent, ProductListComponent, ProductDetailComponent, 
    CartComponent, TabsComponent, NotFoundComponent, UserLoginComponent,
    ImgUrlPipe,
  ],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), 
    // AppRoutingModule,
    RouterModule.forRoot(routs),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
