
print('序列类型: list() / tuple() / range()')
print('list: 可以修改的有序数组, 全局转换函数 list()')
print('[列表]')

mylist = [80,28,79,99,64]
print(type(mylist))
print(mylist)
print('len:', len(mylist))
print(mylist[0])
print(mylist[-1])
print(mylist[1:4])
print(mylist[1:])   #指定开始到末尾


print(mylist)
print('尾部添加元素')
mylist.append(88)
print(mylist)
print('尾部删除元素')
mylist.pop()
print(mylist)
print('删除指定元素')
del mylist[0]
print(mylist)

