from django.http import HttpResponse,JsonResponse
from user.models import MfUser
'''
API地址：	/user/login
处理方法：	userLogin( req )
请求方法：	GET
请求参数：	查询字符串：
unameOrPhone-用户名或密码，必需
upwd-密码，必需
响应结果：	{"code":1,"uid":1,"uname":"test","phone":"13012345678"}
或
{"code":400}
'''
def userLogin(req):
  print(req)  
  unameOrPhone = req.GET.get('unameOrPhone')
  upwd = req.GET.get('upwd')
  result = (
    MfUser.objects.filter(uname=unameOrPhone, upwd=upwd) | 
    MfUser.objects.filter(phone=unameOrPhone, upwd=upwd)
  )
  if len(result) > 0:
    user = result[0]
    data = {"code":1,"uid":user.uid,"uname":user.uname,"phone":user.phone}
  else:
    data = {"code":400}
  res = JsonResponse(data)
  res['Access-Control-Allow-Origin'] = '*'
  return res

'''
API地址：	/user/register
处理方法：	userRegister( req )
请求方法：	POST
请求参数：	请求主体(application/x-www-form-urlencoded)：
  uname-用户名，必需
  upwd-密码，必需
  phone-电话号码，必需
响应结果：	{"code":1,"uid":3,"uname":"test"}
或
{"code":500}
'''
def userRegister(req):
  print(req)  
  uname = req.POST.get('uname')
  upwd = req.POST.get('upwd')
  phone = req.POST.get('phone')
  print(uname, upwd, phone)
  u = MfUser.objects.create(uname=uname, upwd=upwd, phone=phone)
  if u:
    data = {'code':200, 'uid':u.uid, 'uname': u.uname}
  else:
    data = {'code':500}
  res = JsonResponse(data)
  res['Access-Control-Allow-Origin'] = '*'
  return res

'''
API地址：	/user/check/uname
处理方法：	userCheckUname( req )
请求方法：	GET
请求参数：	查询字符串：
  uname-用户名，必需
响应结果：	{"code":1,"msg":"exist"}  存在
或
{"code":2,"msg":"non-exist"}  不存在
'''
def userCheckUname(req):
  print(req)  
  uname = req.GET.get('uname')
  result =MfUser.objects.filter(uname=uname).values('uid')
  print(result)
  if len(result)>0:
    data = {"code":1,"msg":"exist"}
  else:
    data = {"code":2,"msg":"non-exist"}
  res = JsonResponse(data)
  res['Access-Control-Allow-Origin'] = '*'
  return res

'''
API地址：	/user/check/phone
处理方法：	userCheckPhone( req )
请求方法：	GET
请求参数：	查询字符串：
  phone-用户名，必需
响应结果：	{"code":1,"msg":"exist"}  存在
或
{"code":2,"msg":"non-exist"}  不存在
'''

def userCheckPhone(req):
  print(req)  
  phone = req.GET.get('phone')
  result = MfUser.objects.filter(phone=phone).values('uid')
  if len(result) > 0:
    data = {"code":1,"msg":"exist"}
  else:
    data = {"code":2,"msg":"non-exist"}
  res = JsonResponse(data)
  res['Access-Control-Allow-Origin'] = '*'
  return res