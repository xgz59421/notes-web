# Create your views here.
from django.http import HttpResponse

def userLogin(req):
    print('服务器doLogin, 收到一个请求:')
    print(req)
    # querystring
    print(req.GET)
    #客户端如果没提交uname, 则会抛出错误
    # print(req.GET['uname'])  

    # 第二个参数是默认值
    print(req.GET.get('uname', 'guest'))
    res = HttpResponse('<h2>welcom, this is login page</h2><hr>')
    return res

# print(req.POST.get('uname', 'guest'))
def userRegister(req):
    res = HttpResponse('<h2>register success</h2><hr>')
    return res