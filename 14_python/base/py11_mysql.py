# 使用第三方模块连接mysql 数据库
# cmd: pip install mysql-connector-python 
# 如果没有文档 跳到第三方开发者 查看  homepage

import mysql.connector
# 连接到指定的mysql 服务器
cnx = mysql.connector.connect(
  user='root', 
  password='',
  host='127.0.0.1',
  port='3306',
  database='xz'
)
print(type(cnx))
print(cnx)
cnx.close()