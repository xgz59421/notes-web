# while
sum = 0
for n in range(1, 101):
  sum += n
print(sum)

i = 0
sum = 0 
while (i<=100):
  sum += i
  i += 1
print('sum累加和: ', sum)

# 创建 list  输入员工姓名, end 结束输入

emplist = []
while(True):
  ename = input('请输入员工姓名:')
  if(ename == 'end'):
    break
  emplist.append(ename)

print('录入完成')
print(emplist)
# i = 0
# while (i<len(emplist)):
#   print(emplist[i])
#   i += 1
for e in emplist:
  print(e)