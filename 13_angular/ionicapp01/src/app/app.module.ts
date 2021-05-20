import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyIndexComponent } from './my-index/my-index.component';
import { Myc01FirstComponent } from './myc01-first/myc01-first.component';
import { Myc02GridComponent } from './myc02-grid/myc02-grid.component';
import { Myc03BadgeComponent } from './myc03-badge/myc03-badge.component';
import { Myc04IconComponent } from './myc04-icon/myc04-icon.component';
import { Myc05ButtonComponent } from './myc05-button/myc05-button.component';
import { Myc06InputComponent } from './myc06-input/myc06-input.component';
import { Myc07SearchbarComponent } from './myc07-searchbar/myc07-searchbar.component';
import { Myc08CardComponent } from './myc08-card/myc08-card.component';
import { Myc09SlidesComponent } from './myc09-slides/myc09-slides.component';
import { Myc10ItemComponent } from './myc10-item/myc10-item.component';
import { Myc11InfiniteScrollComponent } from './myc11-infinite-scroll/myc11-infinite-scroll.component';
import { Myc12PopupComponent } from './myc12-popup/myc12-popup.component';
import { Myc13TabsComponent } from './myc13-tabs/myc13-tabs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyIndexComponent,
    Myc01FirstComponent, Myc02GridComponent, Myc03BadgeComponent, Myc04IconComponent,
    Myc05ButtonComponent, Myc06InputComponent,Myc07SearchbarComponent,Myc08CardComponent,
    Myc09SlidesComponent, Myc10ItemComponent,Myc11InfiniteScrollComponent,
    Myc12PopupComponent,Myc13TabsComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
