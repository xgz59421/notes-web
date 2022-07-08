## yeoman

```
├─ 01-generator-sample  创建了一个模板文件
├─ 02-generator-zce-vue 创建了一个模板项目
```

#### 安装
```js
`https://yeoman.io/generators/`

1. 全局范围安装`yo`
// yarn global add yo
// npm i yo -g

2. 安装对应的`generator`
// yarn global add generator-node
// npm i generator-node -g 

3. 通过`yo`运行`generator`
// 创建文件夹 mytest
// yo node
```

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
# 结果: 创建templates 下的模板文件
```

#### 常规使用步骤
```js
1. 明确需求
2. 全局安装适合的Generator
3. 通过Yo 运行 Generator
4. 通过命令行交互填写选项
5. 生成你所需要的项目结构
```

#### Generator基本结构
```
├─ generators/          生成器目录
│  ├─ app/              默认生成器目录
│  │  └─ index.js       默认生成器实现
│  └─ coponent/         其他生成器目录
│     └─ index.js       其他生成器实现
└─ package.json         模块包配置文件
```

#### 发布Generator
```bash
git init等一系列git 操作

yarn publish
# yarn publish --registry https://registry.yarnpkg.com
```
