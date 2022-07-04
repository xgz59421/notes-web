import ZhButton from '../index'
import '../../utils/config'

export default {
  title: 'ZhButton',
  component: ZhButton
}

export const Default = () => ({
  components: { ZhButton },
  template: '<zh-button></zh-button>'
})

export const Success = () => ({
  components: { ZhButton },
  template: '<zh-button type="success" @click="sure">成功按钮</zh-button>',
  methods: {
   sure() {
    console.log('click sure')
   } 
  }
})


