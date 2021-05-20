
print('集合类型: set()')
print('set: 元素可以改变的无序数组, 全局转换函数 set()')
print('{集合},无下标,不许重复')

mylist = ['希拉里', '布什', '特朗普', '布什']
myset = set(mylist)
print(type(myset))
print(myset)

myset = {'希拉里', '华盛顿', '特朗普', '布什'}
print(myset)
print('len:', len(myset))
# print(set[0])  set 没有下标
print('add')
myset.add('肯尼迪')
print(myset)
myset.add('布什') #元素不许有重复
print(myset)
print('remove')
myset.remove('希拉里')
print(myset)

