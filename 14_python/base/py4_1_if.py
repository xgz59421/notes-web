# 逻辑结构 if
# 购物 满500 打8折
# sum = 450
sum = 600

if (sum>= 500):
  print('符合满500 打8折')
  sum = sum * 0.8
print(sum)


# 
score = 30000
# score = 1599
if (score>=10000):
  print('黑金用户')
elif (score >=5000):
  print('黄金用户')
elif (score >=1000):
  print('白银用户')
else:
  print('普通用户')
print('程序结束')
