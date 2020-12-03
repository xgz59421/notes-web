### 表格 table
------
1. table创建  
   表格的开始: table  
   表格的一行: tr  
   表格的一列: td  
2. table属性  
   border="1" 设置边框宽度  
   bordercolor="purple"  边框颜色  
   width="200"  设置表格宽  
   height="200" 设置表格高  
   bgcolor="pink" 设置背景颜色  
   `align=""`  left/center/right 水平对齐方式  
   `cellpadding="10"` 边框到内容之间的距离  
   `cellspacing="20"` 边框与边框之间的距离  
3. tr的属性  
   align  设置内部文本的水平对齐方式  
   valign="bottom"  top/middle（默认值）/ bottom  设置内部文本的垂直对齐方式
4. td的属性  
   align  设置内部文本的水平对齐方式  
   valign="bottom"  top/middle（默认值）/ bottom  设置内部文本的垂直对齐方式  
   width  
   height 避免让td的尺寸和 table的尺寸发生冲突
   bgcolor  
   `colspan`  跨列合并单元格  
   `rowspan` 跨行合并单元格
5. 可选标记caption  
   表格的标题:`<caption>标题</caption>`  
   必须紧紧跟着 `<table>`的开始标签
6. 可选标记th  
   行和列的标题`<th></th>`  
   特点:加粗,居中 th代替td, 所有td的属性,th都可以用
7. 表格的复杂应用
 - 行分组  
  可以将连续的几行,划分到一个组中,进行统一管理  
  表头 `<thead></thead>`  
  表体 `<tbody></tbody>`  
  表脚 `<tfoot></tfoot>`  
  行分组不可见,如果源码没有行分组,浏览器渲染时,自动添加tbody  
 - 表格的嵌套  
  表格中的所有嵌套,都要放到td中  
8. 总结
  表格中的列,如果变宽,影响的是所有行这一列的宽度
  表格中的列,如果变高,影响的是所有列这一列的高度
   