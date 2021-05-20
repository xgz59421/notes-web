
# 使用 python 系统模块-- math
import math

# pi的值 (python没有常量)
# math.pi = 1
print(math.pi)

# 上取整
num = 4.01  
print(math.ceil(num))
# 下取整
num = 4.91  
print(math.floor(num))

# 三角函数
# 2pi = 360 , 1度= pi/180
deg = 30 
print(math.sin(deg * math.pi/180))

# max round min abs  --->全局函数
# random -->独立一个模块
