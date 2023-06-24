var eric = {
  eid: 1001,
  ename: '埃里克',
  eage: 25
}
//公司要求: 员工年龄可以修改，但是必须介于18~65之间
Object.defineProperties(eric, {
  //1. 半隐藏真属性值:
  _eage: {
    //实际存储属性值的真属性
    value: eric.eage,
    writable: true,
    enumerable: false,
    configurable: false
  },
  //2. 新建一个替身属性,冒名顶替
  eage: {
    //3. 为替身配两个保镖
    //保镖一: 专门负责从受保护的半隐藏属性中获取属性值，给外部
    get: function () {
      console.log(`自动调用一次get()，返回${this._eage}`)
      return this._eage
    },
    //保镖二: 专门负责接收外部传来的新值，经过验证后，决定是否保存到实际的受保护的属性中。
    set: function (value) {
      console.log(`自动调用了一次set(value=${value})`)
      if (value >= 18 && value <= 65) {
        this._eage = value
      } else {
        throw Error(`年龄超范围！`)
      }
    },
    enumerable: true, //替身要替真的属性抛头露面
    configurable: false
  }
})

//外界:使用访问器属性时和使用普通属性完全一样！
//想输出eric的年龄
console.log(eric.eage)
//想给eric长一岁
eric.eage = 26
console.log(eric.eage)
console.log('------------------------')
console.log(eric)
//想修改eric的年龄为16
// eric.eage=16;//报错: 年龄超范围！

var obj = Object.getOwnPropertyDescriptor(eric, 'eage')
console.log(obj)
