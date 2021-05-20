from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
'''
#路由方法 ---- MTV中的 V(View)
def doLogin(req):
    print('服务器doLogin, 收到一个请求:')
    print(req)
    res = HttpResponse('<h2>welcom, this is login page</h2><hr>')
    return res
def doRegister(req):
    res = HttpResponse('<h2>register success</h2><hr>')
    return res

# 路由词典: 指定每个请求地址, 该由哪个函数来处理
urlpatterns = [
    path('', doLogin),
    # path('admin/', admin.site.urls),
    path('login', doLogin),
    path('register', doRegister),
]
'''
# mydjproject01 路径是 project 的路径 导入其他 app 不需要 ..user
from user.views import userLogin, userRegister
from product.views import productList, productDetail
urlpatterns = [
    # path('', doLogin),
    # path('admin/', admin.site.urls),
    path('user/login', userLogin),
    path('user/register', userRegister),
    path('product/list', productList),
    # 需要int 可以<int:pid>
    path('product/detail/<pid>', productDetail),
]


