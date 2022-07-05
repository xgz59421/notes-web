# storybook

#### Jest
```bash
安装:
  yarn add jest @vue/test-utils vue-jest babel-jest -D -W

配置文件: 
  jest.config.js
```

#### Babel
```bash
配置文件:
  babel.config.js

babel的桥接:
  yarn add babel-core@bridge -D -W
```

#### Rollup
```bash
安装: vue@5.1.9 要对应上vue
  yarn add rollup rollup-plugin-terser rollup-plugin-vue@5.1.9 vue-template-compiler -D -W

配置文件: 
  子目录中: rollup.config.js
  根目录中: rollup.config.js (打包所有packages下组件库)

安装: (打包所有)
  yarn add @rollup/plugin-json rollup-plugin-postcss @rollup/plugin-node-resolve -D -W
```

#### build
1. 组件中 package.json
```js
// 设置打包路径
  "main": "dist/cjs/index.js",
  "module": "dist/es/index.js",

// 设置打包命令
  "scripts": {
    "build": "rollup -c",
    // 清理dist (需要安装rimraf)
    // yarn add rimraf -D -W
    "del": "rimraf dist"
  }
// 运行删除所有dist
  yarn workspace run del
// 运行打包
  yarn workspace lg-button(这个是包名) run build
```

2. 根目录 package.json
```js
"scripts": {
  // jest 测试
  "test": "jest", 
  // 运行storybook
  "storybook": "start-storybook -p 6006",
  // 打包storybook
  "build-storybook": "build-storybook",
  // 发布npm
  "lerna": "lerna publish",
  // 打包dist文件 (安装cross-env区分环境)
  "build:prod": "cross-env NODE_ENV=production rollup -c",
  "build:dev": "cross-env NODE_ENV=development rollup -c",
  // 清理 nodemodule文件
  "clean": "lerna clean",
  // 模板
  "plop": "plop"
},
```

#### plop
```
安装: 
  yarn add plop -W -D
运行打包:
  yarn plop
  输入组件名字
```