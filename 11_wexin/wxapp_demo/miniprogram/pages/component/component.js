Page({
  data: {

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