// 分开导出
// export var name = 'foo module'
// export function hello () {
//   console.log('hello')
// }
// export class Person {}

var name = 'foo module'

function hello () {console.log('hello')}

class Person {}

export { name, hello, Person }

// as
export {
  name as default,
  hello as fooHello
}


