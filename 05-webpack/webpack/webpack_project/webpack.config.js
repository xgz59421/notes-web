//webpack.config.js
//此文件用于填写 webpack 打包的相关配置
//  npm i -D webpack webpack-cli

//引入模块, node.js的写法
const htmlWebpackPlugin = require('html-webpack-plugin') //通过 npm 安装


//目标: 把 使用ES6 写法的 index.js 文件打包成 ES5格式, 通用版本.  存放在 dist 文件夹下
module.exports = {
  //mode 模式, 可选值有:
  //production 产品: 删除了空格和注释,缩小文件大小
  //development 开发: 带有空格和注释,便于阅读
  mode : "production",

  //entry: 入口, 代表你要打包的js文件路径
  entry: "./src/js/index.js",
  //output: 出口; 规定打包之后的文件存放在哪里
  output: {
    //filename: 文件名
    filename : "bundle.js",
    //path: 文件存放的路径
    // __dirname 是node.js 提供的一个属性, 代表当前文件所在目录的 绝对路径
    path: __dirname + "/dist"
  },

  // webpack本身只能对 js 文件进行打包
  // 对其它类型文件打包时, 必须进行特殊设置
  module: {
    // rule 规则,规范
    rules: [
      // 打包css
      // npm i -D css-loader  style-loader
      {
        //注意是 test 不是 text!!
        //代表 监听 .css 结尾的文件
        test: /\.css$/,
        // loader: webpack本身只能打包js文件, 要想打包其它类型文件, 必须下载依赖的工具才可以, 此处css打包依赖两个工具, style-loader 和 css-loader
        //下载的命令:  切换到项目目录下
        // > npm i -D css-loader style-loader
        // 下载完毕后, 再次运行打包命令
        // > npx webpack
        // 观察打包之后的 bundle.js 文件
        use: ['style-loader', 'css-loader']
      },
      // 打包图片
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        // 介绍两种打包图片的loader
        /*
         第1种: 
         file-loader 作用是只把用到的图片拷贝到 dist 目录下,过滤掉不用的图片
        */
        /*
         第2种: 
         url-loader:
          1. 可以把小于指定大小的图片 使用 base64 进行转码, 把图片转为字符串存储
          2. 把超过指定大小的图片 依然采用 file-loader方式处理
        */
        //  npm i -D file-loader  url-loader
        // 如果loader只有一个, 可以换一个写法
        // use: ['file-loader']
        // loader: 'file-loader',

        // 用最新的 url-loader打包
        loader: 'url-loader',
        //默认图片会出现在dist下方并且为了防止重名会改名字, 可以通过配置 来导出到指定文件夹下,维持原有名称
        //options必须配合  loader: xxx 写法
        options: {
          //[name]代表图片原名称
          //[ext] 代表图片原后缀名
          name: 'img/[name].[ext]',

          //限制大小 8192B -> 8KB
          //即8kB分割线, 小于的转base64存储
          //大于的 依然拷贝方式
          limit: 8192
        }
      }
    ]
  },
  // 打包html
  // npm i -D html-webpack-plugin
  plugins: [ //设定要加载的插件
    new htmlWebpackPlugin({
      //指定要操作的 html 文件
      template: './index.html'
    })
  ]
}

//通过 cmd 命令, 按照 webpack.config.js 文件中的配置, 来进行自动打包操作:
//1. 先切换到 当前文件夹下, 例如 project1 下
//2. npx webpack
//3. 执行完毕以后, 到 dist 文件夹下查看是否多出来一个 bundle.js 文件


//正则表达式中 如何表示  .css 结尾的文件?
// $代表字符串结尾  \. 是对 . 进行转义, 代表普通的.
//   /\.css$/


//打包的原理: 把 css 代码 打包到 js 文件中, 合并到一起
//所以需要到 index.js 中, 最上方添加一句引入代码:
// import style from '../css/index.css'


//图片一般以什么结尾
//png jpg jpeg gif svg
//正则:  /\.(png|jpg|jpeg|gif|svg)$/
//代表以 .xxx 结尾的文件


