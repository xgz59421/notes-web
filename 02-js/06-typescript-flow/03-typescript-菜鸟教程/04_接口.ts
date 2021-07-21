// 接口: 特殊的类, 要求具体的类必须去实现

console.log('------------类实现接口 implements-----------------');
interface Runnable {
  // 接口中的方法没有主体
  start();
  stop();
}
// 类可以实现接口，使用关键字 implements
class Car1 implements Runnable{
  start() {
    console.log("汽车启动.");
  }
  stop() {
    console.log("汽车停止.");
  }
}
console.log('-----------------------------');

interface IPerson { 
  firstName:string, 
  lastName:string, 
  sayHi: ()=>string 
} 
var customer:IPerson = { 
  firstName:"Tom",
  lastName:"Hanks", 
  sayHi: ():string =>{return "Hi there"} 
} 
console.log("Customer 对象 ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

console.log('------------联合类型和接口-----------------');
interface RunOptions { 
  program:string; 
  commandline:string[]|string|(()=>string); 
} 
// commandline 是字符串
var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  
// commandline 是字符串数组
options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]); 
console.log(options.commandline[1]);  
// commandline 是一个函数表达式
options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
var testfn:any = options.commandline; 
console.log(testfn());

console.log('-------------接口和数组----------------');
interface namelist { 
  [index:number]:string 
} 

var list2:namelist = ["John",'1',"Bran"] 
console.log(list2);

console.log('------------接口继承 单继承-----------------');
// 接口继承 单继承
interface Person { 
  age:number 
} 
interface Musician extends Person { 
  instrument:string 
} 

var drummer = <Musician>{}; 
drummer.age = 27 
drummer.instrument = "Drums" 
console.log("年龄:  "+drummer.age)
console.log("喜欢的乐器:  "+drummer.instrument)

console.log('-------------接口继承 多继承----------------');
// 接口继承 多继承
interface IParent1 { 
  v1:number 
} 
interface IParent2 { 
  v2:number 
} 
interface IChild extends IParent1, IParent2 { } 
var Iobj:IChild = { v1:12, v2:23} 
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)