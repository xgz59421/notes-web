```js
测试: 
  1. npm run build
  2. 运行 index.html 查看dom中 style的 '.title'中color的变化
    color: #12345678;  ---> color: rgba() 为成功
npm i postcss-preset-env -D

插件作用:
  autoprefixe 给样式属性添加前缀
  postcss-preset-env 预设 (包含 autoprefixe插件)
  // 所以使用postcss-preset-env 可以省略 autoprefixe

抛出问题: color: #12345678; 123456 是rgb, 78 是a
  'autoprefixe'不能转换'rgba'中'a'的透明度, 所以需要'postcss-preset-env'预设中的插件


postcss.config.js 可以全局的为'css','less'全部解决postcss兼容转换问题, 无需挨个设置

```