## vue 指令

- [1. 自定义指令 directive](#1)
- [2. 自定义过滤器 filter](#2)

--------
><h2 id='1'>1. 自定义指令</h2>
- 指令定义函数提供了几个钩子函数:
  ```css
  bind: 只调用一次,指令第一次绑定到元素时调用
  inserted: 被绑定元素插入父节点时调用(父元素存在即可调用,不必存在在document中)
  update: 被绑定元素所在的模板更新时调用
  unbind: 只调用一次,指令与元素解绑时调用
  ```
  ```html
  创建自定义指令:
    Vue.directive("focus", {
      inserted(domElement) {
        domElement.focus();
      }
    });
  使用:v-focus
    <input type="text" v-focus>
    <button>百度一下</button>
  ```
><h2 id='2'>2. 自定义过滤器</h2>
- 过滤器的本质就是有返回值的函数
  ```html
  创建filter
  方式一: 
  Vue.filter("moneyFilter", 
    function (oldVal, type) {
      return `${type||"¥"}${oldVal.toFixed(2)}`;
    }
  );
  方式二:
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
  使用:
    <h1>价格:{{price1| moneyFilter}}</h1>
    <h1>价格:{{price2| moneyFilter("$")}}</h1>
  ```

