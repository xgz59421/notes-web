## Koa

#### 介绍
```
Koa 是一个新的 web 框架
Koa 内部使用 ES6 编写
由 Express 幕后的原班人马打造
致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。

有很多开发工具/框架都是基于 Koa 的
Egg.js
构建工具 Vite

官网：https://koajs.com/
GitHub：https://github.com/koajs/koa
中文网：https://koa.bootcss.com/

Awesome Koa:
https://github.com/ellerbrock/awesome-koa
```

#### Koa 基本用法

```js
安装: 
  npm i koa

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

#### Koa 中的 Context 对象
参见：https://koa.bootcss.com/#context

#### Koa 中的路由
##### 1. 原生路由
```js
const main = ctx => {
  if (ctx.request.path !== '/') {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
  } else {
    ctx.response.body = 'Hello World';
  }
};
```
##### 2. koa-router 模块
##### 3. 静态资源托管
```js
npm install koa-static

const app = new Koa();
const serve = require('koa-static');
app.use(serve(__dirname + '/test/fixtures'));
```
##### 4. 重定向
```js
ctx.response.redirect('/');
ctx.response.body = '<a href="/">Index Page</a>';
```

#### Koa 中间件
##### 1. 中间件栈
<img src='./koa-middleware-stack.png'>

```js
多个中间件会形成一个栈结构（middle stack），以"先进后出"（first-in-last-out）的顺序执行。
最外层的中间件首先执行。
调用next函数，把执行权交给下一个中间件。
...
最内层的中间件最后执行。
执行结束后，把执行权交回上一层的中间件。
...
最外层的中间件收回执行权之后，执行next函数后面的代码。
const one = (ctx, next) => {
  console.log('>> one');  1
  next();
  console.log('<< one');  6
}

const two = (ctx, next) => {
  console.log('>> two');  2
  next(); 
  console.log('<< two');  5
}

const three = (ctx, next) => {
  console.log('>> three');  3
  next();
  console.log('<< three');  4
}

app.use(one);
app.use(two);
app.use(three);

如果中间件内部没有调用 next 函数，
那么执行权就不会传递下去
```

##### 2. 异步中间件
```js
迄今为止，所有例子的中间件都是同步的，不包含异步操作。
如果有异步操作（比如读取数据库），中间件就必须写成 async 函数

app.use(async (ctx, next) => {
  const data = await util.promisify(fs.readFile)('./views/index.html')
  ctx.type = 'html'
  ctx.body = data
  next()
})
```

##### 3. 中间件的合成
```js
koa-compose 模块可以将多个中间件合成为一个
npm install koa-compose

const compose = require('koa-compose');

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}

const main = ctx => {
  ctx.response.body = 'Hello World';
};

const middlewares = compose([logger, main]);
app.use(middlewares);
```

#### Koa 中的错误处理
##### 500 错误
```js
const main = ctx => {
  ctx.throw(500);
};
```

##### 404 错误
```js
const main = ctx => {
  ctx.response.status = 404;
  ctx.response.body = 'Page Not Found';
};
```

##### 处理错误的中间件
```js
const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  }
};

const main = ctx => {
  ctx.throw(500);
};

app.use(handler);
app.use(main);
```

##### error 事件的监听
```js
运行过程中一旦出错，Koa 会触发一个error事件。监听这个事件，也可以处理错误
const main = ctx => {
  ctx.throw(500);
};

app.on('error', (err, ctx) =>
  console.error('server error', err);
);
```

##### 释放 error 事件
```js
需要注意的是，如果错误被try...catch捕获，就不会触发error事件。
这时，必须调用ctx.app.emit()，手动释放error事件，
才能让监听函数生效。
const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.type = 'html';
    ctx.response.body = '<p>Something wrong, please contact administrator.</p>';
    ctx.app.emit('error', err, ctx);
  }
};

const main = ctx => {
  ctx.throw(500);
};

app.on('error', function(err) {
  console.log('logging error ', err.message);
  console.log(err);
});
```

#### Koa开发 Web App 功能
##### Cookies
```js
ctx.cookies 用来读写 Cookie。

const main = function(ctx) {
  const n = Number(ctx.cookies.get('view') || 0) + 1;
  ctx.cookies.set('view', n);
  ctx.response.body = n + ' views';
}
```

##### 表单
```js
const koaBody = require('koa-body');

const main = async function(ctx) {
  const body = ctx.request.body;
  if (!body.name) ctx.throw(400, '.name required');
  ctx.body = { name: body.name };
};

app.use(koaBody());
```

##### 文件上传
```js
koa-body 模块还可以用来处理文件上传
const os = require('os');
const path = require('path');
const koaBody = require('koa-body');

const main = async function(ctx) {
  const tmpdir = os.tmpdir();
  const filePaths = [];
  const files = ctx.request.body.files || {};

  for (let key in files) {
    const file = files[key];
    const filePath = path.join(tmpdir, file.name);
    const reader = fs.createReadStream(file.path);
    const writer = fs.createWriteStream(filePath);
    reader.pipe(writer);
    filePaths.push(filePath);
  }

  ctx.body = filePaths;
};

app.use(koaBody({ multipart: true }));
```

#### Koa 原理实现
```
Koa 源码目录结构
├── History.md
├── LICENSE
├── Readme.md
├── dist
│   └── koa.mjs
├── lib
│   ├── application.js  # 最核心的模块
│   ├── context.js # 上下文对象
│   ├── request.js # Koa 自己实现的请求对象
│   └── response.js # Koa 自己实现的响应对象
└── package.json
```
