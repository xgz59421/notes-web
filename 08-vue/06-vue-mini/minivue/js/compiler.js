class Compiler {
  constructor(vm) {
    // el: 
    // <div id="app">
    //   <h1>差值表达式</h1>
    //   <h3>{{ msg }}</h3>
    //   <h3>{{ count }}</h3>
    //   <h1>v-text</h1>
    //   <div v-text="msg"></div>
    //   <h1>v-model</h1>
    //   <input type="text" v-model="msg">
    //   <input type="text" v-model="count">
    // </div>
    this.el = vm.$el
    this.vm = vm
    this.compile(this.el)
  }
  // 编译模板，处理文本节点和元素节点
  compile(el) {
    let childNodes = el.childNodes
    // console.log(childNodes);
    // 转数组  Array.from(伪数组)
    Array.from(childNodes).forEach(node => {
      // console.log(node, node.nodeType);
      // 处理文本节点
      if (this.isTextNode(node)) {
        this.compileText(node)
      } else if (this.isElementNode(node)) {
        // 处理元素节点
        this.compileElement(node)
      }

      // 判断node节点，是否有子节点，如果有子节点，要递归调用compile
      if (node.childNodes && node.childNodes.length) {
        this.compile(node)
      }
    })
  }

  // 编译文本节点，处理差值表达式
  compileText(node) {
    // console.dir(node)
    // {{  msg }}
    // 正则中() 为分组, RegExp.$1取到的就是第一个分组中的内容
    let reg = /\{\{(.+?)\}\}/
    let value = node.textContent
    if (reg.test(value)) {
      let key = RegExp.$1.trim()
      // console.log(reg, key, value);
      node.textContent = value.replace(reg, this.vm[key])

      // 创建watcher对象，当数据改变更新视图
      new Watcher(this.vm, key, (newValue) => {
        node.textContent = newValue
      })
    }
  }

  // 编译元素节点，处理指令
  compileElement(node) {
    // console.log(node.attributes)
    // 遍历所有的属性节点
    // done 转数组  Array.from(伪数组)
    Array.from(node.attributes).forEach(attr => {
      let attrName = attr.name
      // if (attrName.startsWith('v-on')) {
      //   let type = attrName.substr(5)
      //   let key = attr.value
      //   node.addEventListener(type, ()=>{
      //     console.log(this.vm.$options.methods[key]);
      //     this.vm.$options.methods[key]()
      //   })
      // }
      // 判断是否是指令
      if (this.isDirective(attrName)) {
        // v-text --> text
        attrName = attrName.substr(2)
        let key = attr.value
        this.update(node, key, attrName)
      }
    })
  }
  // // v-on
  // onUpdater(node, value, key){
  //   // console.log(this.vm.$options.methods); 
  //   node.addEventListener('click', ()=>{
  //     this.vm.$options.methods[key]()
  //   })
  // }
  update(node, key, attrName) {
    let updateFn = this[attrName + 'Updater']
    updateFn && updateFn.call(this, node, this.vm[key], key)
  }

  // v-html
  htmlUpdater(node, value, key) {
    node.textContent = value
    new Watcher(this.vm, key, (newValue) => {
      node.textContent = newValue
    })
  }

  // 处理 v-text 指令
  textUpdater(node, value, key) {
    node.textContent = value
    new Watcher(this.vm, key, (newValue) => {
      node.textContent = newValue
    })
  }
  // v-model
  modelUpdater(node, value, key) {
    node.value = value
    new Watcher(this.vm, key, (newValue) => {
      node.value = newValue
    })
    // TODO 双向绑定
    node.addEventListener('input', () => {
      this.vm[key] = node.value
    })
  }

  // 判断元素属性是否是指令
  isDirective(attrName) {
    return attrName.startsWith('v-')
  }
  // 判断节点是否是文本节点
  isTextNode(node) {
    return node.nodeType === 3
  }
  // 判断节点是否是元素节点
  isElementNode(node) {
    return node.nodeType === 1
  }
}