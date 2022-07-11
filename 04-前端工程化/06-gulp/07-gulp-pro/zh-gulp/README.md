## zh-gulp

```
├─ bin cli入口, 执行gulpfile配置
├─ lib gulpfile.js 配置的位置
```

#### 本地测试
```bash
cd zh-gulp
npm link
npm list -g
测试:
zh-gulp (直接进入 bin 指定位置)

# package.json  ---> "bin": "bin/zh-gulp.js"

cd 需要link的项目
npm link zh-gulp (package.json 包名)
```

#### 发布
```
git 提交本项目 到github
https://github.com/xgz59421/zh-gulp.git
npm publish

https://www.npmjs.com/package/zh-gulp

需要的项目下:
npm i zh-gulp -D
```