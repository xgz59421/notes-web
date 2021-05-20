from django.http import HttpResponse
from django.http import JsonResponse

def productList(req):
  # 向客户端返回html 响应
  # res = HttpResponse('<h3>商品列表</h3>')
  # res['Access-Control-Allow-Origin'] = '*' #跨域
  # res['Server'] = 'zh WebServer'
  # return res

  # 向客户端返回json 响应
  data = {'ename': '露西','age': 18, 'ismarried':False}
  # 此处为自动进行json序列化, 把list/dict 转化为 json 字符串
  res = JsonResponse(data)
  return res

def productDetail(req, pid):
  print(pid)
  res = HttpResponse('商品详情')
  return res