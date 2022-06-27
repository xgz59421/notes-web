<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'LgForm',
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate (cb) {
      const tasks = this.$children
        .filter(child => child.prop)   // 过滤有prop的子元素
        .map(child => child.validate()) // validate 会返回 promise
      Promise.all(tasks)  // 如果有一个promise是 reject 则 catch
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  }
}
</script>

<style>

</style>
