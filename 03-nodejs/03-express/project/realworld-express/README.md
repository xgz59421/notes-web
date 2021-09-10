### express-session
##### 使用 express-session
```js
1. npm i express-session
添加session中间件, 签发session-id, 写入cookie 发到客户端
// 配置使用 Session 中间件
//    存储 Session：1、 生成 Session ID 2、存储数据
//      req.session.xxx = xxx
//      req.session.user = user
//      req.session.user = null  清除  res.redirect('/)重定向
//    获取 Session：1、根据 Session ID 获取 Session 容器中的数据
//      req.session.xxx
//      const sessionUser = req.session.user
// 注意：默认数据存储到内存中
// 持久化: Compatible Session Stores
//   持久化到mongodb中  npm i connect-mongo
2. 
app.use(session({
  secret: sessionSecret, // 签发 Session id 的秘钥 (唯一id)
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 过期时间，单位是毫秒
    // secure: true // 只有 HTTPS 协作才会收发 Cookie
  }, // 保存 Session id 的 Cookie 设置
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }) // 将数据持久化到 MongoDB 数据库中
}))

```
##### 统一配置session数据
```js
// 确保挂载到 Session 初始化配置后
app.use((req, res, next) => {
  // 统一给模板添加数据
  app.locals.sessionUser = req.session.user
  next()
})
```
##### 路由守卫
```js
// 校验页面访问权限, 相当于路由守卫
module.exports = async (req, res, next) => {
  // 检查有没有 Session user
  const sessionUser = req.session.user
  if (sessionUser) {
    return next()
  }

  // 重定向到登录页
  // 302 Location /login
  res.redirect('/login')
}
```

### 修改 插入字符
```js
new Vue({
  delimiters: ['${', '}']
})
```