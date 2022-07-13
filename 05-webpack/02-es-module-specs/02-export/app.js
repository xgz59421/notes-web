import { name, hello, Person } from './module.js'
console.log(name)
console.log(hello)
console.log(Person)

console.log('-------as别名--------');
import { default as fooName, fooHello } from './module.js'
console.log(fooName)
console.log(fooHello)