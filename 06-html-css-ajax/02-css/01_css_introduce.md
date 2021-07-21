## CSS
- [1. css概述](#1)
- [2. 使用css样式的方式](#2)
- [3. css的特征](#3)
- [4. CSS hack](#3)
--------

><h2 id='1'>1. css概述 </h2> 
1. 什么是css  
Cascading style sheets  
层叠样式表,级联样式表, 简称 样式表  
2. css作用  
对页面中的html元素进行美化  
3. HTML和css的关系  
* HTML: 负责页面结构的搭建,负责数据的展示
* css: 负责美化页面
4. HTML的属性和css使用原则  
W3C建议我们尽量使用css的方式来取代html属性

><h2 id='2'>2. 使用css样式的方式</h2> 
1. 内联样式  
格式: `<any style="样式声明"></any>`  
`<div style="color: red;background-color: pink;font-size:22px">我是内联样式</div>`
2. 内部样式  
在head标签中，添加`<style></style>`标签  
语法：选择器{ 样式声明；样式声明； }
3. 外部样式  
单独创建一个css文件，在html中的head标签中  
`<link rel="stylesheet" href="1.css">`

><h2 id='3'>3. css的特征</h2> 
1. 继承性  
子元素会继承父元素的多数样式(主要关注文本样式)  
a标签不会继承文本颜色
2. 层叠性  
- 可以为一个元素定义多个样式规则  
- 如果样式属性不冲突,是所有样式都可以作用到这个元素
3. 优先级  
- 一个元素，有冲突的属性时，需要按照优先级显示  
- 默认优先级：    
   ```
   最高----内联  
   就近原则----内部，外部样式  
   最低----浏览器默认样式 
   ``` 
4. 暴力调整优先级`!important`
使用!important的关键字, 直接获得最高优先级
注意，内联样式不允许设置!important  
`h6 {color: red !important;}`

><h2 id='4'>4. CSS hack</h2>
- 不同浏览器对css解析是不同的，尤其是低版本浏览器
- css reset 相对平和, 保留有价值的默认值
- Eric.css 很暴力
- normalize.css 是css reset的一个变种
- 为了让代码能够兼容地板浏览器，CSS hack
  ```
  -webkit-
  -moz-
  -o-
  -ms-
  ```

