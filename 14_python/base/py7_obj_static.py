#类内部的静态成员 --仿static

class Emp():
  location = '中国'   #类属性 - 整个类中只有一份
  def __init__(self, age):
    self.__age = age
  def printAge(self):
    print(self.__age)
###########类的外部##############
emp1 = Emp(18)
emp2 = Emp(19)
print(Emp.location)
print(emp1.location)
print(id(emp1.location))
print(id(emp2.location))