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

test('vue test', () => {
  renderVueComponent()
  expect(document.querySelector('h1').innerHTML).toBe("hello")
})