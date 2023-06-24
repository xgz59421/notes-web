// constructor属性

let cars = ['Saab', 'Volvo', 'BMW']
let string = 'abcd'
let obj = {}
function Student(name, age) {
  this.sname = name
  this.sage = age
}
let stu = new Student('lucy', 18)
log(cars.constructor) // [Function: Array]
log(string.constructor) // [Function: String]
log(obj.constructor) // [Function: Object]
log(Student.constructor) // [Function: Function]
log(stu.constructor) // [Function: Student]

function log(params) {
  console.log(params)
}
