import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc03-child2-photo',
  templateUrl: './myc03-child2-photo.component.html',
  styleUrls: ['./myc03-child2-photo.component.css']
})

export class Myc03ChildPhotoComponent implements OnInit {
  // 普通的属性不能被组件传值
  // private child2Name:string = null;

  // 输入型属性 
  // 父组件可以利用这种属性传值
  @Input()
  public child2Name:string = null;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit 父传子 name:",this.child2Name);
    
  }

}
