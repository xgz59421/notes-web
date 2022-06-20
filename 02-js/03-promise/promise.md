
# promise
- [1. event loop](#1)
- [2. promise](#2)
- [3. generator](#3)
- [4. async await](#4)
- [5. 手写promise](#4)
--------

### <div id='1'>1. event loop 事件循环</div>
```
https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide
在JavaScript中，任务被分为两种:
宏任务: script代码, setTimeout, setInterval, setImmediate(IE)
微任务: promise, await, process.nextTick(node独有), MutationObserver
 
--------------------------主线程-------------------------->
宏任务(script代码)-----> 微任务(Event Queue) -------> 宏任务(Event Queue)

注意:
1. 只有async的函数就是普通函数
2. new promise 是同步的任务，会被放到主进程中去立即执行
```

### <div id='2'>2. promise</div>
```
1. 链式操作 then
2. 捕获异常 catch
3. 处理多个 Promise.all/race
4. 静态方法 Promise.resolve Promise.reject
```

### <div id='3'>3. generator</div>

### <div id='4'>4. async await</div>
```
async await 是 generator生成器的 语法糖
```

### <div id='5'>5. 手写promise</div>
