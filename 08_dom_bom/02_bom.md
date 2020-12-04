## BOM
- [1. 介绍bom](#1)
- [2. window对象](#2)
- [3. 打开新链接4种方式](#3)
- [4. history](#4)
- [5. location](#5)
- [6. navigator](#6)
- [7. event事件](#6)
--------
><h2 id='1'>1. 介绍bom</h2>
- `BOM`: Browser Object Model
- `BOM`: 专门操作和访问浏览器窗口和软件信息的一组对象和函数
- 只要想获取浏览器软件和窗口相关的信息，都要用BOM
- window  history  location  document  navigator  screen  event
><h2 id='2'>2. window对象</h2>
1. 代替ES标准中的`global`充当全局作用域
2. 包含了所有原生的js对象和函数:` ECMAScript(核心语法)`+`DOM`+`BOM`
3. 获得窗口大小: 
    ```bash
    a. 获得完整窗口大小: 
      # window.outerWidth
      # window.outerHeight
    b. 获得文档显示区大小: 
      # window.innerWidth
      # window.innerHeight
    ```
4. 打开和关闭窗口:   
	`window.open()`  
  `window.close()`
5. 浏览器三大对话框
    ```bash
    1. 输入框: # var 输入的内容=prompt("提示信息");
    2. 警告框: # alert("警告信息");
    3. 确认框: # var bool=confirm("提示信息")
    ```
><h2 id='3'>3. 打开新链接4种方式</h2>
- `<a href="url" target="xxx">`
  ```bash
  1. 在当前窗口打开，可后退
    # a. html: <a href="url" target="_self">
    # b. js: window.open("url", "_self");
  2. 在当前窗口打开，禁止后退
    # a. js: location.replace("新url")
  3. 在新窗口打开，可同时打开多个
    # a. html: <a href="url" target="_blank">
    # b. js: window.open("url", "_blank");
  4. 在新窗口打开，只能打开一个
    # a. html: <a href="url" target="自定义窗口名">
    # b. js: window.open("url", "自定义窗口名")
  ```
><h2 id='4'>4. history</h2>
- 专门保存一个窗口打开后，成功访问过的所有`url的历史记录数组`。
1. 前进: `history.go(n)`
2. 后退: `history.go(-n)`
3. 刷新: `history.go(0)`
><h2 id='5'>5. location</h2>
- 专门保存当前地址栏中的`url信息`，并提供`网页跳转操作`的对象
- `location属性`: location对象可以分段获得url中各个部分的不同属性
  ```css
  1. location.href  获得地址栏中完整的url地址
  2. location.protocol   协议
  3. location.host   主机名+端口号
  4. location.hostname  主机名
  5. location.port   端口号
  6. location.pathname  相对路径
  7. location.search  获得?及其之后的查询字符串参数部分
  8. location.hash    获得#及其之后的锚点地址
  ```
- `location方法`
  ```css
  1. location.replace("新url"): 专门实现在当前窗口打开新连接，并且禁止后退！
    a. 在当前窗口打开新url
    b. 将新url以替换的方式加入history对象中，替换旧url。因为旧url被替换，所以没有后退的余地了！
  2. location.assign("新url"): 也能实现在当前窗口打开新连接，可以后退。等效于window.open("新url","_self");
  3. location.reload(): 刷新 等效于history.go(0);
  ```
><h2 id='6'>6. navigator</h2>
1. navigator: 专门保存浏览器配置信息的对象
    ```bash
    1.查看浏览器的名称和版本号: 
      # navigator.userAgent
    2.查看浏览器中安装的插件列表: 
      # navigator.plugins
    ```
2. 判断浏览器是否安装了某个插件:
    ```bash
    1. 浏览器中安装的所有插件的信息都集中保存在navigator.plugins集合中。
    2. 如何判断浏览器是否安装某个插件？通过插件全名，强行访问
    navigator.plugins["完整插件名称"]!==undefined 说明装了该插件
    ```
    ```html
    if(navigator.plugins["Chrome PDF Viewer"]!==undefined){
      document.write(`
      <h3 style="color:green">已安装PDF插件，可浏览电子书</h3>`)
    }else{
      document.write(`
      <h3 style="color:red">未安装PDF插件，
        <a href="javascript:;">点此下载安装</a>
      </h3>`)
    }
    ```
><h2 id='7'>7. event事件</h2>
 