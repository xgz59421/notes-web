Page({
  data: {
    list:[1,2,3]
  },
  tap2PageB(){
    wx.navigateTo({
      url: '/pages/navigator/pageB?user="tom"',
      events:{
        pageBDataBack:function (e) {
          console.log(e);
        }
      }
    })
  },
  onLoad: function (options) {
    console.log('navigator onLoad...');
  },
  onReady: function () {
    console.log('navigator onReady...');
  },
  onShow: function () {
    console.log('navigator onShow...', this.data.list);
  },
  onHide: function () {
    console.log('navigator onHide...');
  },
  onUnload: function () {
    console.log('navigator onUnload...');
  },
})