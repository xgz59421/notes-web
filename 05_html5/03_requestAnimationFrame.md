# requestAnimationFrame

```
定时器:一次性定时器/周期性定时器
requestAnimationFrame 智能定时器
此定时器主要使用范围:动画和游戏中
特点:
  setTimeout(fn,500);
  setInterval(fn,500); 周期性调用fn函数间隔500ms
  二台电脑: 新 12ms 旧 600ms
解决方案:requestAnimationFrame 智能计算当前浏览器效率
11ms,计算600ms 按照不同浏览器设置间隔时间
实现功能平滑
标准语法
  requestAnimationFrame(fn)
如何周期调用定时器完成游戏
  function f1(){
    requestAnimationFrame(f1); ....
  }
```