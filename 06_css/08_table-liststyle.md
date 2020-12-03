## table, list-style
- [1. table](#1)
- [2. list-style](#2)
--------
><h2 id='1'>1. table</h2> 
1. 表格的常用属性
- table  
  尺寸，边框，背景，内外边距，文本都可以使用
- tr 背景和文本有效
- td/th  
  背景，边框，文本，内边距有效,外边距无效
  ```
  坑:如果代码中没有编写行分组，浏览器会自动生成tbody标签,所以选择器要注意，如果使用子代选择器，要添加tbody
  ```
   td中文本，垂直对齐方式的设置  
   `vertical-align: top/middle/bottom;`  
   `vertical-align 可以作用在 td/th, input/img中`

2. 表格的特有属性
- 边框合并  
  `border-collapse:`   
     - separate; 默认值，边框分离状态  
     - collapse; 合并状态
- 边框边距    
  前提,表格的边框必须是分离状态`border-collapse:separate;`  
  `border-spacing:`    
   取一个值，同时设置x，y的距离  
   取两个值，分别设置x,y的距离  
   以px为单位的数字  
- 设置表格标题的出现位置
  `caption-side: top/bottom;`
- 设置表格的显示规则  
   表格是一种特殊的显示方式  
   1. 表格尺寸:
    - 如果设置的尺寸大，内容少，以设置的尺寸为准  
    - 如果设置的尺寸小，内容多，以内容为准  
   2. 同一行的所有列的高度一致，都以最高的一列为准
   3. 不同行的同一列，宽度一致，都以最宽的一列为准
   4. 默认的表格布局，需要先把所有表格中的内容读取到内存中, 之后一次性渲染到页面上--------表格渲染效率非常低  
   `table-layout: auto/fixed;`  
   auto默认值，表格的自动布局  
   fixed 固定表格布局  
      ```css
      table{
        width:100px;
        table-layout:fixed;/* 只有定义了表格的布局算法为fixed，下面td的定义才能起作用。 */
      }
      td{
        word-break:keep-all;/* 不换行 */
        white-space:nowrap;/* 不换行 */
        overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
        text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用*/
      }
      ```  
   ---
      | 表格自动布局 | 固定表格布局 |
      | :----:| :----: |
      | 单元格的大小会自动适应内容   | 单元格严格按照设置的宽高显示 | 
      |表格复杂时，加载速度比较慢|不再提前读取到内存中,任何情况下加载速度都很快|
      |自动布局比较灵活|固定表格不够灵活|
      |适用于不确定每列大小，并且不复杂的表格|适用于确定每列大小的表格|

><h2 id='2'>2. list-style</h2> 
- ul 默认 上下外边距16, 左内边距是40  
1. 设置列表标识类型 
  `list-style-type:取值`  
  disc 实心圆 (默认值)  
  circle 空心圆  
  square 实心方块  
  none 去掉列表项  
2. 列表项图标   
  `list-style-image: url("../img/mm.png");`
3. 列表项的位置  
  `list-style-position:取值`  
  outside 在li外边, ul左内边距 (默认值)  
  inside 在li内部  
4. 简写方式  
  `list-style:type url() position;`
  `list-style:none;` 去除列表项
  
