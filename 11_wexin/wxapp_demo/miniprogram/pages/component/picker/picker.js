// pages/testing/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiData:[
      ['中关村一小','人大附小','庞各庄小学'],
      ['一年级','二年级','三年级'],
      ['一班','二班','三班']
    ],
    countryList : ['中国','巴基斯坦','俄罗斯','朝鲜'],
    countryObjList : [
      {
        name: '中国', 
        fullname: '中华人民共和国'
      },
      {
        name: '韩国', 
        fullname: '大韩民国'
      },
      {
        name: '俄罗斯', 
        fullname: '俄罗斯帝国'
      }
    ],
    selectedIndex : 2,
    selectedIndex2 : 0,
    selectedIndex3 : [0, 0, 0]
  },
  /** 修改多列选择器的选中项后触发 */
  changeData(event){
    console.log(event.detail.value)
    this.setData({
      selectedIndex3 : event.detail.value
    })
  },

  changeCountry2(event){
    this.setData({
      selectedIndex2 : event.detail.value
    })
  },

  /** 当修改picker选中项后触发 */
  changeCountry(event) {
    console.log(event.detail.value)
    this.setData({
      selectedIndex: event.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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