import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {path: "", redirectTo:"index", pathMatch:"full"},
  {path: "index", component:MyIndexComponent},
  {path: "first", component:Myc01FirstComponent},
  {path: "grid", component:Myc02GridComponent},
  {path: "badge", component:Myc03BadgeComponent},
  {path: "icon", component:Myc04IconComponent},
  {path: "button", component:Myc05ButtonComponent},
  {path: "input", component:Myc06InputComponent},
  {path: "search", component:Myc07SearchbarComponent},
  {path: "card", component:Myc08CardComponent},
  {path: "slides", component:Myc09SlidesComponent},
  {path: "item", component:Myc10ItemComponent},
  {path: "scroll", component:Myc11InfiniteScrollComponent},
  {path: "popup", component:Myc12PopupComponent},
  {path: "tabs", component:Myc13TabsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
