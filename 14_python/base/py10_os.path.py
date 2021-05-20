# 使用 python 系统模块-- os.path
import os.path
# python 中没有类似node.js中 __dirname 和 __file

# 获取当前路径(./)对应的-->绝对路径名
print('./的绝对路径:',os.path.abspath('./'))
print('../的绝对路径:',os.path.abspath('../'))
print('../../的绝对路径:',os.path.abspath('../../'))