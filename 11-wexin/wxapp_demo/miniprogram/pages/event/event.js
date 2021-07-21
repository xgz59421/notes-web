
Page({
  data: {
    products : [
      {name: '小米', price:1999, id:1},
      {name: 'oppo', price:2999, id:2},
      {name: 'Huawei', price:3999, id:3}
    ]
  },
  del(event){
    console.log(event.target.dataset)
    let id = event.target.dataset.id;
    console.log('删除...'+id);
    for (let i=0; i<this.data.products.length; i++){
      if(id == this.data.products[i].id){
        this.data.products.splice(i, 1);
        this.setData({
          products: this.data.products
        })
      }
    }
  },
  handle_tap: function () {
    console.log("handle_tap");
  },
  handle_longpress: function () {
    console.log("handle_longpress");
  },
  tap_outer: function () {
    console.log("父元素 tap_outer");
  },
  tap_inner: function () {
    console.log("子元素 tap_inner");
  },
  catch_outer: function () {
    console.log("父元素 catch_outer");
  },
  catch_inner: function () {
    console.log("子元素 catch_inner");
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {

  },
})