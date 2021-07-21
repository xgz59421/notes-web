## Recoil

React 官方推出的状态管理库。[文档](https://recoiljs.org/) [Github](https://github.com/facebookexperimental/Recoil)

目前只有开发预览版，功能还不是十分完备，所以暂时不能用在生产环境中。

### 1. 案例一

需求：定义 textState 全局状态，默认值为空字符串，创建 Input 组件并绑定 textState 状态，状态值随用户输入变化而变化。创建 CharCount 组件, 在组件中显示 textState 状态值的长度。

1. 调用 RecoilRoot 组件，让其成为应用的最外层组件，目的是将让下层组件能够获取到由 Recoil 管理的状态。

   ```js
   import { RecoilRoot } from "recoil"
   
   function App() {
     return (
       <RecoilRoot>
         <Input />
         <CharCount />
       </RecoilRoot>
     )
   }
   ```

2. 创建 textState 全局状态

   atom: 定义全局状态, 它翻译过来叫原子, 即状态的最小单位. 可以多次调用 atom 方法定义全局状态.
   useRecoilState: 获取全局状态, 类似 useState, 返回数组, 数组中包含状态和设置状态的方法.

   ```js
   // atoms/text.js
   import { atom, useRecoilState } from "recoil"
   
   const textState = atom({
     // 值必须唯一
     key: "textState",
     // 状态默认值
     default: ""
   })
   
   export function useTextState() {
     return useRecoilState(textState)
   }
   ```

   ```js
   // Input.js
   import { useTextState } from "./atoms/text"
   
   function Input() {
     const [text, setText] = useTextState()
     return (
       <>
       <input value={text} onChange={e => setText(e.target.value)} />
       <div>{text}</div>
       </>
     )
   }
   
   export default Input
   ```

3. 创建派生状态

   派生状态是指基于现有状态衍生出来的值. 比如获取 textState 状态的长度就属于派生状态.

   selector: 创建派生状态.
   useRecoilValue: 获取状态值, 返回状态值.

   ```js
   // atoms/text.js
   const textCountState = selector({
     key: "textCountState",
     get: ({ get }) => get(textState).length
   })
   
   export function useTextCountValue() {
     return useRecoilValue(textCountState)
   }
   ```

   ```js
   // CharCount.js
   import { useTextCountValue } from "./atoms/text"
   
   function CharCount() {
     const count = useTextCountValue()
     return <div>{count}</div>
   }
   
   export default CharCount
   ```


### 2. 初始状态 Promise

```js
import { atom, useRecoilState } from "recoil"

function loadDefault() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Hello Recoil")
    }, 1000)
  })
}

const testState = atom({
  key: "testState",
  default: loadDefault()
})

function RecoilTest() {
  const [test, setTest] = useRecoilState(testState)
  return <div>{test}</div>
}

export default RecoilTest
```

```js
<Suspense fallback={<div>loading....</div>}>
  <RecoilTest />
</Suspense>
```



