import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css'],
  providers: [] 
})
export class TestcomponentComponent implements OnInit {

  // 练习1
  eventInput = "";
  evenlist = [];


  addEvent(){
    // console.log(this.eventInput);
    if(!this.eventInput){
      return
    }
    this.evenlist.push(this.eventInput)
    this.eventInput = "";
    // console.log(this.evenlist);
  }
  deleteEvent(index){
    console.log("del");
    this.evenlist.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
