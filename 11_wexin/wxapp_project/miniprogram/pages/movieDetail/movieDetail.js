// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {},
    isOpen: false,
    movieid: 1,
    comments: []
  },

  /** 点击箭头， 修改isOpen的状态 */
  tapArrow(){
    this.setData({
      isOpen: !this.data.isOpen
    })
  },

  /** 点击剧照列表中的一项时 高清大图浏览剧照列表 */
  tapThumb(event){
    let thumb = this.data.movie.thumb;
    let index = event.currentTarget.dataset.i;
    console.log(index)
    // thumb中的图片路径： https://xxxxx/xx.jpg@10w_10hxxx
    // 需要把thumb中的每一个图片路径的@后缀去掉，得到高清大图路径
    let urls = [];
    thumb.forEach((item, i)=>{
      let s = item.substr(0, item.search('@'))
      urls.push(s);
    })
    // 调用wx.previewImage方法实现大图预览
    wx.previewImage({
      urls: urls,
      current: urls[index]
    })
  },

  /** 加载当前电影的所有评论 */
  loadComments(){
    // 获取db对象
    let db = wx.cloud.database()
    // 通过collection查询所有movieid=?的所有数据
    db.collection('comment')
      .where({
        movieid: this.data.movieid
      })
      .skip(0)
      .limit(3)
      .get().then(res=>{
      console.log(res.data)
      this.setData({
        comments: res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    console.log(id);
    // 把当前电影的id 存入data中
    this.setData({
      movieid: id
    })
    // 发请求  获取当前电影详情
    wx.request({
      url: 'https://api.tedu.cn/detail.php',
      method: 'GET',
      data: {id: id},
      success: (result)=>{
        console.log(result.data)
        this.setData({
          movie: result.data
        })
      }
    });
    // 发请求访问云数据库，加载评论数据
    this.loadComments();

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