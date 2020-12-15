<template>
  <div>
    <p>商品名称: <input type="text" v-model="productName"></p>
    <p>商品名称: <input type="text" v-model="salePrice"></p>
    <button @click="add">确认添加</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      productName:'',
      salePrice:''
    }
  },
  methods:{
    add(){
      var payload={
        productName:this.productName,
        salePrice:this.salePrice,
      }
      this.productName="";
      this.salePrice="";
      this.$store.commit("addProduct",payload);
    }
  }
}
</script>