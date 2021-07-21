Page({
  data: {
    msg:"php是世界上最好的语言",
    price: 99.98,
    num1: null,
  },
  onLoad: function (options) {
    console.log('price: ',this.data.price);
    this.setData({
      price:97
    })
    console.log('price: ',this.data.price);
  },
})