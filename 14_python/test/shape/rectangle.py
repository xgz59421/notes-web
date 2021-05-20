print('rectangle 模块被创建了')

w = 10
h = 5

def printSize():
  print('面积: ', w * h)

def printPerimeter():
  print('周长: ', 2 * (w + h))

if(__name__ == '__main__'):
  print('自测代码')
  printSize()
  printPerimeter()