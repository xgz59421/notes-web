/*
  TypeScript 包含的数据类型如下表:
  1. 任意类型 any
  2. 数字类型 number
  3. 字符串类型 string
  4. 布尔类型 boolean
  5. 数组类型 无
  6. 元组 无
  7. 枚举 enum
  8. void void
  9. null null
  10. undefined undefined
  11. never never
*/
// var 变量名 : 类型 = 值;

// 1. any
let test1: any = '';

// 2. number
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d;    // 十六进制

// 3. string
let name1: string = "Runoob";
let years: number = 5;
let words: string = `您好，今年是 ${ name1 } 发布 ${ years + 1} 周年`;
// console.log(words);

// 4. bool
let flag: boolean = true;

// 5. 数组
// 在元素类型后面加上[]
let arr: string[] = ['1', '2'];
// 或者使用数组泛型
let arr2: Array<number> = [1, 2];
// console.log(arr, arr2);

// 6.元组
let x: [string, number];
x = ['Runoob', 1];    // 运行正常
// x = [1, 'Runoob'];    // 报错
// console.log(x[0]);    // 输出 Runoob

// 7. 枚举
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
// console.log(c);    // 输出 2

// 8. void 用于标识方法返回值的类型，表示该方法没有返回值
function fn(): void {
  console.log("Hello Runoob");
}
fn()

// 9. null, 10, undefined
let x1: number;
x1 = 1; // 运行正确
// 严格模式下
x1 = undefined;    // 运行错误
x1 = null;    // 运行错误

// 11.never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值
// 这意味着声明为 never 类型的变量只能被 never 类型所赋值，
// 在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环）
let x2: never;

// 运行错误，数字类型不能转为 never 类型
// x2 = 123;  //报错

function loop(): never {
  while (true) {
    console.log('1');
    
  }
}
// loop()


/*------------类型推断------------*/
var num = 2;    // 类型推断为 number
// num = "12";    // 编译错误
// console.log(num);
