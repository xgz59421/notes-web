## MongoDB

### 一. MongoDB 简介
#### 1. 什么是 MongoDB
```
官方文档：https://www.mongodb.com/
MongoDB 是由 C++ 语言编写的，是一个基于分布式文件存储的开源 NoSQL 数据库系统。
MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。
这会让曾经使用过关系型数据库的人比较容易上手
MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。

MongoDB 的查询功能非常强大
  不仅支持大部分关系型数据库中的单表查询，还支持范围查询、排序、聚合、MapReduce 等
  MongoDB 的查询语法类似于面相对象的程序语言
```
#### 2. MongoDB 有哪些特点
```
文档型数据库
高性能
灵活性
可扩展性
强大的查询语言
优异的性能
高性能：支持使用嵌入数据时，减少系统I/O负担，支持子文档查询
多种查询类型支持，且支持数据聚合查询、文本检索、地址位置查询
高可用、水平扩展：支持副本集与分片
多种存储引擎：WiredTiger , In-Memory
```
#### 3. MongoDB 适用于哪些场景
```c
1、需要处理大量的低价值数据，且对数据处理性能有较高要求

比如，对微博数据的处理就不需要太高的事务性，但是对数据的存取性能有很高的要求，这时就非常适合使用 MongoDB。

2、需要借助缓存层来处理数据

因为 MongoDB 能高效的处理数据，所以非常适合作为缓存层来使用。将 MongoDB 作为持久化缓存层，可以避免底层存储的资源过载。

3、需要高度的伸缩性

对关系型数据库而言，当表的大小达到一定数量级后，其性能会急剧下降。这时可以使用多台 MongoDB 服务器搭建一个集群环境，实现最大程度的扩展，且不影响性能。
```

### 二. 安装 MongoDB
https://www.mongodb.com/try/download/community

```
注意事项

关于 MongoDB 的版本号
  MongoDB 版本形式为 X.Y.Z，例如 4.4.2
  如果 Y 是奇数（例如 4.3），则为开发版，建议开发测试使用
  如果 Y 是偶数（例如 4.4），则为稳定版，建议生产环境使用
从版本 3.2 之后不再支持 32 位操作系统
```
#### 1. Linux 安装 MongoDB
详见官方文档说明：https://docs.mongodb.com/manual/administration/install-on-linux/。
##### 安装
```shell
一、配置 yum 程序包管理系统
创建 /etc/yum.repos.d/mongodb-org-4.4.repo 并写入以下内容：
# [mongodb-org-4.4]
# name=MongoDB Repository
# baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.4/x86_64/
# gpgcheck=1
# enabled=1
# gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc

二、安装 MongoDB
要安装最新的稳定版MongoDB，请发出以下命令：
# sudo yum install -y mongodb-org

或者，要安装特定版本的 MongoDB，请分别指定每个组件包，并将版本号附加到包名中，如以下示例所示：
# sudo yum install -y mongodb-org-4.4.1 mongodb-org-server-4.4.1 mongodb-org-shell-4.4.1 mongodb-org-mongos-4.4.1 mongodb-org-tools-4.4.1

您可以指定任何可用的 MongoDB 版本。但是，当有新版本可用时，yum 会升级软件包。为防止意外升级，请固定版本。要固定软件包，请在 /etc/yum.conf 文件中添加以下 exclude 指令：
# exclude=mongodb-org,mongodb-org-server,mongodb-org-shell,mongodb-org-mongos,mongodb-org-tools

此外还有一点需要说明的是通过 yum 包管理器安装的 MongoDB 会自动创建 MongoDB 服务运行所需的数据目录：
# /var/lib/mongo 数据存储目录
# /var/log/mongodb 日志存储目录
```
##### 管理服务
```shell
1. 启动服务
  # sudo systemctl start mongod

  如果启动mongod时收到与以下类似的错误：
  Failed to start mongod.service: Unit mongod.service not found.
  则执行下面的命令解决：
  # sudo systemctl daemon-reload
  然后再次运行上面的启动命令。

2. 查看启动状态
  # sudo systemctl status mongod
  active 表示运行中
  inactive 表示未运行
  可以选择通过发出以下命令来确保 MongoDB 在系统重新引导后启动：
  # sudo systemctl enable mongod

3. 停止服务
  # sudo systemctl stop mongod

4. 重启服务
  # sudo systemctl restart mongod
```
##### 卸载 MongoDB
```shell
1、停止 MongoDB 服务
  # sudo systemctl stop mongod
2、删除 MongoDB 程序包
  # sudo yum erase $(rpm -qa | grep mongodb-org)
3、删除数据库和日志文件
  # sudo rm -r /var/log/mongodb
  # sudo rm -r /var/lib/mongo
```

