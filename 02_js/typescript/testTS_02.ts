// 类访问修饰符的特殊用法  
// 构造函数 代表了 创建变量和 赋值变量
class Emp {
  // protected ename: string;
  // protected salary: number;
  constructor(protected ename: string, protected salary: number){
    // this.ename = ename;
    // this.salary = salary;
  }
}

class Coder extends Emp {
  // private language: string;
  constructor(ename: string, salary: number, private language: string){
    super(ename, salary);
    // this.language = language;
  }
  printInfo(){
    console.log("员工姓名", this.ename);
    console.log("员工技能", this.language);
    
  }
}

let coder = new Coder("tom", 5000, "nodejs");
coder.printInfo();
// coder.ename
// coder.language