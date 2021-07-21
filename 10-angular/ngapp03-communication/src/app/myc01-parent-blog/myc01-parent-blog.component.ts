import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-myc01-parent-blog',
  templateUrl: './myc01-parent-blog.component.html',
  styleUrls: ['./myc01-parent-blog.component.css']
})
export class Myc01ParentBlogComponent implements OnInit {
  userName:string = '苍茫大地11';
  constructor() { }

  // 处理子组件的sonEvent
  doSonEvent(e){
    console.log("parent.doSonEvent");
    
    console.log(e);
    this.userName = e;
  }

  //通信的简单写法
  @ViewChild("parent",{static:true})
  private parent;
  @ViewChild("c1",{static:true})
  private c1;
  @ViewChild("c2",{static:true})
  private c2;
  print(){
    console.log(this.parent);
    console.log(this.c1);
    console.log(this.c2);
    
  }

  ngOnInit(): void {
  }

}
