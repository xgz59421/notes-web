import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zzmm'
})
export class ZzmmPipe implements PipeTransform {

  transform(oldValue, format="short") {
    if(format=="short"){
      if (oldValue == 10) return "党员";
      else if (oldValue == 20)  return "团员";
      else return "群众";
    }else if (format=="long"){
      if (oldValue == 10) return "中国共产党党员";
      else if (oldValue == 20)  return "中国共青团团员";
      else return "中华人民共和国群众";
    }
    
  }

}
