print('main1 启动模块开始运行')
# 导入module1 模块
print('------------导入module1 模块---------------')
import py9_module_1  #文件名就是模块名
import py9_module_1 as m1  #每导出的模块都是一个 单例的
m1.printAge()
print(m1.age)


print('------------导入 module1内部的成员---------------')
age = 999
# 导入 module1内部的成员
# import py9_module_1.age 错误写法
from py9_module_1 import printAge, age as m1age
print(age)
print(m1age)
printAge()