#### 2. macOS 安装 MongoDB
```shell
在 macOS 上安装 MongoDB 有两种方式：
  1. 使用 Homebrew 安装 MongoDB
  2. 下载 .tgz 压缩包手动安装
```
##### 使用 homebrew 安装 MongoDB
```shell
1、安装 Command Line Tools for Xcode
2、安装 Homebrew
  # /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
3、添加 MongoDB 安装源到 Homebrew
  # brew tap mongodb/brew
4、使用 homebrew 安装 MongoDB
  # brew install mongodb-community@4.4

该安装除安装必要的二进制文件之外，还会创建运行 MongoDB 服务所需的文件目录：
  MongoDB 配置文件：/usr/local/etc/mongod.conf
  日志文件存储目录：/usr/local/var/log/mongodb
  数据文件存储目录：/usr/local/var/mongodb
```
##### 管理 MongoDB 服务
```shell
1. 启动 MongoDB
启动 MongoDB 并运行在后台。
# brew services start mongodb-community@4.4

或者手动启动 MongoDB，运行在前台。也可以加入 --fork 参数运行在后台。
# mongod --config /usr/local/etc/mongod.conf

2. 查看 MongoDB 服务运行状态
要验证MongoDB是否正在运行，请在正在运行的进程中搜索 mongod：
# ps aux | grep -v grep | grep mongod
还可以通过查看日志文件以查看 mongod 进程的当前状态：/usr/local/var/log/mongodb/mongo.log。

3. 停止 MongoDB
# brew services stop mongodb-community@4.4

4. 卸载 MongoDB
# brew uninstall mongodb-community@4.4
```

#### 3. windows 安装 MongoDB
https://www.mongodb.com/try/download/community
##### 下载msi 直接安装
```
没啥好说的, 下一步下一步
```
##### 下载zip 手动安装
```shell
1、将解压出来的资源文件放到一个稳定的目录中
2、将 MongoDB 安装包中的 bin 目录配置到环境 PATH 变量
3、确认是否配置成功
  # mongod --version
```
##### 启动和停止 MongoDB 数据库服务
```shell
mongod.exe	服务端，用来启动数据库服务的
mongo.exe	客户端，用来连接数据库服务操作数据库
mongod 默认监听 127.0.0.1:27017

# mongod --dbpath="数据存储目录" 
# mongod --dbpath="C:\Program Files\MongoDB"
# mongod 
# mongo 
如果单独执行 mongod，它会默认使用执行 mongod 命令所处磁盘根目录/data/db 作为数据存储目录。
```

### 三. mongo shell
>什么是 mongo Shell
```
mongo Shell 是 MongoDB 官方提供的一个在命令行中用来连接操作 MongoDB 服务的客户端工具
使用 mongo Shell 可以对 MongoDB 数据库进行数据的管理
```
#### 启动 mongo Shell 并连接到 MongoDB
```shell
1. 连接默认端口上的本地 MongoDB 服务
# mongo

2. 连接非默认端口上的本地 MongoDB 服务
# mongo --port 28015

3. 连接远程主机上的 MongoDB 服务
# mongo "mongodb://mongodb0.example.com:28015"
# mongo --host mongodb0.example.com:28015
# mongo --host mongodb0.example.com --port 28015

4. 连接具有身份认证的 MongoDB 服务
# mongo "mongodb://alice@mongodb0.examples.com:28015/?authSource=admin"

# mongo --username alice --password --authenticationDatabase admin --host mongodb0.examples.com --port 28015
```
##### 数据库
```shell
1. 查看数据库列表
# show dbs
2. 查看当前数据库
# db
3. 创建/切换数据库
# use test test为数据库
4. 删除数据库
# db.dropDatabase() 删除当前数据库
```

