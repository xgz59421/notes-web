// 模拟实现
jest.mock('./03.foo.js')
import foo from "./03.foo"

foo.mockImplementation(() => 42)
// 不执行导出的foo函数, 而是,模拟函数 得出结果42

test('mock Implementation', () => { 
  expect(foo()).toBe(42)
 })