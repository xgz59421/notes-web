<template>
  <div>
    <h1>访问Vuex的数据-01</h1>
    <hr>
    <p>用户名: {{this.$store.state.username}}</p>
    <p>性别: {{this.$store.state.sex?"男":"女"}}</p>
    <p>年龄: {{this.$store.state.age}}</p>
    <p>工资: {{this.$store.state.salary}}</p>
    <p>学历: {{this.$store.state.extends.education}}</p>
    <p>婚否: {{this.$store.state.extends.ismarry?"已婚":"未婚"}}</p>
    <hr>
    <h1>库存中有{{this.$store.getters.productsCount}}件商品, 它们是:</h1>
    <p v-for="(p,key) in this.$store.state.products" :key="key">
      商品名称:{{p.productName}},
      商品价格:¥{{p.salePrice}}
    </p>
    <hr>

  </div>
</template>