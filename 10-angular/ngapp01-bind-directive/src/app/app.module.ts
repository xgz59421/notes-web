import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent_01 } from './my01-component/my-component_01';
import { Myc02HTML_bindComponent } from './myc02-html-bind/my-component_02';
import { Myc03EventComponent } from './myc03-event-bind/myc03.component';
import { Myc04NgforComponent } from './myc04-ngfor/myc04-ngfor.component';
import { Myc05NgstyleComponent } from './myc05-ngstyle/myc05-ngstyle.component';
import { Myc06NgswitchComponent } from './myc06-ngswitch/myc06-ngswitch.component';
import { Myc07NgmodelComponent } from './myc07-ngmodel/myc07-ngmodel.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';

import { FormsModule } from '@angular/forms'; // ngModlue指令
//自定义指令
import { QiangdiaoDirective } from './my-directive/qiangdiao.directive';


@NgModule({
  declarations: [
    AppComponent,
    MyComponent_01,
    Myc02HTML_bindComponent,
    Myc03EventComponent,
    Myc04NgforComponent,
    Myc05NgstyleComponent,
    Myc06NgswitchComponent,
    Myc07NgmodelComponent,
    QiangdiaoDirective,
    TestcomponentComponent,
  ],
  imports: [
    BrowserModule, // Re-exports `CommonModule` and `ApplicationModule`
    AppRoutingModule,
    FormsModule,   // FormsModule 提供了ngModel指令
  ],
  providers: [], // 注册服务
  bootstrap: [AppComponent]
})
export class AppModule { }
