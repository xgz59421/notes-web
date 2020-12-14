// 接口: 特殊的类, 要求某个class 必须具备 xxx 方法


//要求汽车必须实现 start, stop 方法

interface Runnable {
  // 接口中的方法没有主体
  start();
  stop();
}

class Car implements Runnable{
  start() {
    console.log("汽车启动.");
  }
  stop() {
    console.log("汽车停止.");
  }

}