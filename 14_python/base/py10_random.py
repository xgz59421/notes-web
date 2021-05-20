
# 使用 python 系统模块-- random
import random
import math

# 生成[0~1)间的随机小数
print('生成[0~1)间的随机小数')
print(random.random())
# print(math.floor(random.random() * 10))

# [1000~10000)
# js-> parseInt(math.random() * (10000-1000) +1000 )
# randrange(start, end, step)
print(random.randrange(1000, 10000, 1))
print(random.randrange(1000, 10000, 100))


# 从数组中随机一个数
list = ['东东', '亮亮', '然然', '涛涛', '花花', '燕燕']
print(random.choice(list))


# 打乱一个数组 (直接修改原始列表)
random.shuffle(list)
print(list)