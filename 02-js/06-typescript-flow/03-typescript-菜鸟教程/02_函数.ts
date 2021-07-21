// test1
function add(x: number, y: number): number {
  return x + y;
}
console.log(add(1,2))

// test2
function greet():string { // 返回一个字符串
  return "Hello World" 
} 
// void 无返回值
function caller():void { 
  var msg = greet() // 调用 greet() 函数 
  console.log(msg) 
} 
caller()

// test3
function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}
// let result1 = buildName("Bob");                  // 错误，缺少参数
// let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
let result3 = buildName("Bob", "Adams");         // 正确

// test4 默认参数
function calculate(price:number, rate:number = 0.50) { 
  var discount = price * rate; 
  console.log("计算结果: ",discount); 
} 
calculate(1000) 
calculate(1000,0.30)

// test5 剩余参数
function buildName2(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);

// test5 剩余参数
function addNumbers(...nums:number[]) {  
  var i;   
  var sum:number = 0; 
  
  for(i = 0;i<nums.length;i++) { 
     sum = sum + nums[i]; 
  } 
  console.log("和为：",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)

// test6 箭头函数
var foo = (x:number)=> {    
  x = 10 + x 
  console.log(x)  
} 
foo(100)