## 小程序事件
- [1. 事件分类](#1)
- [2. 事件绑定](#2)
- [3. 事件对象](#3)
- [4. 事件参数的传递](#4)

><h3 id='1'>1. 事件分类</h3> 
```js
`冒泡事件列表`
  1. touchstart 开始触摸
  2. touchmove 触摸后移动
  3. touchend 结束触摸
  4. touchcancel 手指触摸动作被打断
  5. tap 点击 触摸后马上离开
  6. longtap 长按 （建议使用 longpress 替代）
  7. longpress 长按( 350ms 后离开)
`非冒泡事件`
  如: 
    form 的submit事件
    input 的input事件
    scroll-view 的scroll事件
```

><h3 id='2'>2. 事件绑定</h3>
```html
<component bind事件名="事件处理函数名称"></component>
<component bind:事件名="事件处理函数名称"></component> 
<component catch事件名="事件处理函数名称"></component>
* 事件处理函数名称
* catch 会自动阻止事件冒泡, bind与bind: 则不会
``` 

><h3 id='3'>3. 事件对象</h3>
当组件触发事件时，逻辑层绑定该事件的处理函数会`收到一个事件对象`
```js
// 1.BaseEvent 基础事件对象属性列表
  `type`: 事件类型
  `target`: 触发事件的组件的一些属性值集合
  `currentTarget`: 当前组件的一些属性值集合
// 2.CustomEvent 自定义事件对象属性列表（继承 BaseEvent）
  `detail`:额外的信息
// 3.TouchEvent 触摸事件对象属性列表（继承 BaseEvent）
  `touches`:触摸事件，当前停留在屏幕中的触摸点信息的数组
  `changedTouches`:触摸事件，当前变化的触摸点信息的数组
```
```js
// target与currentTarget属性: 
  `id`:当前组件的id
  `dataset`:当前组件上由data-开头的自定义属性组成的集合
    `data-element-type` 最终会呈现为 `elementType`
    `data-elementType` ，最终会呈现为 `elementtype`
如: 
  <view 
    data-alpha-beta="1" 
    data-alphaBeta="2" 
    bindtap="bindViewTap"
  > DataSet Test </view> 
  Page({
    bindViewTap:function(event){ 
      //会转为驼峰写法
      event.currentTarget.dataset.alphaBeta
      //大写会转为小写
      event.currentTarget.dataset.alphabeta
    }
  })   
```

><h3 id='4'>4. 事件参数的传递</h3>
无论组件绑定的是原生事件还是自定义事件，事件处理函数名称严禁出现小括号。
```js
1.对于原生事件,参数的传递语法如下
  (1)在组件中通过 data-* 实现自定义属性,保存参数
  (2)通过事件源对象获取 dataset 中的参数
2.自定义事件,事件参数的传递会封装在`detail`对象中
```
```html
如:
<!-- 1.原生事件 -->
<button 
    data-id="1" 
    bindtap="tapEvent">删除
  </button>
tapEvent(event){ 
  event.target.dataset.id 
}
<input bindinput="inputEvent"></input>
<!-- 2.自定义事件 -->
<input bindinput="inputEvent"></input> 
inputEvent(event){ 
  event.detail.value 
}
```