##### 集合
```shell
1. 创建集合
# db.myNewCollection2.insert( { x: 1 } )
2. 查看集合
# show collections
3. 删除集合
# db.集合名称.drop()
```

### 四. 基础操作（CRUD）
#### 1.创建文档
```js
1. 插入单个文档
db.inventory.insertOne(
   { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
)

2. 插入多个文档
db.inventory.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
   { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
   { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
])

3. db.collection.insert()	将1个或多个文档插入到集合中
// 一般用 方法1, 2 多一些
```
#### 2.查询文档
##### 基本查询
```js
db.collection.find(query, projection)
  query ：可选，使用查询操作符指定查询条件
  projection ：可选，使用投影操作符指定返回的键。查询时返回文档中所有键值， 只需省略该参数即可（默认省略）。
db.collection.findOne()
```
##### 测试数据
```js
db.inventory.insertMany([
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
]);
```
##### 1.查询所有文档
```js
db.inventory.find( {} )

该操作对应于以下SQL语句：
SELECT * FROM inventory
```
##### 2.指定返回的文档字段
```js
db.inventory.find({}, {
	item: 1,
  qty: 1
})
```
##### 3.相等条件查询
```js
db.inventory.find( { status: "D" } )

该操作对应于以下SQL语句：
SELECT * FROM inventory WHERE status = "D"
```
##### 4.指定 AND 条件
```js
检索状态为“ A”且数量小于（$ lt）30的清单集合中的所有文档
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

该操作对应于以下SQL语句：
SELECT * FROM inventory WHERE status = "A" AND qty < 30
```
##### 5.指定 OR 条件
```js
检索状态为 A 或数量小于 $lt30 的集合中的所有文档：
db.inventory.find({
  $or: [
    { status: "A" },
    { qty: { $lt: 30 } }
  ]
})

该操作对应于以下 SQL 语句：
SELECT * FROM inventory WHERE status = "A" OR qty < 30
```

##### 6.指定 AND 和 OR 条件
```js
复合查询文档选择状态为“ A”且qty小于（$ lt）30或item以字符p开头的所有文档：
db.inventory.find({
  status: "A",
  $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
})

该操作对应于以下SQL语句：
SELECT * FROM inventory WHERE status = "A" AND ( qty < 30 OR item LIKE "p%")
```
##### 7.使用查询运算符指定条件
```js
从状态为“ A”或“ D”等于“库存”的清单集中检索所有文档：
db.inventory.find( { status: { $in: [ "A", "D" ] } } )

该操作对应以下 SQL 语句：
SELECT * FROM inventory WHERE status in ("A", "D")
完成的查询运算符参考：https://docs.mongodb.com/manual/reference/operator/query/。
```

##### 8.查询运算符
```js
参考：https://docs.mongodb.com/manual/reference/operator/query-comparison/
比较运算符：
  $eq	匹配等于指定值的值。
  $gt	匹配大于指定值的值。
  $gte	匹配大于或等于指定值的值。
  $in	匹配数组中指定的任何值。
  $lt	匹配小于指定值的值。
  $lte	匹配小于或等于指定值的值。
  $ne	匹配所有不等于指定值的值。
  $nin	不匹配数组中指定的任何值。
逻辑运算符：
  $and	将查询子句与逻辑连接，并返回与这两个子句条件匹配的所有文档。
  $not	反转查询表达式的效果，并返回与查询表达式不匹配的文档。
  $nor	用逻辑NOR连接查询子句，返回所有不能匹配这两个子句的文档。
  $or	用逻辑连接查询子句，或返回与任一子句条件匹配的所有文档。
```

