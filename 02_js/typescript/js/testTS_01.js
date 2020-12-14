// 强类型语言
var User = /** @class */ (function () {
    function User() {
        this.uname = "tom";
    }
    // 返回值: number/any/void...
    User.prototype.f1 = function (n1, n2) {
        this.uname = "jack";
        this.age = 18;
        this.isMarried = true;
        this.userList = ["tom", "jarry", "lily", "lucy"];
        this.job = [1, 2, 3, "j", "q", "k", true];
        console.log("1111");
        // return 22
    };
    return User;
}());
var user1 = new User();
user1.f1("10", 20);
