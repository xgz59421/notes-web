
# git
```bash
# 查看已安装的git版本
  git version 
# 初始化仓库
  git init 
# 配置命令
  git config --global user.name "用户名"
  git config --global user.email "邮箱" 
# 查看配置
  git config -l
# 暂存
  git add 文件名 暂存指定文件
  git add . 暂存所有文件
# 取消所有暂存
  git reset HEAD
# 提交命令
  git commit -m "版本说明"
  git commit --no-verify -m "版本说明"
# 查看git状态
  git status 
# 查看日志
  git log 
  git reflog
# 回滚提交
  git reset --hard b83af4861b3dd232 (SHA) 
# 切到主分支:
  git merge --squash 要合并的分支名字如 dev_zh
# 修改 git 用户名/密码
  windows 凭据  普通凭据 
# 分支
  git branch aa  创建aa分支
  git branch   分支列表
  git checkout aa  切换分支
  git checkout -b aa 创建并切换到aa分支
  git branch -d aa 删除分支

```
# github
```bash
# clone
  git clone 公共仓库地址
  # 只下载最后一次提交记录
  git clone https://github.com/xxx.git --depth=1  
  git clone https://username:password @gitadress
# 推送到来源 
  git push origin 
  git pull origin 拉取
```

# 同步github 和 gitee
```js
.git下的 config 修改如下
[remote "origin"]
  url = https://gitee.com/xgz59421/notes-web.git
  url = https://github.com/xgz59421/notes-web.git

// 第一次提交请使用强行提交，避免抱错
// git push -f origin master
```