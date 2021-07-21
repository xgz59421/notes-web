import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {
  // 管道执行过滤任务的一个固定函数
  transform(oldValue, language="zh") { // 转换 变形
    if(language == "zh"){
      if (oldValue == 1) {
        return "男";
      } 
      else if (oldValue == 0){
        return "女";
      }else{
        return "未知";
      }
    }
    else if(language == "en"){
      if (oldValue == 1) {
        return "male";
      } 
      else if (oldValue == 0){
        return "female";
      }else{
        return "unknown";
      }
    }
    
  }

}
