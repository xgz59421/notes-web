// index.js
// 获取应用实例
const app = getApp()
var QQMapWX = require('../../lib/qqmap-wx-jssdk.min.js');
var qqmapsdk;

Page({

  data: {
    movies : [],
    navactive: 1,  // 保存当前类别id
    offset: 0,      // 默认第一页
    cityname: '请选择'
  },

  /** 跳转到citylist，选择城市 */
  chooseCity(){
    wx.navigateTo({
      url: '/pages/citylist/citylist',
      events: {
        acceptCityFromB:(data)=>{
          this.setData({
            cityname: data
          })
        }
      }
    })
  },

  /** callback是一个函数
   *  函数即封装了一些代码段，记录了获取数据后要做的事情
   */
  loadDataCB(cid, offset, callback){
    wx.request({
      url: 'https://api.tedu.cn/index.php',
      method: 'GET',
      data: {
        cid: cid,
        offset: offset
      },
      success: (result)=>{
        console.log(result)
        // 把获取到的数据追加到当前列表中
        callback(result.data)
      }
    })

  },


  /** 加载电影列表数据 */
  loadData(cid, offset){
    // 弹出等待窗口
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: 'https://api.tedu.cn/index.php',
      method: 'GET',
      data: {
        cid: cid,
        offset: offset
      },
      success: (result)=>{
        console.log(this.data.movies)
        // 把获取到的数据追加到当前列表中
        let movies = [...this.data.movies, ...result.data]
        this.setData({
          movies: movies
        })
        // 销毁等待窗口
        wx.hideLoading()
      }
    })
  },

  /** 修改顶部导航选项时触发 */
  changeNav(event){
    let id = event.target.dataset.id;
    // 去缓存中寻找 是否已经存过数据
    let data = wx.getStorageSync(id+"");
    if(data){ //如果缓存中有这些数据
      this.setData({
        navactive: id,
        offset: 0,
        movies: data
      });
      return;
    }
    // 如果缓存中没数据 再重新加载
    this.setData({
      navactive: id,
      offset: 0,
      movies: []
    });
    // 通过当前选中项的id，发送请求获取该类别下的数据
    // cid: id      offset: 0
    this.loadDataCB(id, 0, (rmovies)=>{
      this.setData({
        movies : rmovies
      })
      // 把movies存入storage
      wx.setStorage({
        data: this.data.movies,
        key: id+""
      })
    })
  },

  /** 页面加载时执行的生命周期方法 */
  onLoad() {

    // 加载当前地址字符串描述信息
    qqmapsdk = new QQMapWX({
      key: "A4EBZ-CY2LX-44342-TAN2Y-TM377-7XFXH"
    });
    qqmapsdk.reverseGeocoder({
      success: (succ)=>{
        let city = succ.result.address_component.city;
        this.setData({
          cityname: city
        })
        // 把城市名称存入globalData 全局存储
        app.globalData.currentCity = city;
      }
    })

    // 获取当前位置
    // wx.getLocation({
    //   altitude: true,
    //   type: "gcj02",
    //   success: res=>{
        
    //   }
    // })


    // 发送https请求，访问热映类别下的第一页数据
    // cid:1   offset:0
    // this.loadData(1, 0)

    // rmovies是返回的响应数据  电影列表
    this.loadDataCB(1, 0, (rmovies)=>{
      this.setData({
        movies: rmovies
      })
      // 把movies存入storage缓存
      wx.setStorage({
        key: 1+"",
        data: rmovies
      })
    })
  },

  /** 用于监听触底事件 */
  onReachBottom(){
    // 加载下一页数据
    let cid = this.data.navactive;
    let offset = this.data.offset + 20;
    // 把offset更新到data中
    this.setData({ 
      offset: offset
    });
    // 发送http请求，获取响应列表，追加到当前列表末尾
    this.loadData(cid, offset);
    // this.loadDataCB(cid, offset, (rmovies)=>{
    //   let movies = this.data.movies.concat(rmovies)
    //   this.setData({
    //     movies : movies
    //   })
    // })
  },

  /** 当下拉刷新时执行 */
  onPullDownRefresh(){
    console.log('pulldownrefresh...')
    // 加载当前类别下的电影列表 首页  更新缓存
    let cid = this.data.navactive;
    let offset = 0;
    this.loadDataCB(cid, offset, (rmovies)=>{
      // 更新列表数据
      this.setData({
        offset : 0,
        movies : rmovies
      })
      // 更新缓存
      wx.setStorage({
        data: rmovies,
        key: cid+'' 
      })
      wx.stopPullDownRefresh();
    })
  }

})




