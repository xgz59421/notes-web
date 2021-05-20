
'''二.字符串类型 str  全局转换函数str()'''
print('字符串类型 str')
print(str(12345))
msg = '''hello world'''
# 获取长度
print('长度:',len(msg))
# 下标
print(msg[0])
# 最后一个字符
print(msg[len(msg)-1])
print(msg[-1])
# 获取指定范围内字符
print(msg[1: 3])
print(msg[1: ])
# 首字母大写
print(msg.capitalize())
print(msg.upper())
print(msg.lower())
print(msg.title())

