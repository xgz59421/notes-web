import ZhButton from './src/button.vue'

ZhButton.install = Vue => {
  Vue.component(ZhButton.name, ZhButton)
}

export default ZhButton