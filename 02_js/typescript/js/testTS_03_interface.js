// 接口: 特殊的类, 要求某个class 必须具备 xxx 方法
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("汽车启动.");
    };
    Car.prototype.stop = function () {
        console.log("汽车停止.");
    };
    return Car;
}());
