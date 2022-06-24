## vue 遇到过的问题
1. keep-alive include 路有名字和页面名字必须一一对应
2. 通过v-if加载的ref页面, 不能直接调用他的方法, 需要使用 $nextTick(()=>ref.xxx())
3. el-input 调用click方法要加.native  @click.native
4. v-for 参数过深导致的不渲染 需要调用 $forceUpdate()