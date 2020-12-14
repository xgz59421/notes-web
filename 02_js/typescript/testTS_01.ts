// 强类型语言
class User{
  uname = "tom"
  age:number 
  // isMarried: boolean
  isMarried: any
  userList: string[]
  job: any[]

  // 返回值: number/any/void...
  f1(n1:string, n2:number): void{
    this.uname = "jack";
    this.age = 18;
    this.isMarried = true;
    this.userList = ["tom", "jarry", "lily", "lucy"]
    this.job = [1,2,3,"j", "q", "k", true]
    console.log("1111");
    
    // return 22
  }
}

var user1 = new User();
user1.f1("10", 20);