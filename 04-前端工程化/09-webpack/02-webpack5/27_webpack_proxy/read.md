```js
devServer: {
  proxy: {
    '/api': {
      target: 'https://api.github.com',
      // 当实际需要请求的路径里面没有'/api'时. 
      // pathRewrite 用'^/api':'', 把'/api'去掉
      // 这样既能有正确标识, 又能在请求到正确的路径
      pathRewrite: { "^/api": "" },
      // 如果设置成true：发送请求头中host会设置成target
      changeOrigin: true
    }
  }
},
axios.get('https://api.github.com/info/users').then((res) => {
  console.log(res.data)
})
/*
  请求到 /api/users (http://localhost:4000/api/users), 
  现在会被代理到请求 https://api.github.com/info/users
*/
axios.get('/api/users').then((res) => {
  console.log(res.data)
})
```