function Emp(ename) {
    this.ename = ename;
}
Emp.prototype.work = function () {
    console.log(`im ${this.ename}`);
}

function Programmer(ename, skill) {
    Emp.call(this, ename);
    this.skill = skill;
}

// Programmer.prototype = new Emp();
Object.setPrototypeOf(Programmer.prototype, Emp.prototype);

var p1 = new Programmer("张三", "js");
console.log(p1);
p1.work();

console.log(p1 instanceof Emp);
console.log(p1 instanceof Programmer);