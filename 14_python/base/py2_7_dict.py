
print('映射类型: dict()')
print('dict: 元素可以改变的无序数组, 全局转换函数 dict()')
print('{词典}, 下标是字符串')

mydict = {
  'ename': 'tom',
  'age': 28,
  'ismarried': True
}
print(type(mydict))
print(mydict)
print('len:', len(mydict))
print(mydict['ename'])
# 修改
mydict['ename'] = 'jarry'
print(mydict)
# 删除
del mydict['ename'] 
print(mydict)
# 添加
mydict['salary'] = 5000 
print(mydict)


