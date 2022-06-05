#### Jest API
```js
在测试文件中，Jest 将所有这些方法和对象放入全局环境中。
无需要求或导入任何内容即可使用它们。
如果喜欢显式导入，则可以
import { describe, expect, test } from '@jest/globals'
```

<!-- npx jest 01-api-test.test.js -->

##### Test 函数
```
test 函数别名： it(name, fn, timeout)
```

##### Expect 匹配器
```js
通常需要检查值是否满足某些条件

● https://jestjs.io/docs/using-matchers
● https://jestjs.io/docs/expect
```

##### describe 函数
```
describe 创建一个将几个相关测试组合在一起的块
```

##### 生命周期钩子
```js
● afterAll(fn, timeout)
● afterEach(fn, timeout)
● beforeAll(fn, timeout)
● beforeEach(fn, timeout)
```

##### Jest 对象 
```
Jest 对象自动位于每个测试文件中的范围内。 
jest 对象中的方法有助于创建模拟，并让您控制 Jest 的整体行为。
也可以通过从 import {jest} from '@jest/globals' 导入。

详细内容参考：https://jestjs.io/docs/jest-object。
```