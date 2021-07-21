import { Component } from '@angular/core';

@Component({
  selector: 'app-myc04-ngfor',
  templateUrl: './myc04-ngfor.component.html',
  styleUrls: ['./myc04-ngfor.component.css']
})
export class Myc04NgforComponent {
  //for
  emplist = ["然然", "亮亮", "东东", "涛涛"];

  //if else
  hasMore = true;  //加载更多
  loadMore(){
    this.hasMore = false;
  }
}
