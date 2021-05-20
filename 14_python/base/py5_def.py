'''
def 函数名(形参列表):
  函数体
  return
'''
# 声明函数
def add(n1, n2):
  return (n1 + n2)
# 调用
# 注意: python中 形参和实参的个数 必须一样
result = add(3,6)
# result = add(3)
# result = add(3,4,4)
print(result)

print('-----------------默认参数-----------------')
# 默认参数
def add1(n1=5, n2=10):
  return n1+ n2
result = add1(10)
print(result)
result = add1(10,20)
print(result)
result = add1()
print(result)

print('-----------------可变参数(tuple)-----------------')
# 可变参数
def add2(*nums):
  print(type(nums))
  print(nums)
  sum = 0   
  for i in nums:
    sum += i
  return sum
result = add2(1,2,3,4,5)
print('sum==',result)
result = add2()
print('sum==',result)
result = add2(10)
print('sum==',result)

print('-----------------可变数组加名字(dict)-----------------')
def add3(**money):
  print(type(money))
  print(money)
add3(jan=1000, feb=3000, may=5000)

print('-----------------关键字参数-----------------')
# 关键字参数
def connect(host, port, user, pwd, dbname):
  print('host:', host)
  print('port:', port)
  print('user:', user)
  print('pwd:', pwd)
  print('dbname:', dbname)

connect(port=3306, user='root', pwd=123456,host='127.0.0.1', dbname='xz')
