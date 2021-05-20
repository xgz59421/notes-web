
# 使用 python 系统模块-- datetime
# import datetime
# print(datetime)
# 导入模块中的成员
from datetime import date
from datetime import time
from datetime import datetime

# 获取当前系统日期时间
dt = datetime.now()
print(type(dt))
print(dt)
# 把日期 格式化
y = dt.year
m = dt.month
d = dt.day
h = dt.hour
m = dt.minute
s = dt.second
print('方法一:')
print(y, '-', m, '-', d, ' ', h, ':', m, ':', s, sep='')
print('方法二:')
print(dt.strftime('%Y-%m-%d %H:%M:%S'))
print(dt.strftime('%Y-%m-%d %X'))

# 日期时间戳
num = dt.timestamp()
print(type(num))
print(num)  #以秒为单位   1596010908.792167
print(int(num* 1000))   #以毫秒为单位的整数 1596010908792

print(datetime.fromtimestamp(0))
print(datetime.fromtimestamp(int(1596010908.792167)))