/*
 * 观察者创建
  1.消息容器
  2.三个方法:{
    订阅消息方法
    取消订阅消息方法
    发送订阅消息方法
  }
*/

var Observer = (function () {
  var _message = {};

  return {
    // 注册信息接口
    // type: 消息类型
    // fn: 处理动作
    regist: function (type, fn) {
      // 如果此消息不存在则应该创建一个该消息的类型
      if (typeof _message[type] === 'undefined') {
        // 将动作推入到该消息对应的动作执行队列中
        _message[type] = [fn];
      
      }
      // 如果此消息存在
      else {
        // 将动作方法推入该消息对应的动作执行序列中
        _message[type].push(fn);
      }
    },
    // 发布信息接口
    // (观察者发布消息， 所有订阅者执行消息)
    fire: function (type, args) {
      // 如果没有被注册, 则返回
      if (!_message[type]) {
        return;
      }
      // 定义消息信息
      var events = {
        type: type,      //消息类型
        args: args || {} //消息携带数据
      },
      i = 0;
      len = _message[type].length;
      for ( ; i < len; i++) {
        // 依次执行注册的消息对应的动作序列
        _message[type][i].call(this, events);        
      }
    },
    // 移除信息接口
    remove: function (type, fn) {
      // 如果消息队列存在
      if(_message[type] instanceof Array){
        // 从最后一个消息队列遍历
        var i = _message[type].length - 1;
        for (; i >0; i--) {
          // 如果存在该动作则在消息动作序列中移除相应动作
          _message[type][i] === fn && _message[type].splice(i, 1);
          
        }
      }
    }
  }
})();

// // test
// // 订阅
// Observer.regist('test', function (e) {
//   console.log(e);
// })
// // 发布
// Observer.fire('test', {msg: '传递参数'})

var Student = function (name,result) {
  this.name = name;
  this.result = result;
}
Student.prototype.say = function () {
  console.log(this.result);
}

// 回答问题
Student.prototype.answer = function (question) {
  // 注册
  Observer.regist(question, this.say());
}

// 睡觉中不能回答问题, 所以移除
Student.prototype.sleep = function (question) {
  // 移除老师问题的监听
  Observer.remove(question, this.say);
}

var Teacher = function (name) { 
  this.name = name;
}
Teacher.prototype.ask = function (question) {
  console.log(`${this.name}问: ${question}`);
  // 发布的问题是
  Observer.fire(question)
}

var teacher = new Teacher('王老师');
teacher.ask('什么是设计模式');

var tom = new Student('tom', '回答问题: i dont know')
tom.say()
