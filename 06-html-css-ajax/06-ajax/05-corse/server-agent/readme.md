### :服务器代理解决跨域
* 需求 http://127.0.0.1:8080/index.html 请求http://127.0.0.1:3000/ 
  报错:
  Access to XMLHttpRequest at 'http://127.0.0.1:3000/weather' from origin 'http://127.0.0.1:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

* 解决 服务器代理
  http://127.0.0.1:8080/index.html 向同源下的 http://127.0.0.1:8080/weather 发起请求
  再由8080 转发给http://127.0.0.1:3000, 请求的数据在发送给index.html页面