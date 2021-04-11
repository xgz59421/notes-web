## 小程序
- [1. 小程序项目的文件结构](#1)
- [2. app.json](#2)
- [3. wxss](#3)
- [4. 数据绑定](#4)
- [5. 条件渲染](#5)
- [6. 列表渲染](#6)

><h3 id='1'>1. 小程序项目的文件结构</h3> 
1. `page.json` 文件 配置文件 可覆盖全局配置
2. `page.wxml` 文件 模板文件（类似于 HTML ， 但是此处不能使用任何 HTML 标签）
3. `page.wxss` 文件 样式文件
4. `page.js` 文件 脚本文件
```js
  1.每个页面必须具备`page.js和page.wxml`
  2.`app.js, app.wxss, app.json`必须在根目录下
    `app.js` 定义小程序的入口脚本文件
    `app.wxss` 定义全局样式
    `app.json` 全局配置文件
  // `project.config.json` 开发工具配置
```

><h3 id='2'>2. app.json</h3> 
```json
pages:[    
  "pages/index/index",
  "pages/test/test",],
entryPagePath: "pages/index/index", //初始页面
window: {
  "enablePullDownRefresh": true,
  "backgroundTextStyle":"dark",
  "backgroundColor": "#0f0",
  "navigationBarBackgroundColor": "#f00",
  "navigationBarTitleText": "学子影院",
},
tabBar: {
  // 最少2个选项卡, 最多5个
  // iconPath，selectedIconPath 不能使用网络路径。
  "list":[      
    {
      "text": "首页",
      "pagePath": "pages/index/index",
      "iconPath": "/images/index_disable.png",
      "selectedIconPath": "/images/index_enable.png"
    },{}],
  "color": "#333",
  "selectedColor": "#f00",
  "backgroundColor": "#fff",
  "borderStyle": "black"
}


```

><h3 id='3'>3. wxss</h3> 
```js
1. `rpx` 响应式像素
  规定：所有设备的屏幕宽度为 750rpx 。
  1rpx 将会转换成不同的 px 值。
2. 样式导入
  @import "common.css"
```

><h3 id='4'>4. 数据绑定</h3> 
```js
wxml 中的动态数据（动态文本，动态属性，动态样式等）来源于对应 js 文件中的 `data` 。
  Page({ 
    data: { username : "张三" } 
  })

1. 如果在 js 中需要访问 data 数据：
  `this.data.属性名`
2. 如果在 js 中需要设置 data 数据：
  `this.setData({ num : 12 })`

```
```html
1. 内容绑定
  <text>{{username}}</text>
2. 属性绑定
  <image 
    src="/images/{{num}}.jpg"  
    bindtap="tapImage">
  </image>
3. 样式绑定
  data: { className: 'd', c: 'red', bw: 5 }
  <text class="{{className}}"></text> 
  <text style="color:{{c}}; border:{{bw}}px solid black;"></text>
```

><h3 id='5'>5. 条件渲染</h3> 
```html
data: { isLogin: true }
<!-- 如果已经登录：isLogin=true, 则输出欢迎信息 --> 
<text wx:if="{{isLogin}}">欢迎：张三</text>
```

><h3 id='6'>6. 列表渲染</h3> 
```js
data: { 
  articles : [ 
  {pic: '1.jpg', content: '文章内容'}, 
  {pic: '2.jpg', content: '文章内容'}, 
  {pic: '3.jpg', content: '文章内容'} 
]}
```
```html
<!-- item 和 index 是默认的 -->
<view class="item" 
      wx:for="{{articles}}" 
      wx:key="index"> 
  {{index}} 
  <text>{{item.content}}</text>
  <image src="{{item.pic}}"></image> 
</view>
```
```html
<!-- 自定义变量名 -->
<view class="item" 
      wx:for="{{articles}}" 
      wx:for-item="product" //每对象的变量名
      wx:for-index="i" //对应的下标变量名 
      wx:key="i"> 
  {{i}} 
  <text>{{product.content}}</text> 
  <image src="{{product.pic}}"></image> 
</view>
```
