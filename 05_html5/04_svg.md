# svg 
--------
>1.创建画布标签
```html
<svg id="s3" width="500" height="400">
```
>2.svg 圆环标签
```html
<circle cx="" cy="" r="" fill="" stroke="">
  cx,cy 圆心坐标
  r 半径
  fill 填充
  stroke 描边
通过js在svg画布上动态创建元素
1. 字符串拼接方式来创建元素
  var str = "<circle>;</circle>"; 
  svg.innerHTML = str;
2. 通过创建对象方式
  #指定元素svg标准
  var c = document.createElementNS( "http://www.w3.org/2000/svg","circle");
  svg.appendChild(c);
3. 为元素添加属性获取属性
  设置与获取属性只能采用核心DOM方法不能使用HTML DOM
  核心DOM circle.setAttribute("属性名",值)
  var 值=circle.getAttribute("属性名");
  HTML dom circle.name = value var name = circle.name
```
>3.svg 直线标签 line
```html
<line x1="" y1="" x2="" y2="" stroke-width="" stroke="" stroke-linecap="">
  x1="" y1="" 起点坐标
  x2="" y2="" 终点坐标
  stroke-width="" 边线宽度 
  stroke="" 边线样式
  stroke-linecap="" 边线顶端样式 round 圆角
```
>4.svg polyline 折线
```html
多个坐标点组件一条折线
<polyline points="50,50 70,55 60,66 " stroke="" stroke-width=""/>
  points 一组坐标点
```
>5.svg linearGradient 渐变
```html
渐变特效对象:一种特效样式(从一种颜色慢慢过滤另一种颜色效果)
<defs>
  <linearGradient id="g3" x1="" y1="" x2="" y2="">
  <stop offset="" stop-color="" />
  </linearGradient>
</defs>
<ANY fill="url(#g3)" stroke="url(#g3)"></ANY>
```
>6.svg--(滤镜)
```html
滤镜也是一种特效对象:模糊滤镜
<defs>
  <filter id="f3">
    <feGaussianBlur stdDeviation="数字" />
  </filter >
</defs>
数字模糊级别 1~10
<ANY filter="url(#g3)"></ANY>
https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/filter
```

