
print('序列类型: list() / tuple() / range()')
print('tuple: 不可以改变的有序数组, 全局转换函数 tuple()')
print('(元祖)')

mylist = [80,28,79,99,64]
mytuple = tuple(mylist)
print(type(mytuple))
print(mytuple)
mytuple = ('丁丁', '当当', '豆豆', '丫丫')
print(mytuple)
print('len:', len(mytuple))
print('index, 0:', mytuple[0])
print('1:3,:', mytuple[1:3])
# 不可修改的
# mytuple.append('东东')  没有这个属性

