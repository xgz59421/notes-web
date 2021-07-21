# video
--------
>1.标准语法
```html
<video src="视频路径"> 你的浏览器版本太低,请升级! </video>
```
>2.兼容性语法
```html
注意: 需要准备多个视频文件
<video>
  <source src="xxx.mp4">
  <source src="xxx.flv">
  <source src="xxx.webm">
  你的浏览器版本太低,请升级!
</video>
```
>3.常见属性
```py
1. controls 显示播放视频原生控件(兼容性差)
2. loop 循环播放
3. muted 静音播放
4. preload 预加载
   none不预加载
   metadata 只加载元数据(视频时长,一个界面/视频高度/宽度)
   auto(默认) 加载元数据且加载一定时长
5. autoplay 自动播放(兼容性差)
6. poster 播放前显示一张图片(广告),如果视频暂停,广告不再显示
```
>4.方法
```py
必须通过js程序获取 "视频对象" 才能执行如下属性,方法
1. volume: 音量(0~1)  
    video.volume = 0.8
2. playbackRate 播放速度  
    video.playbackRate = 5
3. play() 播放视频
4. pause() 暂停视频
5. paused 状态: 暂停:true, 播放: false
     if (video.paused)
```
>5.事件
```py
1. canplaythrough: 当视频加载结束后可以播放时触发事件(一次)
   duration: 视频时长(秒)
2. ended: 当前视频播放结束(一次)
3. timeupdate: 视频正在播放中(多次) 4/s
  currentTime: 当前播放时间点
```
>6.视频与图片专用样式 `object-fit`
```py
1. video 元素有一种样式与图片通用 object-fit
此属性指定视频在区域内如何显示
2. fill:填充 默认值:将视频拉伸操作填满整个父元素
3. contain:包含 保持原有视频比例,父元素空白区域
4. conver:覆盖 保持原有视频比例,宽度或高度至少有一个 与父元素一致
```
>7.全屏API
```
HTML5提供了可以让任何HTML元素及其子元素占满整个屏幕的API。
全屏显示： (ESC键退出全屏)
  dom对象.requestFullscreen()     
退出全屏：
  document.exitFullscreen()
```
