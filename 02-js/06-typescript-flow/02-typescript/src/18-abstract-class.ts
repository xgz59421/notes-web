// 抽象类

export {} // 确保跟其它示例没有成员冲突

// 抽象类,只能够被继承, 不能够创建实例对象
abstract class Animal {
  eat (food: string): void {
    console.log(`呼噜呼噜的吃: ${food}`)
  }
  // 抽象方法, 不需要方法体, 继承的类必须实现抽象方法
  abstract run (distance: number): void
}

class Dog extends Animal {
  run(distance: number): void {
    console.log('四脚爬行', distance)
  }
}

const d = new Dog()
d.eat('嗯西马')
d.run(100)