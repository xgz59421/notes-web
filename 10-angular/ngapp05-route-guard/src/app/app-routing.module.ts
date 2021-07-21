import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { IndexComponent } from './index/index.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:"", redirectTo:"index", pathMatch:"full"},
  {path:"index", component:IndexComponent},
  {path:"user/center", component:UserCenterComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
