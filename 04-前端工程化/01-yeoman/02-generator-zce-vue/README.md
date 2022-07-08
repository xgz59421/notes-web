## 03-generator-zce-vue

#### 创建项目步骤
```bash
1. yarn init
2. yarn add yoman-generator
3. 创建文件夹: generators/app/index.js  (核心入口)
4. 将 vue 模板放入 generators/app/templates
5. yarn link (link到全局, 使之成为全局模块包)

6. 新目录下: mkdir mypro
7. cd mypro
7. yo zce-vue
# 创建templates 下的模板文件
```

#### 发布Generator
```
git init等一系列git 操作

yarn publish
yarn publish --registry https://registry.yarnpkg.com

npm i generator-zce-vue
```