<template>
  <div>
    <h1>about page</h1>
    <!-- 刷新导航 -->
    <h2>a标签</h2>
    <a href="/">首页</a>
    <!-- router-link -->
    <h2>router-link</h2>
    <router-link to='/'>首页</router-link>
    <!-- 编程式导航 -->
    <h2>编程式导航</h2>
    <button @click="onClick">首页</button>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  methods:{
    onClick() {
      this.$router.push('/')
    }
  }
}
</script>