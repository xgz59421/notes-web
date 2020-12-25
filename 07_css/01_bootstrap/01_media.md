## 响应式布局 media
- boot的3个重点  
1. 手写媒体查询  
2. 栅格布局  
3. sass  
- [1. 什么是响应式布局](#1)
- [2. 做响应式网页的条件](#2)
- [3. 如何测试响应式网页](#3)
- [4. 编写响应式](#4)
--------
><h2 id='1'>1. 什么是响应式布局</h2> 
- Responsive web page 响应式网页
- 可以根据浏览器设备的不同,而自动的改变布局，图片，文本效果不同影响用户体验

><h2 id='2'>2. 做响应式网页的条件</h2> 
1. 布局，初学者不要使用定位，不要固定元素的宽度
 要使用流式布局（默认文档流+浮动）+弹性
2. 文本和图片大小随着容器大小而改变
3. 媒体查询技术（css3）
><h2 id='3'>3. 如何测试响应式网页</h2> 
1. 使用真实设备测试
2. 使用第三方的测试软件
3. 使用chrome等浏览器自带的测试工具
><h2 id='4'>4. 编写响应式</h2> 
1. 移动设备适配 
- 在meta中设置视口

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <!--width=device-width-->  视口宽度为设备硬件宽度
    <!--initial-scale=1.0--> 设置视口初始化时，不能缩放   
    <!--maximum-scale=1.0--> 设置最大缩放比例为1，不能缩放
    <!--user-scalable=0--> 不允许用户进行缩放
  ```
- 最简方式
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ```
2. 媒体查询
- css3 2010提出媒体查询
- Media Query 做响应式的必备技术
- Media 媒体
  ```
  浏览网页的设备
  设备screen:pc pad phone
  TV  
  print
  ```
- 可以根据当前浏览器设备的不同(硬件，屏幕尺寸，屏幕方向，解析度)
- 自动的，有选择性的，执行一部分css代码，忽略其他css代码
- 写响应式网页，会让css代码量几何性的增长
- 所有复杂页面，不建议使用响应式
- 业内规定的5种屏幕尺寸
  ```bash
  超大屏 XL  view>=1200px  
          # min-width:1200px
  大屏   LG  992px<= view <1200px   
          # min-width:992px and max-width:1199.99px
  中屏   MD  768px<= view <992px
  小屏   SM  576px<= view <768px
  超小屏 XS    view < 576px
- 响应式编写
  1. 超大屏  
  `@media screen and (min-width:1200px){}`
  2. 大屏  
  `@media screen and (min-width:992px) and (max-width:1199.99px){}`
  3. 中屏 
  `@media screen and (min-width:768px) and (max-width:991.99px){ }`
  4. 小屏
  `@media screen and (min-width:576px) and (max-width:767.99px){ }`
  5. 超小屏
  `@media screen and （max-width:575.99px）{}`
- 媒体查询条件的优化（条件中`不加sreen`，不影响在pc、pad、phone中的效果）
  1. 超大屏  
  `@media (min-width:1200px){}`
  2. 大屏  
  `@media (min-width:992px) and (max-width:1199.99px){}`
  3. 中屏 
  `@media (min-width:768px) and (max-width:991.99px){ }`
  4. 小屏
  `@media (min-width:576px) and (max-width:767.99px){ }`
  5. 超小屏
  `@media（max-width:575.99px）{}`
- 媒体查询条件的优化（屏幕的向上兼容）
- 一定要注意代码的编写顺序  
  `@media (min-width:576px){}`   sm md lg xl  
  `@media  (min-width:768px){}`  md lg xl  
  `@media  (min-width:992px){}`  lg xl  
  `@media  (min-width:1200px){}` xl  
