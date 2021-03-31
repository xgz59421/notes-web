# Worker 多线程
>1.概述
```
JavaScript 采用单线程模型，也就代表所有任务只能在一个线程上完成，一次只能做一件事。如果前
面的任务没有完成的话，后面的任务只能等待。
Web worker 就是为 JavaScript 创造多线程环境，主线程创建 worker 线程后，将相关的、繁重的计
算工作交由后者完成，主线程工作的同时， worker 线程也在工作，而且互不干扰。
```

>2.抛出个问题  
```
问题: js加载时间过长用户很长时间看不到网页内容
解决方案: 
  创建新线程帮助UI主线程执行耗时 js任务
```
>3.worker需要注意事项
```
1、同源策略，必须保证主线程与 worker 线程同源
2、 DOM 限制， worker 线程不允许访问 DOM 对象
3、通信联系，主线程与 worker 线程不能直接通信，必须通过消息完成
4、脚本限制， worker 线程可以使用 XMLHttpRequest对象 发送 AJAX 请求
5、文件限制， worker 线程无法读取本地文件，必须来自网络
```
>3.上代码
```js
主线程: 
  // 创建worker线程
  var w = new Worker("06_worker.js");
  // 向worker发送数据
  w.postMessage("123456");
  // 接受worker数据
  w.onmessage = function (event) {
    console.log("接受worker数据, ", event.data);
    var msg = document.getElementById("msg");
    msg.innerHTML = event.data;
  }
worker线程:
  // 接受数据
  onmessage = function (event) {
    console.log("UI发送过来的数据, ", event.data);
  }
  // 向UI 发送数据
  postMessage("执行成功");
```