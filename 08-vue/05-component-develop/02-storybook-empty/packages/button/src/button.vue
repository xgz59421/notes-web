<template>
  <div>
    <!-- <button @click="handleClick"><slot></slot></button> -->
    <el-button v-bind="$attrs" v-on="$listeners">
      <slot><p>默认按钮</p></slot>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'ZhButton',
  // methods: {
  //   handleClick (evt) {
  //     this.$emit('click', evt)
  //     evt.preventDefault();
  //   }
  // }
}
</script>

<style>

</style>
