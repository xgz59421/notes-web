- package.json中, 配置 scripts
```json
  "scripts": {
    // --watch 监视sass
    "build": "sass scss/main.scss css/style.css --watch",
    // 启动浏览器
    // --files 监视浏览器修改的css
    "serve": "browser-sync . --files \"css/*.css\"",
    // 同时运行 buld, serve
    "start": "run-p build serve"
  },
```

- 单独运行 sass: 
  cmd: sass scss/main.scss css/style.css