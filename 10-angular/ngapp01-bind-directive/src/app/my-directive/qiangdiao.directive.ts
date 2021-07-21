import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appQiangdiao]'
})
export class QiangdiaoDirective {

  constructor(el:ElementRef) {  //: 后面是形参的类型
    console.log("调用appQiangdiao 自定义指令");
    console.log(el);
    // console.log(el.nativeElement);
    el.nativeElement.style.background = "#fcc"
    el.nativeElement.style.color = "green";
    el.nativeElement.style.padding = "10px";
  }

}
