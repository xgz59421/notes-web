Page({

  data: {
    //存储用户输入的待办事项
    todoItem:'',
    //存储待办事项列表
    todoList:[]
    // todoList:['上课','开会','总监咨询日']
  },

  input(event){
    this.setData({
      todoItem:event.detail.value
    })
  },

  add(){
    if(this.data.todoItem == ''){
      //短消息提示框
      wx.showToast({
        title:'事项禁止为空',
        image:"/images/error.png",
        duration:3000,
        mask:true
      })
    } else {
      // 获取原来的待办事项列表
      let data = this.data.todoList;
      // 将新的待办事项添加到数组的未尾
      data.push(this.data.todoItem);
      // 用data重新为todoList进行赋值
      this.setData({
        todoList:data,
        todoItem:''
      })
    }
  },

  remove(event){
    //获取被删除的事项索引值
    let id = event.target.dataset.id;
    //显示模态对话框
    wx.showModal({
        title:'确认删除',
        content:'您确认要删除吗?',
        confirmText:'确认',
        showCancel:true,
        cancelText:'取消',
        success:res=>{
          //单击确认按钮
          if(res.confirm){
            // 获取原来的待办事项列表
            let data = this.data.todoList;
            // 在data中进行数组成员的删除
            data.splice(id,1);
            // 用data重新为todoList进行赋值
            this.setData({
              todoList:data
            })
          }
        }
    })
  }





})