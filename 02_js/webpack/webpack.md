` 手册`：https://www.webpackjs.com/  
` 概念`：
```
Webpack 是一个现代 JavaScript 应用程序的静态模块打包器。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块(可能是JS/CSS/图片等)，然后将所有这些模块打包成一个资源包/资源簇(bundle)文件。
```
` 用途`：
```
资源打包后，再供客户端一次性加载，减少请求次数和请求数据总大小，从而提高访问效率。
```

`注意`：
```
Webpack本身用于打包静态资源，通常的使用场景是：项目初步开发完成后，运行Webpack(是一个NPM扩展包)，把需要处理的静态资源打包，把得到的打包文件和HTML文件一起发布到WEB服务器(可以是Node / PHP / Java等)上供客户端访问。
```
`核心概念`：
1. `mode`：运行模式，可以指定为production或者development
2. `entry`：入口，指定资源包的入口文件
3. `output`：输出，指定最终输出的资源包文件
4. `loader`：加载器，让Webpack可以处理非JS文件，如CSS/图片等
5. `plugin`：插件，可以进一步扩展Webpack本身的功能

`运行webpack`:
```bash
运行webpack，根据主配置文件对静态资源进行打包

  1. 配置package.json
    "scripts": {
      "build": "webpack-dev-server --open"
    },
  2. 用 npm run build方式运行
```

`手动打包`: 
```
  1. 配置webpack.config.js
  2. 两种方式打包: (推荐第二种: 省事)
    1. node ./node_modules/webpack/bin/webpack.js
    2. npx webpack 手动打包dist文件夹
  3. 运行 dist中的 index.html文件 
```