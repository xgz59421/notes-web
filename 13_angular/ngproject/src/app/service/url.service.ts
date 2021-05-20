import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  public host = 'http://101.96.128.94:9999/';
  public indexAPI_get = this.host + 'data/product/index.php';
  public plistAPI_get = this.host + 'data/product/list.php?pno=';
  public pdetailAPI_get = this.host + 'data/product/details.php?lid=';
  public loginAPI_post = this.host + 'data/user/login.php';
  public registerAPI_post = this.host + 'data/user/register.php';
  constructor() { }
}
