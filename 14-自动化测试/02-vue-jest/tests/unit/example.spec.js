import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
// https://v1.test-utils.vuejs.org/zh/
test.only('HelloWorld.vue', () => {
  const shallowMountWrapper = shallowMount(HelloWorld)
  const mountWrapper = mount(HelloWorld)

  // shallowMount 是浅渲染
  console.log(shallowMountWrapper.html())

  // mount 是深渲染
  console.log(mountWrapper.html())
})

test('HelloWorld.vue', async () => {
  // 挂载组件
  const wrapper = shallowMount(HelloWorld, {
    propsData: {
      msg: 'Hello World'
    }
  })

  // findeall --> querySelectAll
  // find --> querySelect
  const countText = wrapper.find('[data-testid="count-text"]')
  const button = wrapper.find('button')
  const btn2 = wrapper.find('[data-testid="btn2"]')

  expect(countText.text()).toBe('0')

  // 等待 渲染后1
  // await Vue.nextTick()
  // 触发事件
  await button.trigger('click')

  // vm vue实例 也就是代码中的 this
  expect(wrapper.vm.count).toBe(1)
  // 页面中的count元素 
  // 等待 渲染后1 才显示1
  expect(countText.text()).toBe('1')

  console.log(wrapper.emitted())
  // 触发前 emit 是空的
  await btn2.trigger('click')
  console.log(wrapper.emitted())
  expect(wrapper.emitted().hello).toBeTruthy()
  expect(wrapper.emitted().hello[0][0]).toBe(123)

  // 得到 html文本
  // console.log(wrapper.element.innerHTML)
  // console.log(wrapper.html())
  // expect(wrapper.html()).toContain('Hello World')
})


// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
