## redis
```
官网：https://redis.io/
GitHub 仓库：https://github.com/redis/redis
交互式学习 Redis：https://try.redis.io/
Redis 中文网（非官方）：http://www.redis.cn/
Redis 命令参考：http://doc.redisfans.com/
```
### 1. redis简介
#### 1.什么是redis
`Redis 是一个使用 ANSI C 编写的开源、支持网络、基于内存、可选持久性的键值对存储数据库。`
```
Redis 不是简单的 Key-Value 数据库，它还支持数据结构，例如
字符串
哈希
列表
集合
带范围查询的排序集合
位图
超日志
带有半径查询和流的地理空间索引
```
#### 2.内存存储与持久化
`Redis 数据库中所有数据都存储在内存中。相对于磁盘，内存的数据读/写速度要快得多，所以我们通常用 Redis 做缓存数据库`
#### 3.Redis 应用场景
```
Redis是一个 Key-Value 存储系统，大部分情况下是因为其高性能的特性，被当做缓存使用，这里介绍下Redis经常遇到的使用场景。

一个产品的使用场景肯定是需要根据产品的特性，先列举一下 Redis 的特点：
  读写性能优异
  持久化
  数据类型丰富
  单线程
  数据自动过期
  发布订阅
  分布式
```

### 2. Redis 安装
#### 1.关于 Redis 的版本
```
Redis 借鉴了 Linux 操作系统对于版本号的命名规则：
  版本号第二位如果是奇数，则为非稳定版本（例如2.7、2.9、3.1）
  如果是偶数，则为稳定版本（例如2.6、2.8、3.0、3.2）
```
#### 2.macOS 中安装 Redis
```js
在 macOS 中有两种方式：
  方式一：编译安装
  方式二（推荐）：使用 Homebrew 安装
  1、安装 Homebrew
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
  2、通过 Homebrew 安装 Redis
  brew install redis
```
#### 3.在 Windows 中安装 Redis
```
Redis 官方不支持 Windows
尽管如此微软还是发布了一个可以在 Windows 下的 Redis 版本，但是这个项目已经不再维护。
https://github.com/microsoftarchive/redis
```
#### 4.在 Linux 中安装 Redis
```shell
下载 Redis 源码
# wget https://download.redis.io/releases/redis-6.0.9.tar.gz

解压 Redis 压缩包
# tar xzf redis-6.0.9.tar.gz

进入 Redis 源码目录
# cd redis-6.0.9

编译安装
# make
```
### 3. 运行 Redis
#### 1. 添加到环境变量
```shell
现在已编译的二进制文件位于 src 目录中。使用以下命令运行 Redis：
# ./src/redis-server

要将 Redis 二进制文件安装到 /usr/local/bin 中(相当于环境变量)，只需使用：
# make install
```
#### 2. 可执行文件
```shell
编译后在 Redis 源代码目录的 src 文件夹中会有以下几个可执行文件：
redis-server        Redis 服务器
redis-cli           Redis 命令行客户端
redis-benchmark     Redis 性能测试工具
redis-check-aof     AOF 文件修复工具
redis-check-dump    RDB 文件检查工具
redis-sentinel      哨兵模式工具
```
#### 3. 启动 Redis

```shell
我们最常用是 redis-server 和 redis-cli
最简单的，直接运行 redis-server 即可启动 Redis：
# redis-server

Redis 默认使用 6379 端口，我们也可以通过 --port 参数指定启动端口：
# redis-server --port 1234

如果需要在后端运行 Redis：
# redis-server --daemonize yes
```

#### 4. 查看 Redis 运行状态：
`ps -ef | grep -i redis`

#### 5. 停止 Redis
```shell
1. redis-cli shutdown
# 通过进程号停止 Redis
2. kill -9 4684
```

#### 6. 连接 Redis
```shell
# redis-cli

也可以指定服务器地址和端口连接：
# redis-cli -h 127.0.0.1 -p 1234

测试与 Redis 是否连接正常：
# 127.0.0.1:6379> PING
PONG   Redis 返回 PONG，证明连接正常

如果想要断开连接：
  命令：quit
  快捷键：Ctrl + C
```