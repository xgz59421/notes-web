# 使用 python 系统模块-- http.client
import http.client
# 发起http 请求

url = '101.96.128.94'
port = 9999
# url = 'www.python.org'
# url = 'www.tmooc.cn'

# 向目标服务器创建连接
conn = http.client.HTTPConnection(url,port)
# 发起get请求
conn.request('GET','/')
# 获取服务器端响应消息
res = conn.getresponse()
print('响应状态码: ',res.status)
print('原因短句: ',res.reason)

# 读取响应主体
body = res.read()
print(body)
