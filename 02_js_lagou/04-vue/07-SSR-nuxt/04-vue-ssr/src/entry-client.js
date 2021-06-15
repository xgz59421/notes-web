/**
 * 客户端入口
 */
import { createApp } from './app'

// 客户端特定引导逻辑……

const { app, router, store } = createApp()

// 如果有 window.__INITIAL_STATE__ (store.state 服务器渲染的数据)
if (window.__INITIAL_STATE__) {
  // 就替换掉 同步到客户端的vuex
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  app.$mount('#app')
})
