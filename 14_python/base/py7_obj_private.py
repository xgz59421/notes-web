#只能在类内部使用的成员 --仿private

class Emp():
  def __init__(self, age):
    self.__age = age
  def printAge(self):
    print(self.__age)
###########类的外部##############
emp1 = Emp(18)
emp1.__age =50    #外部修改 __age  无效的赋值
emp1.printAge()
