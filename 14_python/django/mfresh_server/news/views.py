from django.http import HttpResponse, JsonResponse
from .models import MfNews
import math
'''
按发布时间逆序返回新闻列表
API地址：	/news/list
处理方法：	newsList( req )
请求方法：	GET
请求参数：	查询字符串：
pageNum-需显示的页号；可选，默认为1
响应结果：	{
    totalRecord: 58,
    pageSize: 10,
    pageCount: 6,
    pageNum: 1,
    data: [{"nid":1,"title":"新闻标题","pubtime":"1234"},{} ... {}]
}
'''
def newsList(req):
  pageNum = req.GET.get('pageNum')
  pageNum = int(pageNum)
  totalRecord = MfNews.objects.count()
  pageSize = 10
  pageCount = math.ceil(totalRecord/pageSize)
  #按发布时间逆序返回新闻列表
  #offset = (pageNum - 1) * pageSize
  #select * from mf_news order by pubtime desc limit offset, pageSize
  result = MfNews.objects.order_by('-pubtime').values('nid','title','pubtime')
  # print(result)
  start = (pageNum - 1) * pageSize
  # end = pageNum * pageSize
  end = start + pageSize
  result = result[start: end]
  print(type(result))
  # TypeError: Object of type QuerySet is not JSON serializable
  # QuerySet 必须转化为list 才能序列化
  result = list(result)
  output = {
    'totalRecord': totalRecord,
    'pageSize': 10,
    'pageCount': pageCount,
    'pageNum': pageNum,
    'data': result
  }
  res = JsonResponse(output)
  res['Access-Control-Allow-Origin'] = '*'
  return res

'''
API地址：	/news/detail
处理方法：	newsDetail( req )
请求方法：	GET
请求参数：	查询字符串：
nid-新闻ID，必需
响应结果：	{
    "nid": 1,
    "title":"新闻标题",
    "pubtime":1234,
    "content":"新闻内容"
}
'''

def newsDetail(req):
  nid = req.GET.get('nid')
  result = MfNews.objects.filter(nid=nid).values('nid','title','pubtime','content')
  print(type(result)) 
  print(result) 
  if len(result) > 0:
    data = result[0]
  else:
    data = {}
  res = JsonResponse(data)
  res['Access-Control-Allow-Origin'] = '*'
  return res

