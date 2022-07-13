import "core-js/stable";
import "regenerator-runtime/runtime"

const title = '前端'
const foo = () => {
  console.log(title)
}

const p1 = new Promise((resolve, reject) => {
  console.log(114)
})
console.log(p1)

foo()

console.log('前端444')

