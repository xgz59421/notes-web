'''
变量的作用域
1. Local: 本地/局部作用域   定义在函数内的
2. Embeded: 嵌入/闭包作用域
3. Global: 全局作用域
4. Build-in: 内置作用域 官方解释器提供的 内部函数或变量
'''
#四种作用域若作用在某个变量下, 其优先级: local > embeded > global> build-in

# 1. Local 
name = 'lucy'
def inner():
  age = 18    #1.Local 局部作用域
  print(age)
  print(name) #2.Global

inner()
print('Global: 全局作用域')
print(name) #2.Global

def outer():
  name = 'jarry' #3. Embeded 嵌入作用域
  def inner():
    print(name)   
  return inner
print('Embeded 嵌入作用域  == 闭包')
f = outer()  #闭包 = 公开一个内部函数 + 该函数必须的上下文环境
f()

print('Build-in: 内置作用域')

# list = 'lucy'
def inner2():
  # list = 18    #1.Local 局部作用域
  print(list)
inner2()


