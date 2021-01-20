// function Emp(ename) {
  //    this.ename = ename;
  // }
  // Emp.prototype.work = function () {
  //    console.log(`im ${this.ename}`);
  // }

  // function Programmer(ename, skill) {
  //    Emp.call(this, ename);
  //    this.skill = skill;
  // }
  // Object.setPrototypeOf(Programmer.prototype, Emp.prototype);

  console.log("---------------es6 class-----------------");
  class Emp {
     constructor(ename, eage) {
        this.ename = ename;
        Object.defineProperty(this, "_eage", {
           writable: true,
           enumerable: false,
           configurable: false
        })
        this.eage = eage;
     }
     get eage() {
        return this._eage;
     }
     set eage(value) {
        console.log(`设置年龄${value}`);

        if (value >= 18 && value <= 65) {
           this._eage = value;
        } else {
           throw Error("年龄必须介于18~65");
        }
     }
     work() {
        console.log(`im ${this.ename}`);
     }

  }

  class Programmer extends Emp {
     constructor(ename, eage, skill) {
        super(ename, eage);
        this.skill = skill;
     }
     work() {
        super.work(); //执行父类的work
        console.log(
          `姓名:${this.ename},年龄 ${this.eage},技能 ${this.skill}`);
     }
     static introduce() {
        console.log(`这是一个员工类`);
     }
  }

  var p1 = new Programmer("张三", 18, "js");
  console.log(p1);
  p1.work();
  // console.log(p1.eage);