
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: 0,
    b: 0,
    sum: 0
  },
  sum(){
    wx.cloud.callFunction({
      name: 'sum',
      data:{
        i: parseFloat(this.data.a),
        j: parseFloat(this.data.b)
      }
    }).then(res=>{
      console.log(res);
      this.setData({
        sum: res.result.sum
      });
    }).catch(res=>{
      console.log(res);
    });
  },
  onInput(event){
    var value = event.detail.value
    var id = event.target.id;
    if (id=='a') {
      this.setData({a:value})
    } else {
      this.setData({b:value})
    }
  }
})