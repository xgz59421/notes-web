import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Myc01PipeComponent } from './myc01-pipe/myc01-pipe.component';
import { Myc02ServiceComponent } from './myc02-service/myc02-service.component';
import { Myc03ServiceHttpComponent } from './myc03-service-http/myc03-service-http.component';
import { TestComponentComponent } from './test-component/test-component.component';

import { SexPipe } from './mypipe/sex.pipe'; //管道
import { ZzmmPipe } from './mypipe/zzmm.pipe';

//自定义 log服务
import { LogService } from './service/log.service';
//官方提供 http 服务
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    Myc01PipeComponent,
    Myc02ServiceComponent,
    Myc03ServiceHttpComponent,
    SexPipe,    //管道 性别
    ZzmmPipe,   //管道 政治面貌
    TestComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LogService], //注册服务
  bootstrap: [AppComponent]
})
export class AppModule { }
