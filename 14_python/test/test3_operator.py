# 从键盘读取用户输入, 判断闰年 被400整除 || 被4整除不能被100整除

year = input('输入一个年份:')
year = int(year)
print(year, type(year))
result = (year%400==0) or ((year%4==0)and(year%100!=0))
print(result)
# if(result):
#   print('闰年')
# else:
#   print('不是闰年')
result = '闰年' if(result) else '不是闰年'
print(result)   
