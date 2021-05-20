import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  // 练习2
  empList = [
    {eid:101, ename:'亮亮', salary:5000, birthday:0, sex:1, zzmm:10},
    {eid:102, ename:'然然', salary:6000, birthday:0, sex:0, zzmm:20},
    {eid:103, ename:'东东', salary:7000, birthday:0, sex:1, zzmm:30},
    {eid:104, ename:'涛涛', salary:8000, birthday:0, sex:0, zzmm:20},
  ]

  constructor() { }

  deleteEmp(index){
    // console.log(index);
    // this.timer.start();
    this.empList.splice(index, 1);
    // this.timer.end("emp");
  }
  ngOnInit(): void {
  }

}
