// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateValues:['male','female','press','picture'],
    cateLists: [
      {
        title:'男生',
        label:'male',
        subcates:[]
      },
      {
        title:'女生',
        label:'female',
        subcates:[]
      },
      {
        title:'出版社',
        label:'press',
        subcates:[]
      },
      {
        title:'标签',
        label:'picture',
        subcates:[]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      wx.request({
        url: 'https://api.zhuishushenqi.com/cats/lv2/statistics',
        method:'GET',
        success:res=>{
          let data = res.data;
          let cateValues = this.data.cateValues;
          let cateLists = this.data.cateLists;
          for(let key in data){
            if(cateValues.includes(key)){
              let index = cateValues.indexOf(key);
              cateLists[index]['subcates'] = data[key];
            }
          }
          this.setData({
            cateLists:cateLists
          })
          console.log(cateLists);
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