<template>
  <Layout>路由
    <h1>动态l</h1>
    <h1>User {{ $route.params.id}} page</h1>
    <p>user/:id</p>
  </Layout>
</template>

<script>
export default {
  name: 'UserPage'
}
</script>