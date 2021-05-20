# python 中的运算符
# 1.算数运算符 + - * / % //
print('1.算数运算符')
print(13/5)
print(13%5)
print(13//5)  #不要余数 只要整除的商


# 2.比较运算符 > >= < <= == !=
# 没有=== !== 如果判断两个变量内存是否一样 用id() 运算符即可
print('2.比较运算符')

# 3.逻辑运算符 and or not
# 4.三目运算符 用if else 代替
# 5.位运算符 & | ^ ~ << >>
# 6.赋值运算符 = += -= /= *= %= //=
# 7.特殊运算符 id(x)  is not
# id(x)内存地址
# is not 判断两个对象是否是同一个
x = 10
y = 10
print(id(x))   #输出变量内存地址
print(id(y))
x = x +1
print(id(x))   #输出变量内存地址
print(id(y))

n1 = 10
n2 = 20
print(n1 is n2)
print(n1 is not n2)