## 尺寸 边框
- [1. 边框](#1)
- [2. 边框的倒角](#2)
- [3. 边框的阴影](#3)
- [4. 边框的边框](#4)
--------
><h2 id='1'>1. 边框</h2> 
1. 边框的属性  
- 简写方式:  同时设置4个方向的边框  
- 格式: `border: width style color`;   
   width: 边框的宽度  
   sytle: 边框的样式    
      1. solid 实线  
      2. double 双实线  
      3. dotted 虚线 点点的  
      4. dashed 虚线 线条的  
   color: 边框的颜色 / transparent 透明 
   ```css 
   {border: 3px solid #f00}
   ```
- 最简方式:只保留一个style  
   `格式: border: style;` 
   ```css
   border: double;
   取消边框: border:0 /none;
   ```
2. 单边定义
- 格式: boder-方向: width style colro
- 方向: top, bottom, left, right
   ```css
   border-left: double #0000ff;
   border-right: dotted #ff0000;
   border-top: solid green;
   border-bottom: dashed #00ff00
   ```
3. 单属性定义
- border-width
- border-style
- border-color
   ```css
   border-top: 10px solid #666;
   border-color: red;
   ```
4. 单边单属性
- boder-top(bottom/left/right) - width(style/color)
   ```css
   border: solid;
   border-bottom-color: red;
   ```

><h2 id='2'>2. 边框的倒角(倒成圆角)</h2> 
1. `border-radius: `  
- 取值:  
(1): 以px/rem为单位的数字  
(2): % 50%就是一个圆  
   ```css
   border-radius: 3px
   ```
2. 单角定义:
- border-top/bottom-left/right -radius:
   ```css
   border-top-left-radius: 20px;
   border-top-right-radius: 117px;
   border-bottom-left-radius: 133px;
   border-bottom-right-radius: 20px;
   ```
><h2 id='3'>3. 边框的阴影</h2> 
1. `box-shadow:h v blur spread color (inset);`  
- h-shadow  阴影水平偏移量
- v-shadow  阴影垂直偏移量
- blur  阴影的模糊程度
- spread  阴影大小
- color  阴影颜色
- inset  把外部阴影转化为内部阴影(如果不写，就是外部阴影)  
2. 最简方式 `box-shadow:h-shadow  v-shadow;`
><h2 id='4'>4. 轮廓</h2>
- 轮廓: 边框的边框, 绘制于边框外的线条
- `outline: width style color;`
- `outline: 0;` 取消轮廓
- 轮廓有单属性:   
`outline-style: solid;`  
`outline-width: 5px;`  
`outline-color: pink;`
- 轮廓没有单边的定义







