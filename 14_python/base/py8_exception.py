# exception
# 输入两个数, 计算商,并输出

n1 = input('请输入被除数: ')
n2 = input('请输入除数: ')
try:
  n1 = int(n1)
  if(n1<0) : 
    # 根据业务逻辑手工抛出错误
    raise Exception('被除数不能小于0')
  n2 = int(n2)
  n3 = n1 / n2
  print('商为', n3)
# except ValueError as err:
#   print('输入的内容非法')
#   print(err)
# except ZeroDivisionError as err:
#   print('输入的内容非法')
#   print(err)
except Exception as err:
  print('输入的内容非法')
  print(err)
finally:
  print('程序运行结束')