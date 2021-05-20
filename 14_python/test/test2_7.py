# 创建新闻列表 nid, title, pubTime ,追加3条新闻
newslist = []
news1 = {'nid':101, 'title': 'xxa', 'pubTime': 2018}
news2 = {'nid':102, 'title': 'xxb', 'pubTime': 2019}
news3 = {'nid':103, 'title': 'xxc', 'pubTime': 2020}
newslist.append(news1)
newslist.append(news2)
newslist.append(news3)
print(newslist)

for i in range(0, len(newslist), 1):
  print(newslist[i])
  print(newslist[i]['nid'])
  print(newslist[i]['title'])
  print(newslist[i]['pubTime'])
print('for 运行完毕')