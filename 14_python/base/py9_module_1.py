print('m1 模块的一个对象创建了...')
#模块内的全局变量就是该模块对象的属性
age = 21 
#模块内的全局变量就是该模块对象的方法
def printAge():
  print('moule1, age:',age)

def add():
  return age + 1



# 启动模块__name__ 为: __main__, 非启动模块(被别人导入): 则为文件名
print('当前模块名称', __name__)
print('__name__变量的类型', type(__name__))

# 测试
if(__name__ == '__main__'):
  result = add()
  print('白盒测试结果: ',result)
else:
  pass

