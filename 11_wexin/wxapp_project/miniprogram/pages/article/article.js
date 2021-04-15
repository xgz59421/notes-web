// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book:{},
    reviews:[]
  },

  formatNumber(value){
    if(value >= 1000 && value < 10000){
      return (value/1000).toFixed(1) + '千';
    } else if(value >= 10000 && value < 100000000){
      return (value / 10000).toFixed(1) + '万'
    } else {
      return (value / 100000000).toFixed(1) + '亿';
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    //console.log(id);
    //获取图书的相关信息
    wx.request({
      url:'https://api.zhuishushenqi.com/book/' + id,
      method:'GET',
      success:res=>{
        let data = res.data;
        console.log(data.wordCount);
        data.wordCount = this.formatNumber(data.wordCount);
        this.setData({
          book:data
        })
        console.log(res);
      }
    });
    //获取图书评论的相关信息
    wx.request({
      url:'https://api.zhuishushenqi.com/post/review/by-book',
      data:{
        book:id,
        sort:'updated',
        start:0,
        limit:20
      },
      method:'GET',
      success:res=>{
        this.setData({
          reviews:res.data.reviews
        })
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})