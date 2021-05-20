
from django.contrib import admin
from django.urls import path
# import user
from user.views import userLogin, userRegister, userCheckUname, userCheckPhone
import news.views

##########测试路由处理函数##############
from django.http import HttpResponse,JsonResponse
from user.models import MfUser
def testInsert(req):
    # print(MfUser.objects)
    # MfUser.objects 是ORM框架提供的数据库操作映射对象
    user = MfUser.objects.create(uname='lucy', upwd='123456', phone='13111112222')
    print(type(user))
    print(user)
    print(user.uid, user.uname, user.upwd, user.phone)
    res = HttpResponse('testInsert:')
    return res
def testDelete(req):
    res = HttpResponse('testDelete:')
    t = MfUser.objects.filter(uid=6).delete()
    print(type(t))
    print(t)
    return res
def testUpdate(req):
    res = HttpResponse('testUpdate:')
    n = MfUser.objects.filter(uid=7).update(uname='lily',upwd='654321')
    print(type(n))
    print(n)
    return res
def testSelectOne(req):
    # select *...
    # s = MfUser.objects.filter(uid=7).values()
    s = MfUser.objects.filter(uid=7).values('uid', 'uname', 'upwd')
    print(type(s))
    print(s)
    res = JsonResponse(s[0])
    return res
def testSelectAll(req):
    res = HttpResponse('testSelectAll:')
    s = MfUser.objects.values('uid', 'uname', 'upwd')
    print(type(s))
    print(s)
    return res
######################################

urlpatterns = [
    path('test/insert', testInsert),
    path('test/delete', testDelete),
    path('test/update', testUpdate),
    path('test/select/one', testSelectOne),
    path('test/select/all', testSelectAll),

    # path('user/login', user.views.userLogin),
    # path('user/register', user.views.userRegister),
    # path('user/check/uname', user.views.userCheckUname),
    # path('user/check/phone', user.views.userCheckPhone),
    
    path('user/login', userLogin),
    path('user/register', userRegister),
    path('user/check/uname', userCheckUname),
    path('user/check/phone', userCheckPhone),

    path('news/list', news.views.newsList),
    path('news/detail', news.views.newsDetail),
]
