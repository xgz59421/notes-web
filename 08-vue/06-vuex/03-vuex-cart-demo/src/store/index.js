import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)
// Vuex插件 (就是一个函数, 接受store为参数)
const myPlugin = store => {
  // 当store初始化后调用
  store.subscribe((mutation, state) => {
    console.log('myPlugin mutation', mutation)
    // mutation:{
    //   type: "cart/addToCart" / "products/addToCart"
    //   payload:
    // }

    // 每次调用mutation之后执行
    if (mutation.type.startsWith('cart/')) {
      // cart mutaistion
      window.localStorage.setItem('cart-products', JSON.stringify(state.cart.cartProducts))
    }
  })
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    cart
  },
  plugins: [myPlugin]
})
