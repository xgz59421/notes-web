## 小程序生命周期
- [1. 小程序应用的生命周期](#1)
- [2. 小程序页面的生命周期](#2)

><h3 id='1'>1. 小程序应用的生命周期</h3> 
```js
// App() 将会在小程序启动时执行，只调用一次，每个小程序拥有独立的App()。 
// 在当前小程序的页面中，可以使用getApp() 获取当前App()对象，从而 
// 访问App对象中的globalData数据。 
App({
  `onLaunch`(){ 
  // 小程序初始化启动时调用，全局只调用一次。 
  },
  `onShow`(){ 
  // 小程序显示或从后台切换到前台时执行，可能执行多次。 
  },
  `onHide`(){ 
    // 小程序从前台切换到后台时执行，可能执行多次。 
  },
  globalData: { 
    // 在此处可以声明每一个页面需要共享的数据。 
    // 当在页面中需要获取以下数据时： 
    // getApp().globalData.cityName 即可以访问到城市名称 cityName: '北京' 
  } 
})
```

><h3 id='2'>2. 小程序页面的生命周期</h3> 
```js
Page({
  `onLoad`(options){ 
    // 当页面加载时被触发，只执行1次。
  },
  `onShow`(){ 
    // 页面显示时、从后台切换到前台时被触发, 可能执行多次 
  },
  `onReady`(){ 
    // 当页面初次渲染完成后被触发，只执行1次。 
  },
  `onHide`(){ 
    // 页面从前台切换到后台时被触发，可能执行多次
    // 如wx.navigateTo或tab切换到其他页面, 或切入后台 
  },
  `onUnload`(){ 
    // 页面销毁时触发，一般在此销毁页面持续使用的资源，
    // 如销毁定时器等。 
  } 
})
```
```js
`小程序启动->pageA`
  app     onlanch()
  app     onshow()
  pageA   onload()
  pageA   onshow()
  pageA   onready()
`navigateTo pageB`
  pageA   onhide()
  pageB   onload()
  pageB   onshow()
  pageB   onready()
`navigateBack pageB`
  pageB   onunload()
  pageA   onshow()
`切后台`
  pageA   onhide()
  app     onhide()
`切回来`
  app     onshow()
  pageA   onshow()
```
<img src='./img/03_page_lifecycle.png'/>

