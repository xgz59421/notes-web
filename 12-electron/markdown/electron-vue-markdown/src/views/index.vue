<template>
  <el-container class="container">
    <left-box />
    <right-box />
  </el-container>
</template>

<script>
  import leftBox from './leftBox.vue'
  import rightBox from './rightBox.vue'
  export default {
    name: 'Index',
    components: { leftBox, rightBox },
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  .container {
    height: 100vh;
  }
</style>