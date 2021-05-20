# 1. 面向对象  封装
class Emp():
  def __init__(self, ename, age):
    print('一个Emp对象被构建了')
    self.ename = ename
    self.age = age
  def printInfo(self):
    print('员工姓名: ',self.ename, '员工年龄: ', self.age)

# 创建类的实例
# emp1 = Emp('tom', 20)
# emp2 = Emp('jarry', 21)
# print(emp1.ename,emp1.age)
# print(emp2.ename, emp2.age)
# emp1.printInfo()
# emp2.printInfo()

# 2. 面向对象  继承
# python 允许多继承  class Coder(Emp, Parent1, Parent2..):
class Coder(Emp):   #python 中使用() 表示继承
  def __init__(self, ename, age, language):
    # 调用父类构造方法
    super().__init__(ename, age)
    self.language = language
  
  
# 3. 面向对象  多态: 一个方法, 根据对象不同, 运行多种结果
# 子类重写父类重名方法
  def printInfo(self):
    print('员工姓名: ',self.ename, '员工年龄: ', self.age, '擅长语言: ', self.language)


coder1 = Coder('lucy', 18, 'nodejs')
coder1.printInfo()

emp1 = Emp('lily', 18)
emp1.printInfo()
