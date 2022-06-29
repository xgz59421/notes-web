<template>
  <div>
    <h1>子组件 FooComponent</h1>
    <!-- 非页面组件中不能使用asyncData() abc is undefine  -->
    <!-- <p>{{abc}}</p> --> 
    <ul>
      <li v-for="(item,key) in posts" :key="key">
        <nuxt-link :to="'/article/'+item.id">{{item.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooComponent',
  props:['posts']

  // 不会执行
  // // 非页面组件中不能使用asyncData()
  // async asyncData() {
  //   return {
  //     abc: '123'
  //     }
  // },
}
</script>