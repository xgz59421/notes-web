## boot 组件
```bash
使用boot封装的事件要注意:
  #1.激活事件的元素
  #2.事件影响的元素
```
- [1.按钮组:btn-group](#1)
- [2.下拉菜单:dropdownd](#2)
- [3.折叠:collapse](#3)
- [4.信息提示框:alert](#4)
- [5.卡片:card](#5)
- [6.手风琴(卡片+折叠):card+collapse](#6)
- [7.媒体对象:media](#7)
- [8.徽章:badge](#8)
- [9.**导航:nav (nav-tabs,nav-pills)](#9)
- [10.导航栏:navbar](#10)
- [11.折叠导航栏:navbar + collapse](#11)
- [12.焦点轮播图:carousel](#12)
- [13.模态框:modal](#13)
- [14.巨幕:jumbotron](#14)
- [15.面包屑导航:breadcrumb](#15)
- [16.进度条:progress](#16)
- [17.分页:pagination](#17)

><h2 id='1'>1.按钮组:btn-group</h2> 
- `.btn-group` 按钮组,横向
  ```
  1.弹性,x轴主轴,让内部btn挨在一起
  2.同时清空了,除了一个btn 以外的, 左上,左下圆角
  3.同时清空了,除了最后一个btn以外的, 右上,右下圆角
  ```
- `.btn-group-vertical` 按钮组,垂直
  ```
  1.弹性,y轴主轴
  2.同时清空了,除了一个btn 以外的, 左上,右上圆角
  3.同时清空了,除了最后一个btn以外的, 左下,右下圆角
  ```
- `.btn-group-sm/md/lg` 改变按钮组的大小, 修改内边距和字号
  ```html
  <div class="btn-group-vertical btn-group-lg">
    <button class="btn btn-danger">小鸡炖蘑菇</button>
    <button class="btn btn-warning">猪肉炖粉条</button>
    <button class="btn btn-info">铁锅炖大鹅</button>
  </div>
  ```

><h2 id='2'>2.下拉菜单:dropdownd</h2> 
- `.dropdownd`
- `.dropdown-toggle`(添加向下小箭头) 
  ```
  事件:
    1.哪个元素在激活事件 button data-toggle="dropdown"
    2.事件影响的元素是谁 ul 由于button和ul都属于div.dropdown。这里不需要指定目标
  ```
  ```html
  <div class="dropdownd">
    <button data-toggle="dropdown" class="btn btn-danger dropdown-toggle">菜单</button>
    <ul class="dropdown-menu">
      <li><a href="">丁丁炒面</a></li>
      <li><a href="">它似蜜</a></li>
      <li><a href="">大盘鸡</a></li>
      <li><a href="">拉条子</a></li>
    </ul>
  </div>
  ```

><h2 id='3'>3.折叠:collapse</h2>
- `.collapse` 隐藏
  ```
  事件:
    1.button激活事件 data-toggle="collapse"
    2.事件影响div data-target="#div的id"
  ```
  ```html
  <button data-toggle="collapse" data-target="#d1" class="btn btn-danger">折叠按钮</button>
  <div id="d1" class="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  </div>
  ```
><h2 id='4'>4.信息提示框:alert</h2>
- `.alert`
  ```html
  <div class="alert alert-info">
    <span>页面跑丢辣,找不到辣!!!</span>
    <span data-dismiss="alert" class="close">&times;</span>
  </div>
  ```
  ```
  事件
    1.点击span   data-dismiss="alert"
    2.div会关闭
  ```

><h2 id='5'>5.卡片:card</h2> 
- `.card`
  ```html
  <div class="card">
    <div class="card-header">
      <h3>卡片标题</h3>
    </div>
    <div class="card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci</p>
    </div>
    <div class="card-footer">
      <p>联系方式</p>
    </div>
  </div>
  ```
><h2 id='6'>6.手风琴(卡片+折叠):card+collapse</h2>
- 组件结构:父亲: 孩子
  ```html
  <div id="parent">
    <!-- 孩子1 -->
    <div class="card">
      <div class="card-header">
        <a class="btn btn-link" href="#c1" data-toggle="collapse">卡片1</a>
      </div>
      <div class="collapse" data-parent="#parent" id="c1">
        <div class="card-body ">
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
    <!-- 孩子2 -->
    <div class="card">
      <div class="card-header">
        <a class="btn btn-danger" href="#c2" data-toggle="collapse">卡片2</a>
      </div>
      <div class="collapse" data-parent="#parent" id="c2">
        <div class="card-body ">
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  </div>
  ``` 

><h2 id='7'>7.媒体对象:media</h2> 
- `.media`
  ```html
  <div class="media border p-1">
    <img class="mr-2" src="img/zhm.png" alt="">
    <div class="media-body">
      <h4>张惠妹aMEI</h4>
      <p class="mb-0">台湾歌手张惠妹</p>
    </div>
  </div>
  ```

><h2 id='8'>8.徽章:badge</h2> 
- 把徽章看成非常小的按钮
- `.badge` 基本类
- `.badge-danger/info/warning`
- `.badge-pill` 胶囊徽章
  ```html
  <ul class="list-group">
    <li class="list-group-item">
      赞<a class="badge badge-success badge-pill">246</a>
    </li>
    <li class="list-group-item">
      踩<a class="badge badge-danger">256</a>
    </li>
    <li class="list-group-item">
      关注<a class="badge badge-warning">188</a>
    </li>
  </ul>
  ```
><h2 id='9'>9.导航:nav (nav-tabs,nav-pills)</h2> 
1. 水平导航 `.nav`  
    ```css
    ul.nav 弹性,x主轴
    ul.nav-justified 让内部li等宽显示
    ul.justify-content-* 支持弹性的响应式布局
    ul>li.nav-item
    ul>li>a.nav-link 块级,内边距,hover等样式
    ```
    ```html
    <ul class="nav nav-justified">
      <li class="nav-item"><a class="nav-link">秒杀</a></li>
      <li class="nav-item"><a class="nav-link">闪购</a></li>
      <li class="nav-item"><a class="nav-link">优惠券</a></li>
      <li class="nav-item"><a class="nav-link">plus会员</a></li>
    </ul>
    ```
2. 选项卡导航 nav-tabs
    ```css
    选项卡:
      ul.nav 弹性,x主轴
      ul.nav-tabs 让内部元素 hover出现边框
      ul>li.nav-item
      ul>li>a.nav-link 块级,内边距,hover等样式
      ul>li>a.active 显示
    内容区域:
      div.tab-content 内容
      div>div.tab-pane 让所有内容隐藏
      div>div.active 显示
    事件:
      1.激活事件的元素: a标签的 data-toggle="tab"
      2.事件影响的元素: a标签的href(#tab-pane的id), 如: href="#tab2"
    ```
    ```html
    <!--选项-->
    <ul class="nav nav-tabs">
      <li class="nav-item"><a data-toggle="tab" class="nav-link active" href="#tab1">四川菜</a></li>
      <li class="nav-item"><a data-toggle="tab" class="nav-link" href="#tab2">北京菜</a></li>
      <li class="nav-item"><a data-toggle="tab" class="nav-link" href="#tab3">云南菜</a></li>
      <li class="nav-item"><a data-toggle="tab" class="nav-link" href="#tab4">山东菜</a></li>
    </ul>
    <!--显示的内容-->
    <div class="tab-content">
      <div id="tab1" class="tab-pane active">钵钵鸡,麻辣香锅,麻辣火锅</div>
      <div id="tab2" class="tab-pane">烤鸭,豆汁,焦圈</div>
      <div id="tab3" class="tab-pane">汽锅鸡,竹筒饭</div>
      <div id="tab4" class="tab-pane">煎饼,大葱蘸酱,德州扒鸡</div>
    </div>
    ```
3. 胶囊导航 `nav-pills`
    ```css
    选项卡:
      ul.nav 弹性,x主轴
      ul.nav-pills 让内部元素 hover出现边框
      ul>li.nav-item
      ul>li>a.nav-link 块级,内边距,hover等样式
      ul>li>a.active 显示
    内容区域:
      div.tab-content div>div.tab-pane 让所有内容隐藏 div>div.active 显示
    事件:
      1.激活事件的元素: a标签的 data-toggle="pill"
      2.事件影响的元素: a标签的href(#id), 如: href="#tab2"
    ```
    ```html
    <!--选项-->
    <ul class="nav nav-pills">
      <li class="nav-item"><a class="nav-link" data-toggle="pill" href="#tab5">四川菜</a></li>
      <li class="nav-item"><a class="nav-link" data-toggle="pill" href="#tab6">北京菜</a></li>
      <li class="nav-item"><a class="nav-link" data-toggle="pill" href="#tab7">云南菜</a></li>
      <li class="nav-item"><a class="nav-link active" data-toggle="pill" href="#tab8">东北菜</a></li>
    </ul>
    <!--显示的内容-->
    <div class="tab-content">
      <div id="tab5" class="tab-pane">钵钵鸡,麻辣香锅,麻辣火锅</div>
      <div id="tab6" class="tab-pane">烤鸭,豆汁,焦圈</div>
      <div id="tab7" class="tab-pane">汽锅鸡,竹筒饭</div>
      <div id="tab8" class="tab-pane active">锅包肉,烧茄子,溜肉段</div>
    </div>
    ```
><h2 id='10'>10.导航栏:navbar</h2>
- `.navbar` 
  ```css
  div.navbar: 弹性,x轴主轴
  div.navbar-expand-*: 响应式的导航栏 *:xl/lg/md/sm, 作为后代选择器,让ul的主轴变为x轴
  div>ul.navbar-nav: 弹性,y轴主轴, 去点
  div>ul>li.nav-item:
  div>ul>li>a.nav-link:
  ```
  ```html
  <div class="navbar navbar-expand-lg">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="">导航栏1</a></li>
      <li class="nav-item"><a class="nav-link" href="">导航栏2</a></li>
      <li class="nav-item"><a class="nav-link" href="">导航栏3</a></li>
      <li class="nav-item"><a class="nav-link" href="">导航栏4</a></li>
    </ul>
  </div>
  ```
><h2 id='11'>11.折叠导航栏:navbar + collapse</h2> 
- 效果:  
(1)最前面的菜单项,永远显示  
(2)按钮: 大屏隐藏, 小屏显示  
(3)导航: 大屏(显示,横向), 小屏(隐藏,纵向,需要点击按钮显示)  
- 结构
  ```css
  父亲div:
    div.navbar
    div.navbar-dark 让div内部所有文本变为浅色
    div.bg-dark 配合navbar-dark 设置背景色
    div.navbar-expand-md :
      1.按钮在 md以上隐藏, sm显示
      2.ul在 md以上横向, sm纵向
  儿子:
    第一部分:
      div>a.navbar-brand 行内块,内边距
    第二部分:
      div>button.navbar-toggler 背景透明
      div>button>span.navbar-toggler-icon 三条线
    第三部分:
      div>div.collapse 隐藏 源码--display: none
      div>div.navbar-collapse 配合响应式,md以上显示,md一下隐藏
      div>div>ul.navbar-nav 导航栏
      div>div>ul>li.nav-item
      div>div>ul>li>a.nav-link
  事件:
    1.激活事件的元素: button data-toggle="collapse"
    2.事件影响的元素: data-target="#d1"
  ```
><h2 id='12'>12.焦点轮播图:carousel</h2> 
- 在一个父元素div中有三部分  
(1)图片部分  
(2)左右箭头  
(3)轮播指示器  
  ```html
  <div id="demo" class="carousel" data-ride="carousel">
    <!--1图片-->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="w-100" src="img/banner1.png" alt="">
      </div>
      <div class="carousel-item">
        <img class="w-100" src="img/banner2.png" alt="">
      </div>
      <div class="carousel-item">
        <img class="w-100" src="img/banner3.png" alt="">
      </div>
      <div class="carousel-item">
        <img class="w-100" src="img/banner4.png" alt="">
      </div>
    </div>
    <!--2左右箭头-->
    <a href="#demo" class="carousel-control-next" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
    <a href="#demo" class="carousel-control-prev" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <!--3轮播指示器-->
    <ul class="carousel-indicators">
      <li class="active" data-target="#demo" data-slide-to="0"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
      <li data-target="#demo" data-slide-to="3"></li>
    </ul>
  </div>
  ```
><h2 id='13'>13.模态框:modal</h2>
- 模态框 modal 是覆盖在父窗体上的一个子窗体
- 模态框可以在不离开父窗体的情况下与用户互动
- 组件结构:
  ```css
  div.modal
  div>div.modal-dialog
  div>div>div.modal-content
  div>div>div>div.modal-header/body/footer 
  ```
  ```html
  <button data-toggle="modal" data-target="#d5" 
    class="btn btn-info">打开模态框</button>
  <div id="d5" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4>请输入您的昵称</h4>
          <span data-dismiss="modal" class="close">&times;</span>
        </div>
        <div class="modal-body">
          <input type="text">
        </div>
        <div class="modal-footer">
          <button class="btn btn-success">提交</button>
          <button data-dismiss="modal" 
                  class="btn btn-danger">关闭</button>
        </div>
      </div>
    </div>
  </div>
  ```
><h2 id='14'>14.巨幕:jumbotron</h2> 
- 巨大的内边距
  ```html
  <div class="jumbotron">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam asperiores autem distinctio id illo illum, laboriosam libero pariatur porro quaerat repellat sint tempora vitae voluptas voluptate voluptatum? Architecto, quia.
  </div>
  ```
><h2 id='15'>15.面包屑导航:breadcrumb</h2> 
- `.breadcrumb`
  ```css
  组件结构:
    ul.breadcrumb
    li.breadcrumb-item
    li>a
  事件:
    1.激活事件的元素:
    2.事件影响的元素:
  ```
  ```html
  <ul class="breadcrumb">
    <li class="breadcrumb-item"><a href="">首页</a></li>
    <li class="breadcrumb-item"><a href="">学习用品</a></li>
    <li class="breadcrumb-item"><a href="">笔记本电脑</a></li>
    <li class="breadcrumb-item"><a href="">mac</a></li>
  </ul>
  ```
><h2 id='16'>16.进度条:progress</h2>
- `.progress`
  ```css
  组件结构:
    div.progress
    div>div.progress-bar bg-danger
    div>div.progress-bar-striped 条纹
    div>div.progress-bar-animated 条纹的动画
  事件:
    1.激活事件的元素:
    2.事件影响的元素:
  ``` 
  ```html
  <div class="progress">
    <div class="progress-bar w-50 progress-bar-striped progress-bar-animated"></div>
    <div class="progress-bar w-50 bg-danger"></div>
    <div class="progress-bar w-50 bg-info"></div>
  </div>
  ```
><h2 id='17'>17.分页:pagination</h2> 
- `.pagination`
  ```css
  组件结构:
    ul.pagination 弹性,x轴,去点
    ul>li.page-itme .active .disable 激活或禁用, 但是样式作用到了a标签上
    ul>li>a.page-link
  ```
  ```html
  <div class="bg-light p-2">
    <ul class="pagination mb-0 d-flex justify-content-end">
      <li class="page-item disabled">
        <a class="page-link bg-transparent rounded">上一页</a>
      </li>
      <li class="page-item active">
        <a class="page-link bg-transparent rounded">1</a>
      </li>
      <li class="page-item">
        <a class="page-link bg-transparent rounded">2</a>
      </li>
      <li class="page-item">
        <a class="page-link bg-transparent rounded">3</a>
      </li>
      <li class="page-item">
        <a class="page-link bg-transparent rounded">下一页</a>
      </li>
    </ul>
  </div>
  ```
