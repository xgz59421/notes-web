## npm scripts

#### 单独运行 sass
```
每次都需要重新编译过于繁琐
cmd: sass scss/main.scss css/style.css
```

#### npm scripts
```json
package.json
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

