## 字体,文本的样式
- [1. 字体 font](#1)
- [2. 文本的样式 text](#2)
--------
><h2 id='1'>1. 字体 font</h2> 
1. 设置字号    
   `font-size: 16px`  
   取值：px/pt/em/rem
2. 设置字体的类型 
-  `font-family:` 
- font-family:字体1, 字体2,...; 从第一个字体开始找,找到能使用的为止
3. 设置字体加粗  
- `font-weight: normal;` 
- 取值为100的整倍数  100~~1000  不能超过1000  
   normal;  普通   400  
   lighter  细      300  
   `bold`    粗      600  
   bolder  必粗更粗  700  
4. 字体的样式  
- `font-style:normal;`  
   取值:  
   `normal`  默认普通
   `italic`  斜体
5. 小型大写字母  `font-variant: small-caps;` 
6. 字体的简写方式
- `font: style variant weight size family;`
- 最简方式: `font: size family`

><h2 id='2'>2. 文本的样式 text</h2> 
1. 字体颜色 `color='red'` 
2. 文本的水平对齐   
- `text-align: center;`  
取值: left/center/right/justify(两端对齐)  
- 设置元素内部的文本,行内元素，行内块水平对齐方式
- 不能设置内部块级元素的水平对齐方式
3. 行高
- 如果行高大于文本的字号，那么文本会在行高的范围内，垂直居中显示
- `line-height:`  
   取值:  
   1.px为单位的数字，通常设置为容器高度，可以让文本在容器内部垂直居中显示, 不能用于多行文本的垂直居中  
   2.无单位的数字，设置行高是字号的倍数  
   `line-height:2; 表示 行高是30`
4. 文本线条修饰  
- `text-decoration: none;`  
   取值:  
   line-through； 删除线  
   underline   下划线  
   overline     上划线  
   `none`   去除所有线条（a标签去除下划线）  
5. 首行缩进 `text-indent:`以px为单位的数字
6. 文本的阴影
- `text-shadow:h-shadow  v-shadow  blur color;`  
   h-shadow  水平偏移  
   v-shadow  垂直偏移  
   blur       模糊程度  
   color      阴影颜色  
