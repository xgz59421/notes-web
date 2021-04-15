// pages/citylist/citylist.js
const citymap = require('../../lib/map.js');
const QQMapWX = require('../../lib/qqmap-wx-jssdk.min.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    citymap : {},
    letters: ['A','B','C','D','E','F','G',
      'H','I','J','K','L','M','N','O','P',
      'Q','R','S','T','U','V','W','X','Y','Z'],
    selectedLetter: 'A',
    locationCity: '定位当前位置'
  },

  /** 点击当前地址 */
  tapLocCity(){
    let cityname = this.data.locationCity;
    if(cityname != "定位当前位置"){
      // 把cityname回传给A页面 （首页）
      let oec = this.getOpenerEventChannel();
      oec.emit('acceptCityFromB', cityname);
      wx.navigateBack();
    }else{ 
      // 当前还没有定位，点击后可以发送定位请求更新位置
      let qqmapsdk = new QQMapWX({
        key: "A4EBZ-CY2LX-44342-TAN2Y-TM377-7XFXH"
      });
      qqmapsdk.reverseGeocoder({
        success: (succ)=>{
          let city = succ.result.address_component.city;
          this.setData({
            locationCity: city
          })
          // 把城市名称存入globalData 全局存储
          getApp().globalData.currentCity = city;
        },
        fail: (err)=>{
          console.log(err)
          if(err.status == 1000){ // 用户没有给与权限
            wx.showModal({
              title: '提示',
              content: '请再设置页面赋予位置权限',
              success: (modalSucc)=>{
                if(modalSucc.confirm){
                  // 用户希望赋予权限
                  // 谈个窗，提示一下，请给与权限 在设置页面设置
                  wx.openSetting({
                    success: (result)=>{
                      console.log(result)
                      // 重新定位  
                      if(result.authSetting['scope.userLocation']){
                        // 用户重新赋予了定位
                        qqmapsdk.reverseGeocoder({
                          success: (succ)=>{
                            let city = succ.result.address_component.city;
                            this.setData({
                              locationCity: city
                            })
                            // 把城市名称存入globalData 全局存储
                            getApp().globalData.currentCity = city;
                          }
                        })
                      }
                    }
                  })
                }
              }
            })
          }
        }
      })
    }
  },

  /** 点击城市列表项 */
  tapCityItem(event){
    let cityname = event.currentTarget.dataset.cityname;
    console.log(cityname)
    // 把cityname回传给A页面 （首页）
    let oec = this.getOpenerEventChannel();
    oec.emit('acceptCityFromB', cityname);
    wx.navigateBack();
  },

  /** 点击右侧导航的字母后触发 */
  tapLetter(event){
    let letter = event.currentTarget.dataset.letter;
    console.log(letter)
    this.setData({
      selectedLetter: letter
    })
  },

  touchLetter(event){
    console.log(event)
    let clientY = event.touches[0].clientY
    // 每个字母高度20px
    let i = Math.floor(clientY / 20)
    // console.log(this.data.letters[i])
    this.setData({
      selectedLetter: this.data.letters[i]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载当前城市
    let currentCity = getApp().globalData.currentCity;
    if(currentCity){ // 以前存过 更新UI
      this.setData({
        locationCity: currentCity
      })
    }else{ // 用户没有赋予权限、 还没加载过来呢

    }

    // 把citymap存入data，在页面中才可以继续使用
    this.setData({
      citymap: citymap
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