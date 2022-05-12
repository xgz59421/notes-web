#### stylelint
```js
介绍: 
  提供默认代码检查规则
  提供cli工具, 快速调用
  通过插件支持 sass less postcss
  支持 'gulp' 或 'webpack' 集成使用

npm i stylelint -D
npm i stylelint-config-standard -D
// 检查 sass
npm i stylelint-config-sass-guidelines -D

npx stylelint ./index.css
//  yarn stylelint ./index.css
//  yarn stylelint ./index.scss
```