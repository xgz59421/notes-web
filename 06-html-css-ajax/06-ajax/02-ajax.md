## AJAX
--------
>## 1.同步Synchronous
1. 同步任务：在一个任务进行的过程中，不能开启其他任务。
2. 同步访问：浏览器在向服务器发送一个请求时，不能做其他的任何事情，只能等待响应归来
    ```
    出现的场合  
      1. form提交请求，是同步
      2. 浏览器地址栏访问是同步
      3. a标签跳转同步
    ```

>## 2.异步ASynchronous
1. 可以同时执行多个任务
2. 异步访问:在浏览器向服务器发送请求时，用户可以在浏览器上做其他事
    ```
    出现场合
      1. 用户名重复验证
      2. 股票软件
      3. 百度的搜索的联想
    ```
  
>## 3.什么是ajax
* Asynchronous Javascript and XML  
  异步的js和xml, 现在95%用json   
* ajax的原理  
  使用js提供异步对象XMLHttpRequest  
  异步的向服务器发送请求, 并接受响应回来的数据

>## 4.使用ajax
1. 创建异步对象  
  `var xhr=new XMLHttpRequest();`  
    ```javascript
    兼容IE8以下ajax:
    var xhr;
    if(window.XMLHttpRequest){ 
      xhr = new XMLHttpRequest();
    }else { 
      xhr = new ActiveXObject("Microsoft.XMLHttp");
    } 
    ```
2. 通过异步对象，创建请求  
  `xhr.open("请求方法","请求的url",isAsy);`  
前两个参数必须是字符串  
isAsy:是不是使用异步的方式发送请求，true异步，false同步
3. 通过异步对象，发送请求  
  `xhr.send();`
4. 通过异步对象，接收响应  
- `xhr.onreadystatechange=function(){}` , 这个function会运行4次
- `xhr. readyState`属性，代表xhr的状态，有5个值  
  0 请求尚未初始化  
  1代表已经打开服务器连接，请求正在发送  
  2 开始接收响应头信息  
  3 开始接收响应主体  
  4 响应主体接收完毕  
  ```javascript
  xhr.onreadystatechange=function(){
      if(xhr. readyState==4 && xhr.status==200){
        var r=xhr.responseText;
      }
    }
  ```
- ajax get:  
  ```javascript
    //1.创建异步对象  
    var xhr = new XMLHttpRequest(); 
    //4.监听,接收响应
    xhr.onreadystatechange = function () {
      if(xhr.status == 200 && xhr.readyState == 4){
        var reslut = xhr.responseText;
        if(reslut == 1){
          alert("登录成功");
          location.href = "http://xxx.list.html"
        }else {
          alert("登录失败")
        }
      }
    }
    //2.创建请求
    var url = "http:login/" + uname.value + "&" +upwd.value;
    xhr.open("get",url,true);
    //3.发送请求
    xhr.send();
  ```
- ajax post:
  ```javascript
    var xhr = new XMLHttpRequest(); 
    xhr.onreadystatechange =fn();
    var url = "http://localhost:8080/user/reg";
    xhr.open("post", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var formdata = "uname=" + uname.value + "&upwd=" + upwd.value;
    xhr.send(formdata);
  ```


>## 5.http 与 resful 传递参数
1. http原生get带参数   
  `url = '"/xxxget?uname="+$uname+"&upwd="+$upwd'`
2. restful规则get带参数  
  `url =  http:xxxget/dingding&1234567`  
  后台的写法:  
    ```javascript
    router.get("/restful_get/:uname&:upwd",(req,res)=>{
      var $uname=req.params.uname;
      var $upwd=req.params.upwd;
    });
    ```  
    注意：  
    `1. 前后台的 连接符号 &可以改成"-",但是前后端要保持一致.`  
    `2. 非空验证 restful 不能再后台做非空验证,如果参数为空--->404,只能在前台做非空验证.`  
3. restful get(不带参数)
* 不带参数 restful get 和 不带参数的 http get 写法一模一样
4. restful delete (与resutl get一样)  
后端:  
`router.delete("/restful_del/:uid",function (req, res)`  
前端:  
`var url = "http://localhost:8080/ajax/restful_del/" +uid;`  
`xhr.open("delete",url,true); ` 
5. restful post  
后端:与http post 是一样的  
前端:设置请求头,请求体   
    ```javascript
      xhr.open("post", url, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
      formdata = "uname=" +_uname +"&upwd=" +_uname;
      xhr.send(formdata);
    ```
6. restful put修改  
put 与 post 请求 一样

>## 6.json解析  
* javaScript object Notation js对象表现方式  
* 以js对象的数据表现出来的字符串,叫json字符串,简称json串  
  ```
  json 字符串的格式: 
    1. json中已对{}表示一个对象  
    2. json中的属性,必须使用双引号括起来  
    3. 值是字符串,也必须带双引号  
    4. json表现出来的是一个字符串,所以最外层使用单引号括起来 
  ```
  ```json 
  arr json: `[ 
    {"uid":1001,"uname":"lucy"}, 
    {"uid":1001,"uname":"lucy"} 
    ]'
  obj json: 
    '{"uid":1001,"uname":"lucy"}'
  ```
* 解析:`var obj = JSON.parse(json串);`

>## 7.XML解析
* eXtensible Markup Language 可扩展标记语言
* xml 是 html的一个变种,专门来承载数据用的
* xml 中所有的标记都是自定义的
  ```
  xml 语法:  
    1. 版本声明  
    2. xml标签必须成对出现,xml只有双标记  
    3. xml 严格区分大小写  
    4. xml 嵌套与html 相同  
    5. 一个xml文件,有且只有一对根标记  
    6. 每个标记允许自定义属性,但是属性的值,必须使用双引号括起来  
  ```