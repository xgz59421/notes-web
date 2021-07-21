<template>
  <div>
    <h1>user/id page </h1>
    <p>id: {{$route.params.id}}</p>
  </div>
</template>

<script>
// 动态路由
// localhost:3000/user/:id
// localhost:3000/user/1
// localhost:3000/user/abc
// 获取参数: $route.params.id
export default {
  name: 'userIdPage'
}
</script>