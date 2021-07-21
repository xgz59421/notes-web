## 性能优化
- [1. 避免使用全局变量](#1)
- [2. 缓存全局变量](#2)
- [3. 通过原型新增方法](#3)
- [4. 避开闭包陷阱](#4)
- [5. 避免属性访问方法使用](#5)
- [6. for循环优化](#6)
- [7. 采用最优的循环方式](#7)
- [8. 节点添加优化](#8)
- [9. 克隆优化节点操作](#9)
- [10. 字面量与构造式new](#10)
- [11. 减少判断层级](#11)
- [12. 减少作用域链查找层级](#12)
- [13. 减少数据读取次数](#13)
- [14. 采用事件委托](#14)
--------
><h2 id='1'>1. 避免使用全局变量</h2>
```js
  1. 全局变量是挂载在window上, 是作用域链的顶端
  2. 全局变量一直存在, 引用计数>0, 直到程序退出
  3. 若局部出现同名变量, 会遮蔽或污染全局变量
  var i, str = ''
  for (i = 0; i < 1000; i++) {
    str += i
  }
  // 下面的效率会更高一些
  for (let i = 0; i < 1000; i++) {
    let str = ''
    str += i
  }
```

><h2 id='2'>2. 缓存全局变量</h2>
```js
  function getBtn() {
    let oBtn1 = document.getElementById('btn1')
    let oBtn3 = document.getElementById('btn3')
    ...
  }

  // 下面的效率会更高一些
  function getBtn2() {
    let obj = document
    let oBtn1 = obj.getElementById('btn1')
    ...
  }
```

><h2 id='3'>3. 通过原型新增方法</h2>
```js
  var fn1 = function() {
    this.foo = function() {
      console.log(11111)
    }
  }
  // 下面的效率会更高一些
  fn1.prototype.foo = function() {
    console.log(222)
  }
```

><h2 id='4'>4. 避开闭包陷阱</h2>
```js
  <script>
    // 此处el产生一个闭包
    function foo() {
      // document.getElementById('btn') 本身是存在DOM节点上的
      // el 会增加引用计数
      var el = document.getElementById('btn')
      el.onclick = function () {
        console.log(el.id);
      }
      // 解决内存泄漏
      el = null; 
    }
    foo();
  </script>
```

><h2 id='5'>5. 避免属性访问方法使用</h2>
```js
  function Person() {
    this.name = 'icoder'
    this.age = 18
    this.getAge = function() {
      return this.age
    }
  }
  const p1 = new Person()
  const a = p1.getAge()  // 18
  // 下面的效率会更高一些 
  const b = p1.age  // 18
```

><h2 id='6'>6. for循环优化</h2>
```js
  var arr = [1,2,3,4,5,6,7]
  // 
  for (var i = 0; i < arr.length; i++) {
    console.log(i);      
  }
  // 其次
  for (var i = 0, len = arr.length; i < len; i++) {
    console.log(i);      
  }
  // 下面的效率会更高一些 
  var len = arr.length
  while(len--) {
    console.log(arr[len])
  }
```
><h2 id='7'>7. 采用最优的循环方式</h2>
```js
  var arrList = new Array(1, 2, 3, 4, 5)
  // forEach 性能是最好的
  arrList.forEach(function(item) {
    console.log(item)
  })
  // for 其次
  for (var i = arrList.length; i; i--) {
    console.log(arrList[i])
  }

  for (var i in arrList) {
    console.log(arrList[i])
  }
```

><h2 id='8'>8. 节点添加优化</h2>
```js
  节点添加操作必然会有`回流`和`重绘`
  for (var i = 0; i < 10; i++) {
    var oP = document.createElement('p')
    oP.innerHTML = i 
    document.body.appendChild(oP)
  }
  // 下面的效率会更高一些 
  const fragEle = document.createDocumentFragment()
  for (var i = 0; i < 10; i++) {
    var oP = document.createElement('p')
    oP.innerHTML = i 
    fragEle.appendChild(oP)
  }
  document.body.appendChild(fragEle)
```

><h2 id='9'>9. 克隆优化节点操作</h2>
```js
  for (var i = 0; i < 3; i++) {
    var oP = document.createElement('p')
    oP.innerHTML = i 
    document.body.appendChild(oP)
  }
  // 下面的效率会更高一些 
  <p id="box1">old</p>
  var oldP = document.getElementById('box1')
  for (var i = 0; i < 3; i++) {
    var newP = oldP.cloneNode(false)
    newP.innerHTML = i 
    document.body.appendChild(newP)
  }
```

><h2 id='10'>10. 字面量与构造式new</h2>
```js
  var a1 = new Array(3)
  a1[0] = 1
  a1[1] = 2
  a1[2] = 3
  // 下面的效率会更高一些 
  var a = [1, 2, 3]
  ----------------------------
  let test = () => {
    let obj = new Object()
    obj.name = 'zce'
    obj.age = 38
    obj.slogan = '我为前端而活'
    return obj
  }
  // 下面的效率会更高一些 
  let test = () => {
    let obj = {
      name: 'zce',
      age: 38,
      slogan : '我为前端而活'
    }
    return obj
  }
  console.log(test())

  ----------------------------
  var str1 = new String('zce说我为前端而活')
  // 下面的效率会更高一些 
  var str2 = 'zce说我为前端而活'
  console.log(str)
```

><h2 id='11'>11. 减少判断层级</h2>
```js
  function doSomething (part, chapter) {
    const parts = ['ES2016', '工程化', 'Vue', 'React', 'Node']
    if (part) {
      if (parts.includes(part)) {
        console.log('属于当前课程')
        if (chapter > 5) {
          console.log('您需要提供 VIP 身份')
        }
      }
    } else {
      console.log('请确认模块信息')
    }
  }
  doSomething('ES2016', 6)
  // 下面的效率会更高一些 
  function doSomething (part, chapter) {
    const parts = ['ES2016', '工程化', 'Vue', 'React', 'Node']
    if (!part) {
      console.log('请确认模块信息')
      return 
    }
    if (!parts.includes(part)) return
    console.log('属于当前课程')
    if (chapter > 5) {
      console.log('您需要提供 VIP 身份')
    }
  }
  doSomething('ES2016', 6)
```

><h2 id='12'>12. 减少作用域链查找层级</h2>
```js
  var name = 'zce'
  function foo () {
    name = 'zce666'  // 这里的Name 是属于全局的
    function baz () {
      var age = 38
      console.log(age) // 作用域内的数据
      console.log(name) // 作用域内没有, 在作用域链向上查找
    }
    baz()
  }
  foo()
  // 下面的效率会更高一些 
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
```

><h2 id='13'>13. 减少数据读取次数</h2>
```js
  <div id="skip" class="skip"></div>
  var oBox = document.getElementById('skip')
  function hasEle (ele, cls) {
    return ele.className == cls
  }

  // 下面的效率会更高一些 
  function hasEle (ele, cls) {
    var clsname = ele.className  // 缓存一下
    return clsname == cls
  }
  console.log(hasEle(oBox, 'skip'))
```

><h2 id='14'>14. 采用事件委托</h2>
```js
  <ul id="ul">
    <li>ZCE</li>
    <li>28</li>
    <li>我为前端而活</li>
  </ul>
  var list = document.querySelectorAll('li')
  function showTxt (ev) {
    console.log(ev.target.innerHTML)
  }
  for(let item of list) {
    item.onclick = showTxt
  }
  // 下面的效率会更高一些 
  var ul = document.getElementById('ul')
  ul.addEventListener('click', showTxt, true)
  function showTxt (ev) {
    var obj = ev.target
    if (obj.nodeName.toLowerCase() === 'li') {
      console.log(obj.innerHTML)
    }
  }
```