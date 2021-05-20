# 在shape模块下 导入 Shape类
# from shape import Shape
import math

class Circle():
  def __init__(self, r ):
    # super().__init__()
    self.r = r
  def printSize(self):
    print("面积:",math.pi * self.r * self.r)
  def printPerimeter(self):
    print("周长:",2 * math.pi * self.r)


if(__name__ == "__main__"):
  c1 = Circle(5)
  c1.printSize()
  c1.printSize()
