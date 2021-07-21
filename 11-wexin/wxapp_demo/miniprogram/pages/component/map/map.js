Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 地图控件图片
    controls: [{
      id: 0, //控件id数值
      iconPath: "../../images/location.png",
      position: {
        left: 60,
        top: 225,
        width: 21,
        height: 21
      }
    }],
    // 折线
    polyline: [{
      points: [{
        longitude: 123.346882,
        latitude: 41.767312
      },{
        longitude: 123.337854,
        latitude: 41.760722
      }],
      color:"#FF0000DD",
      width: 2,
      // dottedLine: true
    }],
  },

})