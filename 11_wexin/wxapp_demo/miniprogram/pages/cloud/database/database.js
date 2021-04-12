var db = wx.cloud.database();
// var db = wx.cloud.database({
//   // 环境ID
//   env:"web2020-zh-f1ipd"
// });
Page({
  data: {
    list:[]
  },
  add: function () {
    db
    .collection("web2020")
    .add({
      data:{
        name: "东哥",
        age: 28,
        sex : "男"
      }
    })
    .then(res=>{
      // 成功回调
      console.log(res);
      this.search();
    })
    .catch(res=>{
       // 失败回调
      console.log(res);
    });
  },
  update: function () {
    db
    .collection("web2020")
    .doc("2265ce915f019aee0003606c18f8cc29")
    .update({
      data:{
        salary:66
      }
    })
    .then(res=>{
      console.log(res);
    })
    .catch(res=>{
      console.log(res);
    });
  },
  delete: function (event) {
    console.log("delete");
    var _id = event.target.dataset.id;
    console.log(_id);
    db
    .collection("web2020")
    .doc(_id)
    .remove()
    .then(res=>{
      console.log(res);
      this.search();
    })
    .catch(res=>{
      console.log(res);
    });
  },
  search: function () {
    db
    .collection("web2020")
    .get()
    .then(res=>{
      console.log(res);
      this.setData({
        list:res.data
      });
      // console.log(this.data.list);
    })
    .catch(res=>{
      console.log(res);
    });
  },
  search_one: function () {
    db
    .collection("web2020")
    .where({
      // age: 26
      // age: db.command.eq(26)     //年龄==26
      // age: db.command.neq(26)   //年龄!=26
      // age: db.command.lte(50)   //年龄 <=50
      age: db.command.gt(25)   //年龄 >25
      // age: db.command.in([24,25,26])  //年龄在 in中
    })
    .get()
    .then(res=>{
      console.log(res);
      this.setData({
        list:res.data
      });
    })
    .catch(res=>{
      console.log(res);
    });
  },
  deleteForAge: function () {
    // 小程序只能逐一删除
    // 利用云函数进行批量删除
    wx.cloud
    .callFunction({
      name:"betchDelete"
    })
    .then(res=>{
      console.log(res)
      this.search();
    })
    .catch(res=>console.log(res));
  }
})