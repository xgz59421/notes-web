const db = wx.cloud.database();
const collection = db.collection('myphoto')
Page({
  data: {
    images: [],
    cloudImages: []
  },
  onLoad(){},
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
        success: (res) => {
          console.log(res);
          db.collection("myphoto")
          .add({
            data:{
              fileID: res.fileID
            }
          })
          .then(res=>{
            console.log(res);
          })
          .catch();
        }
      });
    }
    this.setData({
      images: []
    });
  },

  // 获取数据库列表
  getImages(){
    collection.get()
    .then(result=>{
      console.log(result.data);
      this.setData({cloudImages:result.data})
    })
    .catch((err)=>{console.log(err);});
  },
  // 删除数据库列表
  removeImages(){
    // var imgs = this.data.cloudImages;
    // console.log(imgs);
    // imgs.forEach(element => {
    //   collection
    //   .where({
    //     fileID:db.command.exists(true)
    //   })
    //   .remove()
    //   .then(res=>{
    //     console.log(res);
    //   })
    //   .catch(res=>{
    //     console.log(res);
    //   });

    // });

  },
  preview(e){
    console.log(e.target.dataset.item);
    wx.previewImage({
      urls: [e.target.dataset.item.fileID],
    })
  },
  delete(e){
    console.log(e.target.dataset.item);
    collection
    .where({
      _id:e.target.dataset.item._id
    })
    .remove()
    .then(res=>{
      this.getImages()
    })
    .catch()
  },
})