import { Pipe, PipeTransform } from '@angular/core';
import { UrlService } from '../service/url.service';

@Pipe({
  name: 'imgUrl'
})
export class ImgUrlPipe implements PipeTransform {
  constructor(private url:UrlService){

  }
  // 将src="img  --> src="http......:xxxx/img
  transform(value) {
    if(value){
      return value.replace(/src="img/g, ('src="'+this.url.host +'img'));
    }
    return null;
    
  }

}
