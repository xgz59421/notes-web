# for
sum = 0
for n in range(1, 101):
  sum += n
print(sum)

emplist = ['tom', 'lucy', 'lily']
for e in emplist:
  print(e)

# 输出99乘法表
print('for输出99乘法表:')
for row in range(1, 10, 1):
  for col in range(1, row+1):
    print(row, '*', col, '=', row*col, sep='', end=' ')
  print()

row = 1
while row<10: 
  col =1
  while col<=row:
    print(row , '*' , col , '=' , row*col, sep= '', end=' ')
    col += 1
  print()
  row += 1
