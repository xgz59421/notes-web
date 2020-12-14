var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类访问修饰符的特殊用法  
// 构造函数 代表了 创建变量和 赋值变量
var Emp = /** @class */ (function () {
    // protected ename: string;
    // protected salary: number;
    function Emp(ename, salary) {
        this.ename = ename;
        this.salary = salary;
        // this.ename = ename;
        // this.salary = salary;
    }
    return Emp;
}());
var Coder = /** @class */ (function (_super) {
    __extends(Coder, _super);
    // private language: string;
    function Coder(ename, salary, language) {
        var _this = _super.call(this, ename, salary) || this;
        _this.language = language;
        return _this;
        // this.language = language;
    }
    Coder.prototype.printInfo = function () {
        console.log("员工姓名", this.ename);
        console.log("员工技能", this.language);
    };
    return Coder;
}(Emp));
var coder = new Coder("tom", 5000, "nodejs");
coder.printInfo();
// coder.ename
// coder.language
