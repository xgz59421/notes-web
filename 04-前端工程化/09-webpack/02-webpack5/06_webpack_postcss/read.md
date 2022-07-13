```js
1. 此例 是讲述postcss, 所以 dist 打包的js 没有生效test.css, 下章会讲述postcss-loader
2. 注意 src/css/test.css 不同版本会根据 browserslistrc, 生成不同的css

npm i -D  postcss autoprefixer postcss-cli
  postcss: 使用js 帮助css进行样式转换, 但是运行时不能体现  
          需要使用 postcss-loader(下章节进行体现)
  postcss-cli: 不使用postcss-loader 单独使用命令行转换
  autoprefixer: 转换时, 给样式加入前缀

命令: npx postcss --use autoprefixer -o ./dist_postcss/ret.css ./src/css/test.css

- postcss 需要 autoprefixer, postcss, .browserslistrc 一起配合使用
  postcss-cli 只是命令行单独执行postcss的工具


以下内容: 略
https://autoprefixer.github.io/
.example {
  display: grid;
  transition: all .5s;
  user-select: none;
  background: linear-gradient(to bottom, white, black);
}
这个css 代码不同浏览器不同版本 会不兼容
```