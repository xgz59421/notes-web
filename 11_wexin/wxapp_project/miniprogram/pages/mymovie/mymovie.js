// pages/mymovie/mymovie.js
var db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie_name: "",
    content: "",
    img_list: [], //选择要上传的图片集合
    fileIds: [],  //上传图片的fileid
  },
  upload_img: function () {
    wx.showLoading({
      title: 'xxx',
    })
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res)=> {
        // tempFilePath可以作为img标签的src属性显示图片
        this.setData({
          img_list: res.tempFilePaths
        })
        console.log(this.data.img_list);
        wx.hideLoading();
      },
      fail: (res)=>{
        console.log(res);
        wx.hideLoading();
      }
    })
  },
  submit: function () {
    if(this.data.img_list.length == 0){
      wx.showToast({
        title: '请上传图片!',
        icon: "none"
      });
      return;
    }
    wx.showLoading({
      title: '数据提交中...',
    });
    var rows = [];
    for (let i = 0; i < this.data.img_list.length; i++) {
      var promise = new Promise((resolve, reject)=>{
        var item = this.data.img_list[i];
        var suffix = /\.\w+$/.exec(item)[0];
        var newFile = new Date().getTime() + Math.floor(Math.random() * 9999) +suffix;
        console.log(newFile);
        
        wx.cloud.uploadFile({
          cloudPath: newFile,
          filePath: item,
          success: (res)=> {
            console.log(res);
            this.data.fileIds.push(res.fileID);
            resolve();
          },
          fail: (err)=> {
            console.log(err);
            reject();
          },
        });
      });
      rows.push(promise);
    }
    Promise.all(rows).then(res=>{
      console.log("数据上传完毕");
      db.collection("mymovie")
      .add({
        data:{
          msg: this.data.content,
          name: this.data.movie_name,
          fileids: this.data.fileIds
        }
      })
      .then(res=>{
        this.setData({
          img_list:[]
        });
        wx.hideLoading();
        wx.showToast({
          title: '提交成功',
        });
      })
      .catch(err=>console.log(err));

    }).catch(err=>console.log(err));
  },
  showDetail: function () {
    wx.navigateTo({
      url: '/pages/movielist/movielist',
    })
  },
  onChangeMovieName: function (event) {
    // console.log(event);
    this.setData({
      movie_name: event.detail
    });
    // console.log(this.data.movie_name);
  },
  onChangeContent: function (event) {
    this.setData({
      content: event.detail
    });
    // console.log(this.data.content);
  },
  // 生命周期函数--监听页面加载
  onLoad: function (options) {

  },

})