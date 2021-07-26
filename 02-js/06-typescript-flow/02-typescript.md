
## promise
https://es6.ruanyifeng.com/#docs/decorator

- [1. 运行配置](#1)
- [2. 弱类型/强类型](#2)
- [3. 类型](#3)
- [4. enum](#4)
- [5. 类型断言](#5)
- [6. 接口](#6)
- [7. 类的访问修饰符](#7)
- [8. 类与接口](#8)
- [9. 抽象类](#9)
- [10. 泛型](#10)
- [11. 类型声明](#11)
--------
><h2 id='1'>1. 运行配置</h2>
```js
配置文件
  `yarn tsc --init`
  `yarn tsc 01-getting-started.ts`
编译整个项目(要设置 tsconfig.son)
  `yarn tsc `
  `yarn tsc --local zh-CN 中文错误消息`
`vscode` 
  设置: typescript local 将null改为zh-CN
  `作用域问题` 默认文件中的成员会作为全局成员
    1. (function () {})()
    2. export {} // 也就是把当前文件变成一个模块
```
><h2 id='2'>2. 弱类型/强类型</h2>
```js
`弱类型产生的问题`:
1. 异常需要等到运行时才能发现
  // setTimeout(() => obj.foo(), 1000000)
2. 函数功能可能发生改变
  // sum(100, '100')   // 100100
3. 对象索引器的错误用法
  // obj[true] = 100 // 属性名会自动转换为字符串
`强类型的优势`:
1. 强类型代码错误更早暴露
2. 强类型代码更智能，编码更准确
3. 减少了代码层面的不必要的类型判断
  // if (typeof a !== 'number' || typeof b !== 'number')
```

><h2 id='3'>3. 数据类型</h2>
```js
const a: string = 'foobar'
const b: number = 100 // NaN Infinity
const c: boolean = true // false
// 严格模式下为undefined, 不可null
const e: void = undefined
const f: null = null
const g: undefined = undefined
const h: symbol = Symbol()
const foo: object = function () {} // [] // {}
const arr2: number[] = [1, 2, 3]
const tuple: [number, string] = [18, 'zce']  // 元祖
// 函数类型
function func1 (a: number, b: number = 10, ...rest: number[]): string {
  return 'func1'
}
// 任意类型 
let foo: any = 'string'
```

><h2 id='4'>4. enum</h2>
```js
enum PostStatus {
  Draft,
  Unpublished,
  Published
}
```

><h2 id='5'>5. 类型断言</h2>
```js
const nums = [110, 120, 119, 112]
const num1 = res as number
const num2 = <number>res // JSX 下不能使用
```

><h2 id='6'>6. 接口</h2>
```js
interface Post {
  title: string
  content: string
  subtitle?: string //可有可无
  readonly summary: string  //只读
}
const hello: Post = {
  title: 'Hello TypeScript',
  content: 'A javascript superset',
  summary: 'A javascript'
}
```
><h2 id='7'>7. 接口</h2>
```js
class Person {
  public name: string 
  private age: number
  // 只读成员
  protected readonly gender: boolean //可以在继承中使用
}
```
><h2 id='8'>8. 类与接口</h2>
```js
interface Eat {
  eat (food: string): void
}

interface Run {
  run (distance: number): void
}

class Person implements Eat, Run {
  eat (food: string): void {
    console.log(`优雅的进餐: ${food}`)
  }

  run (distance: number) {
    console.log(`直立行走: ${distance}`)
  }
}
```
><h2 id='9'>9. 抽象类</h2>
```ts
// 抽象类,只能够被继承, 不能够创建实例对象
abstract class Animal {
  eat (food: string): void {
    console.log(`呼噜呼噜的吃: ${food}`)
  }
  // 抽象方法, 不需要方法体, 继承的类必须实现抽象方法
  abstract run (distance: number): void
}

class Dog extends Animal {
  run(distance: number): void {
    console.log('四脚爬行', distance)
  }
}

const d = new Dog()
d.eat('嗯西马')
d.run(100)
```

><h2 id='10'>10. 泛型</h2>
```js
function createArray<T> (length: number, value: T): T[] {
  const arr = Array<T>(length).fill(value)
  return arr
}
const res = createArray<string>(3, 'foo')
```

><h2 id='11'>11. 类型声明</h2>
```js
import { camelCase } from 'lodash'
// 声明函数对应的类型
declare function camelCase (input: string): string
const res = camelCase('hello typed')
```