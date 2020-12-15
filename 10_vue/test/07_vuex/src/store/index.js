import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //state 实现数据共享
  state: {
    username:"jack",
    age:18,
    sex:true,
    salary:78567.95,
    extends:{
      education:"本科",
      ismarry:true
    },
    products:[
      {productName:"商品1",salePrice:1234},
      {productName:"商品2",salePrice:2345},
      {productName:"商品3",salePrice:3456},
      {productName:"商品4",salePrice:4321}
    ]
  },
  //计算属性
  getters: {
    //统计数量
    productsCount(state){
      return state.products.length;
    },
    //获取特定商品
    getByIndex(state){
      return function (index) {
        return state.products[index];
      }
    }
  },
  //操作state 同步
  mutations: {
    addAge(state){
      state.age++;
    },
    minusAge(state){
      state.age--;
    },
    addProduct(state,payload){
      state.products.push(payload);
    }
  },
  //可以发送异步ajax请求
  actions: {
    getProduct(content){
      var p = {productName:"华为note40 5G手机",salePrice:8888}
      //正常这里 是 this.axios.get(.....);
      content.commit("addProduct", p);
    }
  },
  modules: {
  }
})
