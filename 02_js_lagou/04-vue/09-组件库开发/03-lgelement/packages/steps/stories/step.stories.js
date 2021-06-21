import Steps from '../'

export default {
  title: 'Steps',
  component: Steps
}

export const Step = () => ({
  components: { Steps },
  template: `
  <div>
  <steps :count="count" :active="active"></steps>
  <button @click="next">下一步</button>
  </div>`,
  data () {
    return {
      count: 4,
      active: 0
    }
  },
  methods: {
    next () {
      this.active++
    }
  }
})


