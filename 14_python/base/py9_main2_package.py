print('main2 启动模块开始运行')
# 导入包(user)下的模块
print('----------------导入包(user)下的模块---------------')
import user.login
import user.register as ur

print('login uname: ', user.login.uname)
print('register uname: ', ur.uname)

# 导入包下模块中的成员
print('----------------导入包下模块中的成员---------------')
from user.login import uname, upwd

print('login uname: ', uname)