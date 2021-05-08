var name = 'zce'

function foo () {
  name = 'zce666'  // 这里的Name 是属于全局的
  function baz () {
    var age = 38
    console.log(age)
    console.log(name) // 作用域内没有, 在作用域链向上查找
  }
  baz()
}

foo()
var name = 'zce'

function foo () {
  var name = 'zce666' 
  function baz () {
    var age = 38
    console.log(age)
    console.log(name)
  }
  baz()
}

foo()