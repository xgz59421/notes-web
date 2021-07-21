//index.js
const app = getApp()

Page({
  data: {
    epub:[]
  },

  onLoad: function() {
    let epub = this.data.epub;
    wx.request({
      url:'https://api.zhuishushenqi.com/ranking/gender',
      method:'GET',
      success:res=>{
        let data = res.data.epub;
        data.map((item,index)=>{
            let object = {};
            object.title = item.title;
            wx.request({
              url:'https://api.zhuishushenqi.com/ranking/' + item._id,
              method:'GET',
              success:res=>{
                object.books = res.data.ranking.books;
                epub.push(object);
                this.setData({
                  epub:epub
                })
              }
            })
        });
        console.log(epub);
      }
    });
    
  }
  
})
