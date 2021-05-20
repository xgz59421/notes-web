
print('序列类型: list() / tuple() / range()')
print('range: 元素是规律的数字数组, 全局转换函数 range()')
print('如1/2/3/4/5, 2/4/6/8')
print('python中没有经典的 for循环, 用 range代替')
rg = range(10) #0123456789
print(type(rg))
print(rg)
rg = range(5,10) #56789
print(rg)
rg = range(5,20, 2)  #579... 2表示步长
print(rg)