##### 9.查询嵌套文档
```js
查询选择字段大小等于文档 {h: 14, w: 21, uom: "cm"} 的所有文档：
db.inventory.find({
  size: { h: 14, w: 21, uom: "cm" }
})

查询与库存收集中的任何文档都不匹配：
db.inventory.find({
  size: { w: 21, h: 14, uom: "cm" }
})

选择嵌套在 size 字段中的 uom 字段等于 "in"  的所有文档：
db.inventory.find({
  "size.uom": "in"
})

查询在 size 字段中嵌入的字段 h 上使用小于运算符 $lt
db.inventory.find({
  "size.h": { $lt: 15 }
})

查询选择嵌套字段 h 小于 15，嵌套字段 uom 等于 "in"，状态字段等于 "D" 的所有文档： 
db.inventory.find({
  "size.h": { $lt: 15 },
  "size.uom": "in",
  status: "D"
})
```

##### 10.查询数组
测试数据：
```js
db.inventory.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ] },
   { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ] },
   { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ] },
   { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
   { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ] }
]);
```
```js
查询所有文档
db.inventory.find({
  tags: ["red", "blank"]
})

相反，如果您希望找到一个同时包含元素 "red" 和 "blank" 的数组，而不考虑顺序或该数组中的其他元素，请使用 $all 运算符：
db.inventory.find({
  tags: { $all: ["red", "blank"] }
})

查询所有文档，其中 tag 是一个包含字符串 "red" 作为其元素之一的数组：
db.inventory.find({
  tags: "red"
})

查询数组 dim_cm 包含至少一个值大于 25 的元素的所有文档。
db.inventory.find({
  dim_cm: { $gt: 25 }
})

一个元素可以满足大于 15 的条件，而另一个元素可以满足小于 20 的条件；或者单个元素可以满足以下两个条件：
db.inventory.find( { dim_cm: { $gt: 15, $lt: 20 } } )

查询在 dim_cm 数组中包含至少一个同时 大于22  和 小于30 的元素的文档：
db.inventory.find({
  dim_cm: { $elemMatch: { $gt: 22, $lt: 30 } }
})

查询数组 dim_cm 中第二个元素大于 25 的所有文档：
db.inventory.find( { "dim_cm.1": { $gt: 25 } } )

以下选择数组标签具有3个元素的文档。
db.inventory.find( { "tags": { $size: 3 } } )

```
```js
查询嵌入文档的数组测试数据：
db.inventory.insertMany( [
   { item: "journal", instock: [ { warehouse: "A", qty: 5 }, { warehouse: "C", qty: 15 } ] },
   { item: "notebook", instock: [ { warehouse: "C", qty: 5 } ] },
   { item: "paper", instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 15 } ] },
   { item: "planner", instock: [ { warehouse: "A", qty: 40 }, { warehouse: "B", qty: 5 } ] },
   { item: "postcard", instock: [ { warehouse: "B", qty: 15 }, { warehouse: "C", qty: 35 } ] }
]);
```
```js
选择库存数组中的元素与指定文档匹配的所有文档：
db.inventory.find({
  "instock": { warehouse: "A", qty: 5 }
})

查询与库存收集中的任何文档都不匹配：
db.inventory.find({
  "instock": { qty: 5, warehouse: "A" }
})

选择所有库存数组中包含至少一个嵌入式文档的嵌入式文档，这些嵌入式文档包含值小于或等于20的字段qty：
db.inventory.find( { 'instock.qty': { $lte: 20 } } )

选择所有库存文件，其中库存数组的第一个元素是包含值小于或等于20的字段qty的文档： 
db.inventory.find( { 'instock.0.qty': { $lte: 20 } } )
```

