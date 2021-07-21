// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  navigate(e){
    var path = e.target.dataset.path;
    console.log(path);
    var url = '/pages/' + path + '/' + path
    wx.navigateTo({
      url: url
    })
  },

  handleGetInfo: function (event) {
    console.log("handleGetInfo", event);
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})