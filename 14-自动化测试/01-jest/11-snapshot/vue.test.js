// 引入完整版vue
import Vue from 'vue/dist/vue'

function renderVueComponent() {
  document.body.innerHTML = `<div id='app'></div>`
  new Vue({
    template: `
    <div id='app'>
      <h1>{{msg}}</h1>
    </div>`,
    data: {
      msg: 'hello'
    }
  }).$mount('#app')
}

test('snapshot test', () => {
  renderVueComponent()
  // 第1次运行的时候, 会生成快照文件字符串
  // 下一次运行测试的时候会和快照文件进行比对, 如果不一致则测试失败
  expect(document.body.innerHTML).toMatchSnapshot()
})