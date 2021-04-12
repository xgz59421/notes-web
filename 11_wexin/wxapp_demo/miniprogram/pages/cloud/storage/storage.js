
Page({
  data: {
    images: []
  },
  // 选取图片
  chooseImage(){
    wx.chooseImage({
      count: 9,
      sourceType: ["album","camera"],
      success: (res)=>{
        console.log(res);
        this.setData({
          images: res.tempFilePaths 
        })
      }
    })
  },
  // 预览图片
  previewImage(event){
    var current_item = event.target.dataset.current;
    wx.previewImage({
      urls: this.data.images,
      current: current_item,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  // 上传图片
  uploadFile(){
    var images = this.data.images
    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      // 获取图片扩展名
      // var extension = /\.\w+$/.exec(img)[0];
      // var extension = item.slice(img.lastIndexOf('.'))
      let extension = /\.\w+$/.exec(img)[0];
      let mainname = '' + Date.now() + Math.ceil(Math.random()*9999);
      let filename = mainname + extension;
      console.log(filename);
      wx.cloud.uploadFile({
        filePath: img,
        cloudPath: 'web2021/' + filename,
        success: (res) => {console.log(res);},
        fail: (res) => {console.log(res);},
        complete: (res) => {console.log(res);},
      });
    }
    this.setData({
      images: []
    });

  }
})