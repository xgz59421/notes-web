## 弹性布局d-flex
- `d-*-none/block/inline/inline-block/table/flex/inline-flex;`
- [1. 主轴方向](#1)
- [2. 项目在主轴上的排列方式](#2)
- [3. 主轴上换行](#3)
- [4. 交叉轴的对齐](#4)
- [5. 弹性和栅格的关系](#5)

><h2 id='1'>1. 主轴方向</h2> 
- `flex-*-row/column/row-reverse/column-reverse`
- 响应式改变主轴方向, *:xl/lg/md/sm
  ```html
  <div class="border border-dark d-flex flex-lg-row flex-md-column flex-sm-row-reverse">
    <div class="bg-warning">item1</div>
    <div class="bg-danger">item1</div>
    <div class="bg-info">item1</div>
  </div>
  ```
  
><h2 id='2'>2. 项目在主轴上的排列方式</h2> 
- `justify-content-*-start/center/end/around/between`
  ```html
  <div class="border border-dark 
        d-flex flex-row justify-content-lg-center 
        justify-content-md-between justify-content-sm-end">
    <div class="bg-warning">item1</div>
    <div class="bg-danger">item2</div>
  </div>
  ``` 
><h2 id='3'>3. 主轴上换行</h2> 
- `flex-*-wrap/nowrap/wrap-reverse`
  ```html
  <div class="border border-dark d-flex
        flex-lg-wrap flex-md-wrap-reverse flex-sm-nowrap">
    <div class="bg-warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur</div>
    <div class="bg-danger">item1</div>
    <div class="bg-info">item1</div>
  </div>
  ```

><h2 id='4'>4. 交叉轴的对齐</h2> 
- `align-items-*-start/end/center/stretch`
  ```html
  <div style="height: 50px" 
      class="border border-dark d-flex
          align-items-end align-items-lg-center 
          align-items-md-stretch align-items-sm-start">
    <div class="bg-warning">item1</div>
    <div class="bg-danger">item2</div>
    <div class="bg-info">item3</div>
  </div>
  ```
><h2 id='5'>5. 弹性和栅格的关系</h2>
- row的源码: 弹性,x轴主轴,可换行,左右-15px外边距
- 如果一个父元素,设置了d-flex flex-warp,可以直接当做row来使用 
  ```html
  <div class="d-flex border border-dark">
    <div class="col-3 border border-danger">item</div>
    <div class="col-3 border border-warning">item</div>
    <div class="col-3 border border-success">item</div>
    <div class="col-3 border border-info">item</div>
  </div>
  ```