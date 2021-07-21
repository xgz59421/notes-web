## boot css
- [1. 如何使用boot](#1)
- [2. 全局css样式](#2)
- [3. 辅助类](#3)
--------
><h2 id='1'>1. 如何使用boot</h2> 
- boot没有封装xs超小屏
  ```html
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="css/bootstrap.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <div class="container">
    所有的元素和类名都要写在这里			
  </div>
  ```

><h2 id='2'>2. 全局css样式</h2> 
1. 容器  
  `container` 定宽容器，在不同屏幕下，都定死了最大宽度  
  `container-fluid` 变宽容器，宽度永远是body的100%
2. 按钮  
  按钮的基本类 `btn`   
  按钮颜色  
  `btn-danger`/`warning`/`success`/`info`/`primary`/`secondary`/`dark`/`light`  
  不同颜色的镂空按钮  
  `btn-outline-info/danger`.....  
  不同按钮大小  
  `btn-lg/sm`  
  块级按钮  
  `btn-block`
    ```html
    <a class="btn btn-danger btn-lg" href="">危险</a>
    <a class="btn btn-danger btn-block" href="">危险</a>
    ```
3. 图片相关  
  `rounded`  0.25rem的圆角  
  `rounded-circle`  50%的圆角  
  `img-thumbnail` 缩略图，带内边距，带边框的图片  
  `img-fluid` 响应式图片，图片可以缩放，但是不能超过本身原始尺寸  
    ```html
    <img class="rounded" src="img/1.jpg" alt="">
    ```
4. 文本相关  
  `text-muted/danger/warning/info......`字体颜色    
  `.h1 .h2 .h3 .h4 .h5 .h6` 字号大小(自带加粗)     
  `font-weight-normal/bold/light` 字体粗细     
  `text-uppercase`大写     
  `text-lowercase`小写    
  `text-capitalize` 首字母大写   
  `font-italic` 字体样式   
  文本的水平对齐方式    
  `text-*-left/right/center`   *:sm/md/lg/xl  
  `text-justify` 没有封装响应式  
  `text-truncate`文本溢出变为小点点  
  ```html
  <div class="text-muted text-capitalize font-weight-bold h6 text-sm-justify text-md-right text-lg-center text-xl-right">JOEfklfjew
  </div>
  ```
5. 列表相关---列表组  
  `list-unstyled` 左内边距清空，去点  
  列表组  
  `ul. list-group`  弹性，主轴y轴，左内边距，下外边距清空  
  `li. list-group-item` 相对定位，块级，内边距，边框，背景色 (第一个li的上圆角 和最后一个li的下圆角)   
  `list-group-item-danger/warning.......` 列表项的颜色  
  `active` 激活  
  `disabled`禁用  
    ```html
    <ul class="list-group list-unstyled">
          <li class="list-group-item list-group-item-danger">拯救大兵瑞恩</li>
          <li class="list-group-item list-group-item-warning active">肖申克的救赎</li>
          <li class="list-group-item list-group-item-success">阿甘正传</li>
          <li class="list-group-item list-group-item-info disabled">泰坦尼克号</li>
        </ul>
    ```
6. 表格相关  
  `table` 基本类，   设置了table元素，th、td的一些基本样式  
  `table-bordered`  设置table和th/td的边框  
  `table-striped`    隔行变色，奇数行添加透明度0.05的黑色背景  
  `table-hover`     tr鼠标悬停时，tr添加透明度0.075的黑色背景  

><h2 id='3'>3. 辅助类</h2> 
1. 边框  
`border` 边框的基本类。设置4个方向的边框  
`border-top/right/bottom/left` 单独设置某一个方向的边框  
`border-0` 清除4个方向的边框  
`border-top/right/bottom/left-0` 单独清除某一个方向的边框  
`border-danger/info/warning.....`边框颜色  
2. 浮动  
  `float-*-left/right/none`   *:sm/md/lg/xl  
  `clearfix`  解决高度坍塌 
    ```html
    <div class="border border-dark clearfix">
      <div class="border float-lg-left float-md-right float-sm-left border-danger">11</div>
    </div>
    ```  
3. 背景  
  `bg-transparent/danger/warning/info.....`
4. 圆角  
  `rounded`     
  `rounded-circle`  
  `rounded-top/right/bottom/left`  
  `rounded-0`
5. 内外边距  
  `m/mt/mr/mb/ml/mx/my-*-0/1/2/3/4/5/auto`     
  `p/pt/pr/pb/pl/px/py-*-0/1/2/3/4/5`
    ```           
      *：sm/md/lg/xl
      0     0px  清空
      1      0.25rem
      2      0.5rem
      3      1rem
      4      1.5rem
      5      3rem
      0~5没有包含的数值，只能自己写样式  
    ```
6. 尺寸  
  `w-25/50/75/100`  25%  50%  75%  100%  
  `h-25/50/75/100`  
  `数值不匹配，需要自己写样式`  
7. 元素的显示方式  
  `display:none/block/inline/inline-block/table/flex`  
  `d-*-none/block/inline/inline-block/table/flex`  
  *:sm/md/lg/xl  
