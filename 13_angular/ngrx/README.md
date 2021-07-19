### 创建精简版本的ng工程
```js
创建项目: 
ng new ngrx --minimal --inlineTemplate false  
npm start --open=true
   1. --open=true 应用构建完成后在浏览器中运行
   2. --hmr=true 开启热更新
   3. hmrWarning=false 禁用热更新警告
   4. --port 更改应用运行端口
创建页面: 
ng g c pages/counter
```

#### 添加 ngrx依赖
```
npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/router-store @ngrx/store-devtools @ngrx/schematics
```

```js
1. 添加 ngrx配置
ng config cli.defaultCollection @ngrx/schematics

2. 创建 Store
ng g store State --root --module app.module.ts --statePath store --stateInterface AppState

3. 创建 Action  counter
ng g action store/actions/counter --skipTests

4. 创建 Reducer
ng g reducer store/reducers/counter --skipTests --reducers=../index.ts

5. 创建 Selector
ng g selector store/selectors/counter --skipTests

6. MetaReducer 相当于中间件

7. Effect 处理异步 执行副作用

8. 使用entity 简化ngrx操作
```