# 其他重要样式属性
- [1. 设置显示方式](#1)
- [2. 设置显示效果](#2)
- [3. 设置透明度](#3)
- [4. 设置垂直对齐方式](#4)
- [5. 设置光标的样式](#5)
- [6. block/inline/inline-block](#6)
--------
><h2 id='1'>1. 设置显示方式</h2>
- `display:`   
   取值  
   (1) block 块级  
   (2) inline 行内  
   (3) inline-block 行内块  
   (4) table table  
   (5) none 隐藏,脱离文档流, 不占用页面空间  
><h2 id='2'>2. 显示效果</h2>
- `visibility: `  
   visible; 可见的，默认值  
   hidden; 隐藏，元素不可见  
- visibility：hidden 和 display：none区别
   ```
   visibility：hidden；隐藏, 没有脱离文档流,依旧占用页面空间
   display：none; 不占空间的隐藏
   ```
><h2 id='3'>3. 透明度</h2>
- `opacity:` 取值0~1  1不透明，0全透明
- rgba和opacity的区别
   ````
   rgba只会让当前颜色透明，不影响其他
   opacity会让当前元素内部所有与颜色相关的属性都变透明(包括后代元素的元素)
   ````
><h2 id='4'>4. 设置垂直对齐方式</h2>
- `vertical-align`
1. 表格td中，top/middle/bottom,设置表格内文本的垂直对齐方式
2. 行内块 ，top/middle/bottom，设置前后文本，行内元素，行内块与当前input的垂直对齐方式
3. img  baseline/top/middle/bottom  设置前后文本，行内元素，行内块与当前input的垂直对齐方式
-  一般情况下，会把默认的基线对齐改掉
   ```css
   img {
      vertical-align: middle;
   }
   ```
><h2 id='5'>5. 光标的样式</h2>
- 与系统内置的光标图片相关
- `cursor:default`  默认箭头  
   pointer 小手  
   wait    加载等待  
   help    帮助  
   text    文本输入  
   crosshair  十字  
><h2 id='6'>6. block/inline/inline-block</h2>
   |  块级元素   | 行内元素  |  行内块元素 |
   |  :-:  | :-:  | :-:  | 
   |div hn p pre hr|b em i span|input|
   |设置宽高有效|设置宽高无效，宽高靠内容撑开|设置宽高有效||
   |单独成行|其他行内元素和行内块共用一行|其他行内元素和行内块共用一行|
   |默认宽度是父元素100%. 不设置高度,高度靠内容撑开.没有内容且高度为0时,页面上不可见|宽度靠内容撑开|默认自带宽高，但是不同浏览器给的默认值不同|
   |4个方向外边都有效|上下外边距无效|4个方向外边距都有效.改变一个行内块的上下外边距，这个行内块会带着同一行的其他行内元素，行内块元素一起移动|