# test obj
# 创建 父类 Shape,
# 属性:fillColor, borderColor, 方法:getSize(), getPerimeter()
# 创建 子类 Circle : r
# 创建 子类 Rectangle: width, height
import math

class Shape():
  def __init__(self, fillColor, borderColor):
    print('创建了Shape构造函数!')
    self.fillColor = fillColor
    self.borderColor = borderColor
  def getSize(self):
    return 0
  def getPerimeter(self):
    return 0

# shape1 = Shape(15, 20)

class Circle(Shape):
  def __init__(self, fillColor, borderColor, r):
    super().__init__(fillColor, borderColor)
    self.r = r
    print('创建了Circle构造函数!')
  def getSize(self):
    return math.pi * self.r * self.r
  def getPerimeter(self):
    return 2 * math.pi * self.r

# circle1 = Circle(1,2,3)
# size = circle1.getSize()
# per = circle1.getPerimeter()
# print(size)
# print(per)

class Rectangle(Shape):
  def __init__(self, fillColor, borderColor, width, height):
    super().__init__(fillColor, borderColor)
    print('Rectangle 构造函数')
    self.width = width
    self.height = height
  def getSize(self):
    return self.width * self.height
  def getPerimeter(self):
    return 2*(self.width + self.height)

r1 = Rectangle(1,1, 5, 2)
print(r1.getSize())
print(r1.getPerimeter())