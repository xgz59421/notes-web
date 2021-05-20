# 使用 python 系统模块-- json
import json
from datetime import datetime

# dict
obj = {
  'name': '豆豆', 
  'age': 18, 
  'isMarried': False, 
  # datetime.now() 不能直接序列化
  'birthday': datetime.now().timestamp()
}
print('------------------dict 原数据-------------------:')
print(type(obj))
print(obj)

print('-----------序列化 json.dumps(obj)---------------:')
# 把对象转换为json字符串 --  序列化
s = json.dumps(obj)    #js --> JSON.stringify(obj)
print(type(s))
print(s)

print('-----------反序列化 json.loads(s)---------------:')
# 把字符串解析为对象 --  反序列化
o = json.loads(s)  #js --> JSON.parse(s)
print(type(o))
print(o)
