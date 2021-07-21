<template>
  <div>
    <h1>{{this.$store.state.age}}</h1>
    <p><button @click="add">增加年龄</button></p>
    <p><button @click="minus">减少年龄</button></p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods:{
    ...mapMutations({
      addAge:"addAge"
    }),
    ...mapMutations(
      ["minusAge"]
      ),
    add(){
      // this.$store.commit("addAge");
      this.addAge();
    },
    minus(){
      // this.$store.commit("minusAge");
      this.minusAge();
    }
  }
}
</script>