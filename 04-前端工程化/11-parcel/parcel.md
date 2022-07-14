## parcel 零配置Web应用打包工具

#### 安装运行
```bash
yarn init -y
npm init -y
安装: 
yarn add parcel-bundler --dev
npm install -g parcel-bundler

开发环境:
yarn parcel 入口文件 (一般建议 index.html为打包入口)
yarn parcel .\src\index.html

生产环境:
yarn parcel build .\src\index.html
```

#### 自动安装依赖

#### 加载其他资源模块 如css, 图片 也是零配置

#### 支持动态导入
```
import('jquery').then($ => {
  $(document.body).append('<h1>Hello Parcel</h1>')

  $(document.body).append(`<img src="${logo}" />`)
})
```