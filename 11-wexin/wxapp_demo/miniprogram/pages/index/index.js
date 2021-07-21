const app = getApp()
const util = require('../../utils/util.js')
Page({
  onLoad: function() {
    // console.log(app.globalData);
    // console.log(app.globalData2);
    console.log(util.formatTime(new Date()));
  },
  btnPress: function (e) {
    var _package = e.target.dataset.package;
    var _path = e.target.dataset.path;
    var url = '/pages/'
    if (_package){
      url += _package + '/' + _path + '/' + _path;
    }else{
      url += _path + '/' + _path;
    }
    console.log(url);
    wx.navigateTo({
      url
    })
  }
})
