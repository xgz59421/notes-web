import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { UcenterInfoComponent } from './user-center/ucenter-info/ucenter-info.component';
import { UcenterAvatarComponent } from './user-center/ucenter-avatar/ucenter-avatar.component';
import { UcenterSecurityComponent } from './user-center/ucenter-security/ucenter-security.component';
import { LoginGuard } from './guard/login.guard';
import { TimeGuard } from './guard/time.guard';
import { LoginComponent } from './login/login.component';

const routes:Routes = [
  {path:"", redirectTo:"index", pathMatch:"full"},
  {path:"index", component:IndexComponent},
  {path:"login", component:LoginComponent},
  {
    path:"user/center", 
    component:UserCenterComponent,
    // 当前路由是否能被激活 : 路由守卫
    canActivate:[LoginGuard, TimeGuard],
    children:[
      {path:"", redirectTo:"info", pathMatch:"full"},
      {path:"info", component:UcenterInfoComponent},
      {path:"avatar", component:UcenterAvatarComponent},
      {path:"security", component:UcenterSecurityComponent}
    ]
  },
  {path:"**", component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserCenterComponent,
    NotFoundComponent,
    UcenterInfoComponent,
    UcenterAvatarComponent,
    UcenterSecurityComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
