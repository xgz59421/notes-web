><h2>指令</h2>
1. `v-text` 或 {{插值与法}} 更新元素的textContent
2. `v-html` 更新元素的innerHTML
3. `v-show` 切换元素CSS属性 display控制显示隐藏
4. `v-if`, v-else-if, v-else
    ```
    这些组合通过删除dom树的元素控制显示隐藏
    v-if, v-else-if, v-else之间不要插入其他元素
    ```
5. `v-for`
    ```html
    1. 基于元数据多次渲染元素或模板块,生成多个相同结构元素.
    2. 遍历时:in/of 都可以
    example:
    <li v-for= "item in 10">{{item}}</li>
    <li v-for= "item in list">{{item}}</li>
    <li v-for= "(item, i) in list">{{i}}-{{item}}</li>
    注意 : 修改for循环中任意data数据, v-for会重新生成所有节点元素
    解决: 必须添加属性 :key ="i" (虚拟dom树添加属性,看不到)
    key: 最好用item中的id属性
    example: 
    <li v-for= "(item, i) in list" :key ="i">{{item}}</li>
    ```
6. `v-on 缩写@` 绑定事件监听
    ```html
    修饰符：
      .stop - 调用 event.stopPropagation()。
      .prevent - 调用 event.preventDefault()。
    <!-- $event 显示的传入事件event -->
    example:
    <button v-on:click=fun>
    <button @click.stop=fun()>
    <button @click=fun(data, $event)>
    ```
7. `v-bind` 动态绑定
    ```html
    <!-- 绑定一个 attribute -->
    <img :src="imageSrc">
    <!-- 内联字符串拼接 -->
    <img :src="'/path/to/images/' + fileName">
    <!-- class 绑定 -->
    <div :class="{ red: isRed }"></div>
    <div :class="[classA, classB]"></div>
    <div :class="[classA, { classB: isB, classC: isC }]">
    <!-- style 绑定 -->
    <div :style="{ fontSize: size + 'px' }"></div>
    <div :style="[styleObjectA, styleObjectB]"></div>
    <!-- 父传子参数 -->
    <todo-add :tasks="tasks"></todo-add>
    ```
8. `v-model` 双向绑定 (表单)
    ```html
    修饰符：
      .lazy - 取代 input 监听 change 事件
      .number - 输入字符串转为有效的数字
      .trim - 输入首尾空格过滤
    <input type="text" v-model:value="kw">
    简写:
    <input type="text" v-model="kw">
    ```
    ```html
    example: 不用v-model实现双向绑定
    <input :value="str" @input="fun">
    <button @click="search">百度一下</button>
    methods:{
      fun(e){
        this.str=e.target.value
      },
      search(){
        if(this.str.trim()!==""){
          console.log(`查找${this.str}相关的内容...`)
        }
      }
    }
    ```
9. `v-once`
- 只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能
10. `v-cloak`
- 这个指令保持在元素上直到关联实例结束编译
  ```css
  和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕
  ```
11. `v-pre`
- 跳过这个元素和它的子元素的编译过程
