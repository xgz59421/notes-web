
# 数据类型
'''
int
str
bool
list
tuple
range
set
dict
'''
print('数字类型')
#1. int 支持无限长度的整数  int()
num = 1234567890123456789012345678901
print(num)

num = 1.5
print(int(num))

# num2 = '1.9' 
# print(int(num2))  不合法
num3 ='5' 
print(int(num3))
# num4 = '5a'
# print(int(num4)) 不合法

# 2. float float('str/int/bool')
# 3. complex:复数(有实部和虚部的数)
# 4. bool : 特殊的int  True==1 False==0, 有全局函数bool()
isOnline = True
print(type(isOnline))
print(isOnline +2)