#### 3.更新文档
```js
更新操作会修改集合中的现有文档。 MongoDB 提供了以下方法来更新集合的文档：

db.collection.updateOne(<filter>, <update>, <options>)
db.collection.updateMany(<filter>, <update>, <options>)
db.collection.replaceOne(<filter>, <update>, <options>)
```
测试数据：
```js
db.inventory.insertMany( [
   { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" },
   { item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
   { item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" }
] );
```
##### 更新单个文档
```js
在清单集合上使用 db.collection.updateOne() 方法更新项目等于 paper 的第一个文档：
db.inventory.updateOne(
   { item: "paper" },
   {
     $set: { "size.uom": "cm", status: "P" },
     $currentDate: { lastModified: true }
   }
)
```
##### 更新多个文档
```js
以下示例在清单集合上使用 db.collection.updateMany() 方法来更新数量小于50的所有文档：
db.inventory.updateMany(
   { "qty": { $lt: 50 } },
   {
     $set: { "size.uom": "in", status: "P" },
     $currentDate: { lastModified: true }
   }
)
```
##### 替换文档
```js
替换了清单集合中项目 "paper" 的第一个文档：
db.inventory.replaceOne(
   { item: "paper" },
   { item: "paper", instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 40 } ] }
)
```

#### 4.删除文档
```js
删除操作从集合中删除文档。 MongoDB 提供了以下删除集合文档的方法：
db.collection.deleteMany()
db.collection.deleteOne()
```
```js
测试数据：
db.inventory.insertMany( [
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
] );
```
##### 删除所有文档
```js
从清单收集中删除所有文档： 
db.inventory.deleteMany({})
```
##### 删除所有符合条件的文档
```js
从状态字段等于“ A”的清单集合中删除所有文档：
db.inventory.deleteMany({ status : "A" })
```
##### 仅删除1个符合条件的文档
```js
删除状态为“ D”的第一个文档：
db.inventory.deleteOne( { status: "D" } )
```

### 五. 在 Node.js 中操作 MongoDB
###### 参考：
- 在服务端操作 MongoDB：https://docs.mongodb.com/drivers/
- 在 Node.js 中操作 MongoDB：https://docs.mongodb.com/drivers/node/

##### 初始化示例项目
```shell
mkdir node-mongodb-demo

cd node-mongodb-demo

npm init -y

npm install mongodb
```

### 六. 使用 mongoose 操作 MongoDB
```js
npm install mongoose

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, '连接失败：'));
db.once('open', function() {
  // we're connected!
  console.log('连接成功')
});
```

### 七. MongoDB 配置
参考官方配置说明：https://docs.mongodb.com/manual/reference/configuration-options/。

### 八. 聚合 索引
#### 聚合
```js
MongoDB 中聚合(aggregate)主要用于处理数据(诸如统计平均值，求和等)，并返回计算后的数据结果。

聚合操作处理数据记录并返回计算结果。聚合操作将来自多个文档的值分组在一起，并且可以对分组的数据执行各种操作以返回单个结果。

MongoDB提供了三种执行聚合的方法：

aggregation pipeline
map-reduce 函数
单一目的聚合方法
```

#### 索引
```js
索引通常能够极大的提高查询的效率，如果没有索引，MongoDB在读取数据时必须扫描集合中的每个文件并选取那些符合查询条件的记录。
这种扫描全集合的查询效率是非常低的，特别在处理大量的数据时，查询可以要花费几十秒甚至几分钟，这对网站的性能是非常致命的。
索引是特殊的数据结构，索引存储在一个易于遍历读取的数据集合中，索引是对数据库表中一列或多列的值进行排序的一种结构。

索引一般称之为 Index；
合适的索引可以大大提升数据库查询性能；
索引是针对集合层面的；
```

### 九. 可视化管理工具
```
Navicat
官网：http://www.navicat.com.cn/

Robo 3T
官网：https://robomongo.org/
下载地址：https://robomongo.org/download

MongoDB Compass
官网：https://www.mongodb.com/products/compass
下载地址：https://www.mongodb.com/try/download/compass
使用文档：https://docs.mongodb.com/compass/current/
```

