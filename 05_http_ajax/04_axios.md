# axios 
- axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

><h2 id='1'>1. 封装axios</h2> 
- 
  ```javascript
  import Vue from 'vue'
  import axios from 'axios'
  // import Qs from 'qs'

  // axios默认配置
  axios.defaults.timeout = 30000 // 超时时间
  // console.log(process.env)
  axios.defaults.baseURL = process.env.VUE_APP_URL // 默认地址
  axios.defaults.baseURL ='https://tjexportcdzx-bg.ihxlife.com:8004' // 默认地址

  // 整理数据
  axios.defaults.transformRequest = function (data) {
    // data = Qs.stringify(data)
    data = JSON.stringify(data)
    return data
  }

  // 路由请求拦截
  // http request 拦截器
  axios.interceptors.request.use(
    config => {
      // 在发送请求之前做某事
      Vue.$loading.show()
      config.headers['Content-Type'] = 'application/json;charset=UTF-8'
      return config
    },
    error => {
      // 请求错误时做些事
      Vue.$loading.hide()
      return Promise.reject(error.response)
    })

  // 路由响应拦截
  // http response 拦截器
  axios.interceptors.response.use(
    response => {
      // 对响应数据做些事
      Vue.$loading.hide()
      return response
    },
    error => {
      Vue.$loading.hide()
      return Promise.reject(error.response) // 返回接口返回的错误信息
    })
  export default axios
  ```
><h2 id='2'>2. get请求</h2> 
- 
  ```javascript
  axios.get('login', {
    params: {
      uname: uname.value,
      upwd: upwd.value
    }
  }).then(function (result) {
    console.log(result);
    console.log(result.data);
  });
  ```
><h2 id='3'>3. post请求</h2> 
- 
  ```javascript
  import axios from './httpConfig/http'
  Vue.prototype.$http = axios;
  this.$http
    .post('/zspace1/main', {
        user_id: that.form.userId,
        token: that.form.token,
        timestamp: that.form.timestamp,
        openid:that.form.openid
    })
    .then(rest => {
      if (rest.data.result_code==1) {
        that.dataList=rest.data.data
      }else{
        that.$alertbox.show(rest.data.result_message)
      }
    })
    .catch(err => {
      that.$alertbox.show('请求失败' + err)
    })
  ```