<template>
  <div>
    <h1>访问Vuex的数据-01 (mapState,mapGetters)</h1>
    <hr>
    <!-- "username","age","sex" 用到了mapState -->
    <p>用户名: {{username}}</p>
    <p>性别: {{sex?"男":"女"}}</p>
    <p>年龄: {{age}}</p>
    <p>工资: {{$store.state.salary}}</p>

    <p>学历: {{myextends.education}}</p>
    <p>婚否: {{$store.state.extends.ismarry?"已婚":"未婚"}}</p>

    <hr>
    <!-- $store.getters.productsCount -->
    <h1>库存中有{{productsCount}}件商品, 它们是:</h1>
    <p v-for="(p,key) in products" :key="key">
      商品名称:{{p.productName}},
      商品价格:¥{{p.salePrice}}
    </p>
    <hr>

  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
  // 计算属性
  computed:{
    ...mapState([
      "username","age","sex","products"
    ]),
    ...mapState({
      myextends:"extends"
    }),
    ...mapGetters({
      productsCount:"productsCount"
    })
  }
}
</script>