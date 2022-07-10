// 自动化构建主体模板
const { src, dest, parallel, series, watch } = require('gulp')

const del = require('del')
// 开发服务器
const browserSync = require('browser-sync')
// const sass = require('gulp-sass');
// const sass = require('gulp-babel');
// const swig = require('gulp-swig');
// const imagemin = require('gulp-imagemin');
// 自动加载插件
// 修改如: sass --> plugins.sass
const loadPlugins = require('gulp-load-plugins')

const plugins = loadPlugins()
const bs = browserSync.create()

// 传入html模板的参数
const data = {
  menus: [
  {
    name: 'Home',
    icon: 'aperture',
    link: 'index.html'
  },
  {
    name: 'Features',
    link: 'features.html'
  },
  {
    name: 'About',
    link: 'about.html'
  },
  {
    name: 'Contact',
    link: '#',
    children: [
    {
      name: 'Twitter',
      link: 'https://twitter.com/w_zce'
    },
    {
      name: 'About',
      link: 'https://weibo.com/zceme'
    },
    {
      name: 'divider'
    },
    {
      name: 'About',
      link: 'https://github.com/zce'
    }]
  }],
  pkg: require('./package.json'),
  date: new Date()
}
// 删除文件
const clean = () => {
  return del(['dist', 'temp'])
}
// const style = () => {
//   return src('src/assets/styles/*.scss', { base: 'src' })
//     .pipe(sass({ outputStyle: 'expanded' }))
//     .pipe(dest('dist'))
// }

// ---所有的 temp 目录不要改动----------

// { base: 'src' } 保留原始目录结构
// _开头的不会copy
const style = () => {
  return src('src/assets/styles/*.scss', { base: 'src' })
    .pipe(plugins.sass({ outputStyle: 'expanded' })) // 配置expanded {}完全展开
    .pipe(dest('temp'))
    .pipe(bs.reload({ stream: true })) // 刷新浏览器
}

const script = () => {
  return src('src/assets/scripts/*.js', { base: 'src' })
    .pipe(plugins.babel({ presets: ['@babel/preset-env'] }))
    .pipe(dest('temp'))
    .pipe(bs.reload({ stream: true }))
}

const page = () => {
  // 'src/**/*.html' // 读取任意html文件
  return src('src/*.html', { base: 'src' })
    .pipe(plugins.swig({ data, defaults: { cache: false } })) // 防止模板缓存导致页面不能及时更新
    .pipe(dest('temp'))
    .pipe(bs.reload({ stream: true }))
}
// 图片转换 去掉svg中空格
const image = () => {
  return src('src/assets/images/**', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}
// 字体转换
const font = () => {
  return src('src/assets/fonts/**', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}
// public中素有文件
const extra = () => {
  return src('public/**', { base: 'public' })
    .pipe(dest('dist'))
}

const serve = () => {
  // 参数1: 监视文件
  // 参数2: 任务
  watch('src/assets/styles/*.scss', style)
  watch('src/assets/scripts/*.js', script)
  watch('src/*.html', page)
  // 开发阶段减少构建次数
  // watch('src/assets/images/**', image)
  // watch('src/assets/fonts/**', font)
  // watch('public/**', extra)
  watch([
    'src/assets/images/**',
    'src/assets/fonts/**',
    'public/**'
  ], bs.reload)

  // 服务器 init
  bs.init({
    notify: false,
    port: 2080,
    // open: false,
    // files: 'dist/**',  // 监听启动后的文件修改路径, 可以使用bs.reload 代替
    server: {
      // 比如图片请求, 先去temp查找, 如果找不到, 再去src中查找
      baseDir: ['temp', 'src', 'public'],
      // <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.css">
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  })
}

// 1. 修改 link中文件位置
// 2. 压缩文件
const useref = () => {
  /*
  * 根据构建注释流 build endbuild
    打包后的index.html中
    去掉 /node_modules/bootstrap/dist/css/bootstrap.css
    去掉 /node_modules/bootstrap/dist/css/bootstrap.js
    生成 assets/styles/vendor.css
    生成 assets/styles/vendor.js
  <!-- build:css assets/styles/vendor.css -->
  <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.css">
  <!-- endbuild -->
  */
  return src('temp/*.html', { base: 'temp' })
    .pipe(plugins.useref({ searchPath: ['temp', '.'] }))
    //------------begin------------
    // 对修改引用关系产生的文件 html js css 进行压缩
    .pipe(plugins.if(/\.js$/, plugins.uglify()))
    .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
    .pipe(plugins.if(/\.html$/, plugins.htmlmin({
      // 配置压缩的样式
      collapseWhitespace: true, // 去掉空白字符
      minifyCSS: true, // 去掉 style 中空白字符
      minifyJS: true // 去掉 script 中空白字符
    })))
    //------------end------------
    .pipe(dest('dist'))
  // 现放到temp 临时目录,  之后压缩到 dist目录, 否则有的文件是空的
}

const compile = parallel(style, script, page)

// series 同步任务
// parallel 异步任务

// 上线之前执行的任务
const build = series(
  clean,
  parallel(
    series(compile, useref),
    image,
    font,
    extra
  )
)
// 开发阶段执行的任务 
// 因为配置了baseDir: ['temp', 'src', 'public'], 不会打包image, font, extra, 会去项目中找对应的资源
const develop = series(compile, serve)

module.exports = {
  // style, script, page
  // compile,
  // image,
  // font,
  // extra, // public
  // serve, // 服务器
  clean,
  build,
  develop
}