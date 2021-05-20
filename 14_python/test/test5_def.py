# 创建 getLeepYears(start, end), 返回数组, 包含的闰年
def getLeepYears(start=2000, end=2050):
  years = []
  for year in range(start, end+1):
    result = (year%400==0) or ((year%4==0)and(year%100!=0))
    if result:
      years.append(year)
  return years

leepYeas = getLeepYears(2000,2020)
print(leepYeas)

leepYeas = getLeepYears()
print(leepYeas)

# 创建getPrimeNumbers(start, end), 返回一个数组, 包含指定范围内的所有质数
def getPrimeNumbers(start=2, end=100):
  nums = []
  for n in range(start, end+1, 1):
    i = 2
    while i<n:  
      if n%i == 0:
        break
      i+=1
    if(i>=n):
      nums.append(n)
    
  return nums
print(getPrimeNumbers())