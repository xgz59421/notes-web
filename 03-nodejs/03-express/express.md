## Express 
#### 一. Express 介绍
```
Express 是一个快速，简单，极简的 Node.js web 应用开发框架。通过它，可以轻松的构建各种 web 应用。例如
1. 接口服务
2. 传统的 web 网站
3. 开发工具集成等
    JSON Server
    webpack-dev-server
...
```
```
Express 特性
1. 简单易学
2. 丰富的基础 API 支持，以及常见的 HTTP 辅助程序，例3如重定向、缓存等
3. 强大的路由功能
4. 灵活的中间件
5. 高性能
6. 非常稳定（它的源代码几乎百分百的测试覆盖率）
7. 视图系统支持 14 个以上的主流模板引擎
...
```

#### 二. Express 起步
```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

#### 三. 请求和响应
```js
Express 应用使用路由回调函数的参数：
request 和 response 对象来处理请求和响应的数据。
app.get('/', function (req, res) {
   // --
})

Express 不对 Node.js 已有的特性进行二次抽象，只是在它之上扩展了 web 应用所需的基本功能。
内部使用的还是 http 模块
请求对象继承自: http.IncomingMessage
响应对象继承自:http.ServerResponse
```
##### 请求对象
```
常见属性
req.app
req.body
req.query
req.params
req.method
req.cookies
...

常见方法
req.get()
req.is()
...

```
##### 响应对象
```
属性：
res.app
res.headersSent
res.locals
...

方法：
res.cookie()
res.get()
res.json()
res.jsonp()
res.end()
res.location()
res.redirect()
res.render()
res.send()
res.sendFile()
res.sendStatus()
```

#### 四. 中间件
```
Express 的最大特色，也是最重要的一个设计，就是中间件。
一个 Express 应用，就是由许许多多的中间件来完成的。

Express 中间件和 AOP 面向切面编程就是一个意思
就是都需要经过经过的一些步骤，不去修改自己的代码，以此来扩展或者处理一些功能。

总结：
就是在现有代码程序中，在程序生命周期或者横向流程中 
加入/减去 一个或多个功能，不影响原有功能。
```
```
在中间件函数中可以执行以下任何任务：

执行任何代码
修改 request 或者 response 响应对象
结束请求响应周期
调用下一个中间件
```
##### Express 中间件分类
```
在 Express 中应用程序可以使用以下类型的中间件：

1. 应用程序级别中间件
2. 路由级别中间件
3. 错误处理中间件
4. 内置中间件
5. 第三方中间件
```
##### 1. 应用程序级别中间件
```js
// 不关心请求路径
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

// 限定请求路径
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

// 限定请求方法 + 请求路径
app.get('/user/:id', function (req, res, next) {
  res.send('USER')
})

// 多个处理函数
app.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

// 为同一个路径定义多个处理中间件
app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id)
  next()
}, function (req, res, next) {
  res.send('User Info')
})

app.get('/user/:id', function (req, res, next) {
  res.end(req.params.id)
})

```

###### next('route')
```js
要从路由器中间件堆栈中跳过其余中间件功能，
请调用 next('route') 将控制权传递给下一条路由
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', function (req, res, next) {
  res.send('special')
})

```

##### 2.路由器级中间件
```js
var router = express.Router()
// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id)
  res.render('special')
})
// mount the router on the app
app.use('/', router)


要跳过路由器的其余中间件功能，
请调用next('router') 将控制权转回路由器实例。
```

##### 3.错误处理中间件
```js
错误处理中间件始终带有四个参数
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```
##### 4.处理 404
```js
app.use((req, res, next) => {
	res.status(404).send('404 Not Found.')
})
```

##### 5.内置中间件
```
Express 具有以下内置中间件函数：

express.json()    解析 Content-Type 为 application/json 格式的请求体
express.urlencoded()    解析 Content-Type 为 application/x-www-form-urlencoded 格式的请求体
express.raw()    解析 Content-Type 为 application/octet-stream 格式的请求体
express.text()    解析 Content-Type 为 text/plain 格式的请求体
express.static()    托管静态资源文件
  app.use('/static', express.static(path.join(__dirname, 'public')))
```

##### 6.第三方中间件
http://expressjs.com/en/resources/middleware.html

#### 五. Express 路由
##### 1. 路由方法
```js
Express 支持与所有 HTTP 请求方法相对应的方法：get，post 等
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

有一种特殊的路由方法，app.all()
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})
```
##### 2. 路由路径
```js
路由路径与请求方法结合，定义了可以进行请求的端点。
路由路径可以是字符串，字符串模式或正则表达式。
Express使用path-to-regexp来匹配路由路径
```
```js
此路由路径会将请求匹配到根路由/。
app.get('/', function (req, res) {
  res.send('root')
})

此路由路径会将请求匹配到/about。
app.get('/about', function (req, res) {
  res.send('about')
})

此路由路径会将请求匹配到/random.text。
app.get('/random.text', function (req, res) {
  res.send('random.text')
})

此路由路径将与acd和匹配abcd。
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

这条路线的路径将会匹配abcd，abbcd，abbbcd，等等。
app.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
})

这条路线的路径将会匹配abcd，abxcd，abRANDOMcd，ab123cd，等。
app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})

此路由路径将与/abe和匹配/abcde。
app.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e')
})

基于正则表达式的路由路径示例：
此路由路径将匹配其中带有“ a”的任何内容。
app.get(/a/, function (req, res) {
  res.send('/a/')
})

这条路线的路径将匹配butterfly和dragonfly，但不butterflyman，dragonflyman等。
app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})
```

##### 3. 路径参数
```js
路由参数被命名为 URL 段，用于捕获 URL 中在其位置处指定的值。
捕获的值将填充到 req.params 对象中，并将路径中指定的 route 参数的名称作为其各自的键
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

路径参数的名称必须由“文字字符”（[A-Za-z0-9_]）组成。
Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }

Route path: /plantae/:genus.:species
Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }

```

#### 六. RESTful 接口设计规范
```js
1. 协议: 
API 与用户的通信协议，尽量使用 HTTPs 协议。

2. 版本:
https://api.example.com/v1/

3. HTTP 动词
常用的HTTP动词有下面五个（括号里是对应的SQL命令）。
  GET（读取）：从服务器取出资源（一项或多项）。
  POST（创建）：在服务器新建一个资源。
  PUT（完整更新）：在服务器更新资源（客户端提供改变后的完整资源）。
  PATCH（部分更新）：在服务器更新资源（客户端提供改变的属性）。
  DELETE（删除）：从服务器删除资源。
还有两个不常用的HTTP动词。
  HEAD：获取资源的元数据。
  OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。

4. 身份认证
基于 JWT 的接口权限认证：
  字段名：Authorization
  字段值：Bearer token数据
```

#### 七. Express 实现原理
```js
Express 源码
  ES5 写的
  异步控制采用的回调方式
  源码目录结构

├── index.js # 入口模块
├── lib
│   ├── application.js # app 模块
│   ├── express.js # 组织导出模块
│   ├── middleware # 内置中间件
│   │   ├── init.js
│   │   └── query.js
│   ├── request.js # 扩展 req 对象
│   ├── response.js # 扩展 res 对象
│   ├── router # 路由系统
│   │   ├── index.js
│   │   ├── layer.js
│   │   └── route.js
│   ├── utils.js # 工具方法
│   └── view.js # 模板引擎处理
└── package.json

```

#### 八. Express 调试
https://code.visualstudio.com/docs/editor/debugging

#### 九. Express 性能调优
https://zhuanlan.zhihu.com/p/25549988
https://expressjs.com/en/advanced/best-practice-performance.html
