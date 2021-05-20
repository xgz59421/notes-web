import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-myc01-pipe',
  templateUrl: './myc01-pipe.component.html',
  styleUrls: ['./myc01-pipe.component.css']
})
export class Myc01PipeComponent implements OnInit {
  myzzmm = 10
  empList = {
    eid: 101,
    ename: '亮亮',
    salary: 5008.12345,
    birthday: 0,
    sex: 1,
    zzmm: 10
  }

  constructor() {}

  ngOnInit(): void {}

}
