<template>
  <div>
    <h1>父路由</h1>
    <!-- 子路由出口 -->
    <nuxt-child />
  </div>
</template>

<script>
export default {
  // 路由嵌套
  name: 'UsersPage'
}
</script>