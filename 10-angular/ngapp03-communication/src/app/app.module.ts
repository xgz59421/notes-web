import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { Myc01ParentBlogComponent } from './myc01-parent-blog/myc01-parent-blog.component';
import { Myc02ChildModifyComponent } from './myc02-child1-modify/myc02-child1-modify.component';
import { Myc03ChildPhotoComponent } from './myc03-child2-photo/myc03-child2-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    Myc01ParentBlogComponent,
    Myc02ChildModifyComponent,
    Myc03ChildPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
