<template>
  <div>
    <button @click="getServerData">获取数据</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods:{
    //["getProduct"] /{getProduct:"getProduct"}
    ...mapActions({
      getProduct:"getProduct"
    }),
    getServerData(){
      //分发
      // this.$store.dispatch("getProduct");
      this.getProduct();
    }
  }
}
</script>