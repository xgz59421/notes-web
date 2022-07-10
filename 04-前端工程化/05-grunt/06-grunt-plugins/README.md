#### 常用的插件
```bash
yarn add grunt-sass sass --dev
yarn add grunt-babel @babel/core @babel/preset-env --dev

# 自动加载所有的 grunt 插件中的任务
yarn add load-grunt-tasks --dev 
# 监视 自动编译
yarn add grunt-contrib-watch --dev
```

#### 运行
```
yarn grunt sass
yarn grunt babel
yarn grunt watch
yarn grunt // 执行default里所有的任务
``` 