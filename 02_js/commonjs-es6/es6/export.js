// export.js

//特点: 可以导出多个值
//写法特别多

// 代码规范: + - * / = 这些运算符左右带空格
// 逗号, 右侧带空格 左侧不带

//导出1个变量 m
export var m = 3 

//导出1个函数
export function add(n1, n2){
  return n1 + n2
}

//导出1个类
export class Stu{
  show(){
    return '文华老师最帅了!'
  }
}
//向外导出了3个值