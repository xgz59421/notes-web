// 单例模式
// 定义：保证一个类只有一个实例，并提供一个访问他的全局访问点
var lazySingle = (function () {
  // 单例的实例引用
  var _instance = null;
  var number = 0;
  function Single() {
    return {
      print: function () {
        console.log('number:', number);
      },
      add: function () {
        number++;
      }
    }
  }

  return function () {
    // 如果为null 创建单例
    if (_instance == null) {
      _instance = new Single();
    }
    // 返回单例
    return _instance;
  }
})();

lazySingle().add()
lazySingle().add()
lazySingle().print();
// 无论是直接引用还是新创建的对象， 都是同一个对象
var s = new lazySingle();
s.add();
s.print();
// 还可以取别名
var $ = lazySingle();
$.add()
$.print();