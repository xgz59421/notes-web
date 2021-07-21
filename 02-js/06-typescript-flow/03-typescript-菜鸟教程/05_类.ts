class Car { 
  // 字段
  engine:string; 
  // 构造函数
  constructor(engine:string) { 
     this.engine = engine 
  }  
  // 方法
  disp():void { 
     console.log("函数中显示发动机型号  :   "+this.engine) 
  } 
} 
// 创建一个对象
var obj = new Car("XXSY1")
console.log("读取发动机型号 :  "+obj.engine)  
obj.disp()

console.log('---------类的继承--------------------');
class Root { 
  str:string; 
} 

class Child extends Root {} 
class Leaf extends Child {} // 多重继承，继承了 Child 和 Root 类

var leaf = new Leaf(); 
leaf.str ="hello" 
console.log(leaf.str)

console.log('---------继承类的方法重写------------');

class PrinterClass { 
  doPrint():void {
     console.log("父类的 doPrint() 方法。") 
  } 
} 

class StringPrinter extends PrinterClass { 
  doPrint():void { 
     super.doPrint() // 调用父类的函数
     console.log("子类的 doPrint()方法。")
  } 
}
var printer = new StringPrinter();
printer.doPrint()

console.log('---------static 关键字--------------');
class StaticMem {  
  static num:number; 
  
  static disp():void { 
     console.log("num 值为 "+ StaticMem.num) 
  } 
} 

StaticMem.num = 12     // 初始化静态变量
StaticMem.disp()       // 调用静态方法

console.log('---------访问控制修饰符--------------');
// public（默认） : 公有，可以在任何地方被访问。
// protected : 受保护，可以被其自身以及其子类和父类访问。
// private : 私有，只能被其定义所在的类访问
class Encapsulate { 
  str1:string = "hello" 
  private str2:string = "world" 
  protected str3:string = "!" 
}

var e1 = new Encapsulate() 
console.log(e1.str1)     // 可访问 
// console.log(e1.str2)   // 编译错误， str2 是私有的
// console.log(e1.str3)   // 编译错误， str3 是受保护的