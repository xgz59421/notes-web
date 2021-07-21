Page({
  data: {
    femalelist:[]
  },
  onLoad: function (options) {
    wx.request({
      url: 'https://api.zhuishushenqi.com/ranking/gender',
      success: (res)=> {
        console.log(res.data);
        this.setData({
          femalelist:res.data.female
        })
      }
    })
  },
})