Page({
  data: {
    user:''
  },
  back(){
    var ec = this.getOpenerEventChannel();
    ec.emit('pageBDataBack',{a:1});
    wx.navigateBack({
      delta: 1
    })
  },
  onLoad: function (options) {
    console.log('pageB onLoad...', options.user);
    this.setData({
      user:options.user
    })
    var pages = getCurrentPages();
    console.log(pages);
    var page = pages[1];
    console.log(page);
    console.log('修改上级页面的list:');
    console.log(page.data.list);
    page.setData({
      list:[1,2,1]
    })
  },
  onReady: function () {
    console.log('pageB onReady...');
  },
  onShow: function () {
    console.log('pageB onShow...');
  },
  onHide: function () {
    console.log('pageB onHide...');
  },
  onUnload: function () {
    console.log('pageB onUnload...');
  },
})