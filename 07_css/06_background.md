## 背景
- [1. 背景颜色](#1)
- [2. 背景图片](#2)
- [3. 背景图片的平铺](#3)
- [4. 背景图片的定位](#4)
- [5. 背景图片的尺寸](#5)
- [6. 背景图片的固定](#6)
- [7. 背景的简写方式](#7)
- [8. 渐变 gradient](#8)
--------
><h2 id='1'>1. 背景颜色</h2> 
- `background-color: 'red';`
- 注意 `支持transparent` 

><h2 id='2'>2. 背景图片</h2>
- `background-image: url(09.png);`

><h2 id='3'>3. 背景图片的平铺</h2>
- `background-repeat: repeat;`  默认值，平铺   
   `no-repeat;` 不平铺    
   repeat-x; x轴平铺  
   repeat-y; y轴平铺  
><h2 id='4'>4. 背景图片的定位</h2> 
- `background-position:`  
- 如果取一个值，是设置x轴的位置，y轴默认垂直居中
- 如果取两个值，分别设置x轴和y轴的位置
- 取值：   
   1.px/rem为单位的数字  
   2.%  
   3.关键字 x:left/center/right y：top/center/bottom
><h2 id='5'>5. 背景图片的尺寸</h2> 
- `background-size：`
- 取值一个值，同时设置宽高
- 取值两个值，分别设置宽高
- 取值：  
   1.以px为单位的数字  
   2.%  
   3.关键字  
     - `cover` 覆盖，填充。容器被填满，图片显示不全也不在意
     - `contain` 包含。背景图片必须显示完整，容器有空白区域不在意

><h2 id='6'>6. 背景图片的固定</h2>
- `background-attachment:` 
- scroll; 默认值，背景图片会随着页面滚动条而滚动
- fixed 把背景图相对body固定，不会随着页面滚动条而滚动. 但是，只在原始容器中显示
* 坑，设置了fixed之后，背景图片相对于body去固定位置，而不是相对于本身元素
><h2 id='7'>7. 背景的简写方式</h2>
- `background:color img repeat attachment position;`
   ```css
   background: pink url("img/14.png") no-repeat scroll center;
   ```
- 注意：
   ```
   1.不包含size
   2.覆盖的时候，除非特殊需求，不能用简写方式去覆盖
   3.最简方式 background:color/image;
   ```
><h2 id='8'>8. 渐变 gradient</h2>
- 渐变是指多种颜色，平缓变化的一种显示效果
- 渐变的主要因素，色标：一种颜色，以及这种颜色出现的位置
- 一个渐变效果，至少2个色标
1. `线性渐变`，以直线的方式来填充渐变色
- `background-image: linear-gradient(方向,色标1,色标2........)`
- 色标取值:
   1. 颜色 %
   2. 颜色 px
   3. 只写颜色, 不写位置, 会把颜色平均分配
      ```css
      background: linear-gradient(to bottom, red, #00ffff);
      ```
- 方向取值:  
   1. 写终点   to top/to right/to bottom/to left
   2. 使用角度  
      0度:0deg (to top)  
      90度:90deg (to right)  
      180度:180deg (to bottom)  
      270度:270deg (to left)  
      ```css
      background-image: linear-gradient(90deg,
            black 0%, yellow 25%, black 50%, 
            yellow 75%, black 100%);
      ```
2. `径向渐变`，以圆的方式来填充渐变色
- `background-image: radial-gradient(半径 at 圆心,色标1，色标2.......)`
- 半径，px为单位的数字
- 圆心:  
   1.px为单位的数字  
   2.%  
   3.关键字  left/center/right    top/center/bottom  
- 色标：  
   1.%  半径的%  
   2.px为单位的数字，只要半径>0, 渐变效果与半径无关了
   ```css
   background-image: radial-gradient(
               100px at center center,
               #000, yellow,
               #000, yellow,
               #000
            );
   ```
3. `重复渐变`，将线性和径向重复几次实现
-  重复的线性渐变  
`background-image: repeating-linear-gradient(方向, 色标1, 色标2....);`
- 重复的径向渐变  
`background-image: repeating-radial-gradient(半径 at 圆心x 圆心y, 色标1, 色标2....);`
4. 低版本浏览器兼容问题(ie8.0以及以下的浏览器)
   ```css
   浏览器内部核心代码----浏览器内核
   -webkit-  chrome/safari
   -moz-     firefox
   -o-        opera
   -ms-       IE
   一定要注意，带内核前缀的线性渐变，方向不能写终点，要写起点，不能有to
   background-image: -webkit-linear-gradient(top,#ff0,#0ff);
   background-image: -o-linear-gradient(top,#ff0,#0ff);
   background-image: -ms-linear-gradient(top,#ff0,#0ff);
   background-image: -moz-linear-gradient(top,#ff0,#0ff);
   ```

