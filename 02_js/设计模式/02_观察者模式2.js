Array.prototype.myEach = function (cb) {
  for (let index = 0; index < this.length; index++) {
      const element = this[index];
      if(cb(element, index) === false) {
          break
      }
      
  }
};

// ['a','b','c'].myEach(console.log) // a b c
var Event = function () {
  var clientList = {} // 订阅者数组

  this.listen = function (key, cb) { // 订阅方法
      clientList[key] = clientList[key] || []
      clientList[key].push(cb)
  }

  this.remove = function (key, cb) { // 取消订阅
      var fns = clientList[key]
      if(!cb) {
          clientList[key] = []
      }else if(fns && fns.length) {
          clientList[key] = fns.filter(fn => fn !== cb)
      }
  }

  this.trigger = function () { // 通知订阅者
      var key = Array.prototype.shift.call(arguments)
      var args = arguments
      var fns = clientList[key]
      var _this = this

      if(fns && fns.length) {
          fns.myEach(function(fn) {
              fn.apply(_this, args)
          })
      }
  }
}

var event1 = new Event()

event1.listen('phone', function getPhone() {
  Array.prototype.unshift.call(arguments, '有个挨千刀的半夜打电话来了他是：')
  console.log.apply(this, arguments)
})

event1.trigger('phone', '大狗子') // 有个挨千刀的半夜打电话来了他是：大狗子
event1.trigger('phone', '二狗子') // 有个挨千刀的半夜打电话来了他是：二狗子