## 小程序路由
- [1. navigator组件](#1)
- [2. 路由API](#2)

><h3 id='1'>1. navigator组件</h3> 
```html
<navigator 
  url="当前小程序内的页面" 
  open-type="跳转方式"> 
</navigator>
```
```js
`open-type` 可选项包括:
1. `navigate` 对应 `wx.navigateTo`
2. `navigateBack` 对应 `wx.navigateBack` 
    属性`delta` 表示回退层数
3. `switchTab` 对应 `wx.switchTab`
4. `redirect` 对应 `wx.redirectTo` 。 
5. `reLaunch` 对应 `wx.reLaunch`
```

><h3 id='2'>2. 路由API</h3> 
```js
1. `wx.navigateTo`
  保留当前页面,跳转到应用内的某个页面。
  不能跳到 tabbar 页面。
  小程序中页面栈最多十层
2. `wx.navigateBack` 
  关闭当前页,返回上一级或多级页面
  可通过getCurrentPages获取当前页面栈
  wx.navigateTo({
    delta:'返回页面数'
  })
3. `wx.switchTab` 
  跳转tabBar页面,并关闭全部非tabBar页面
4. `wx.reLaunch` 
  重新启动应用,关闭全部页面,并打开某个页面
5. `wx.redirectTo`
  关闭当前页面,并跳转非tabBar页面

  //1.A页面跳转到 B页面并且传参的过程（正向传参）
  //A页面 
  wx.navigateTo({ 
    url: '/pages/b/b?id=1001&name=zs',
    events: function(){
      // 用于监听被打开页面发送到当前页面的数据
    },
    success: function(){
      // 接口调用成功的回调函数
    } ,
    fail: function(){
      // 接口调用失败的回调函数
    } ,
    complete: function(){
      // 失败成功都会执行
    }
  })
  //B页面 
  onLoad: function (options) { 
    console.log(options.id) 
    console.log(options.name) 
  },
  ----------------------------------
  //2.B页面返回 A页面时，回传参数给A页面
  //A页面 
  wx.navigateTo({ 
    url: '/pages/testing/b/b?id=1001&name=zs', 
    events: { 
      // 从B页面接受城市名 
      acceptCityNameFromB(data){ 
        console.log(data) 
      } 
    } 
  })
  //B 页面 
  // 获取A页面中的EventChannel对象 
  let eventChannel = this.getOpenerEventChannel(); 
  eventChannel.emit('acceptCityNameFromB', {city: '北京'}) 
  wx.navigateBack()
```
