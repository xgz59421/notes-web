### vscode 插件
1. 自动更改标签插件: auto rename tag
2. 中文插件:chinese language
3. 格式化插件:Beautify 
   使用:按住F1或ctrl shift p ->Beautify file
4. bracket pair colorizer2: 颜色
5. community material  主题
6. indent-rainbow 缩进样式
7. live server
8. CSS Peek 跳转 css 定义
9. code runner 
```
"code-runner.runInTerminal": true
报错解决:

在通过vs code 运行webpack进行打包时，报错webpack : 无法加载文件 D:\nodejs\node_global\webpack.ps1，因为在此系统上禁止运行脚本。
解决方案：

以管理员身份运行vs code
执行：get-ExecutionPolicy，显示Restricted，表示状态是禁止的
执行：set-ExecutionPolicy RemoteSigned
这时再执行get-ExecutionPolicy，就显示RemoteSigned
```
10. tabout tab跳出')'
11. vscode-icons  图标
12. todo tree  
13. leetcode: 题库
14. Angular Snippets   by John Papa
15. React/React Native snippets    by  Walter Ribeiro
16. autoprofixer css 自动补全兼容前缀
```
bug:目前3.0 有问题browsers是黑色的不可用, 降低版本修复
使用:F1 autoprofixer
setting.json 配置: 
"cssrem.rootFontSize": 50,
"autoprefixer.browsers": [
  "last 3 versions",
  "ie >= 10",
  "ie_mob >= 10",
  "ff >= 30",
  "chrome >= 34",
  "safari >= 6",
  "ios >= 6",
  "android >= 4.4"
],
```
17. cssrem  px 与rem间互转
18. axios snippets 
19. vue 2 snippets
20. 小霸王
21. Settings Sync 同步vscode 到云端
22. Better Comments
    使用: 
    ```
    // !
    // *
    // ?
    // -
    // todo
    ```
23. REST Client 接口调试
24. Babel JavaScript  语法高亮显示
25. path-alias
{
  "pathAlias.aliasMap": {
    "@": "${cwd}/src",
    "@utils": "${cwd}/src/utils"
  }
}


### vscode 快捷键
1. code . 打开当前文件下的vscode
1. code -a . 打开多个项目到工作区
1. 设置用户代码片段
```js
// 以vue 命令为例
// 其中 $1, $2 为生成片段之后光标所在的位置，$0 是光标最后所在的位置。使用 tab 键切换光标，用于快速输入。
{
  "vue template": {  // 该片段的名称（用于分辨各片段）
    "prefix": "vue", // 关键字（输入该关键字使用 tab 键即可快速生成）
    "body": [
      "<template>",
      "  <div class=''>$2</div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  name: '',",
      "  components: {},",
      "  props: {},",
      "  data() {",
      "    return {}",
      "  },",
      "  computed: {},",
      "  watch: {},",
      "  created() {},",
      "  mounted() {},",
      "  methods: {},",
      "}",
      "</script>",
      "",
      "<style scoped></style>"
    ],
    "description": "vue template"
  }
}
```


