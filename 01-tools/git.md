
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
#### git将一个分支上的代码提交到另一个分支
```
git add . 
git commit
git log (查看提交日志SHA-1 (63ea070b325))
git checkout B (切换到B分支)
git pull
git cherry-pick 63ea070b325
git push
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
# github actions 
```
部署Vue项目
效果查看 https://xgz59421.github.io/vue-plugins-test/

部署过程: 
1. 新建token
  1. github 首页进入 Setting --> Developer settings --> Personal access tokens
  2. 勾选 repo, admin:org, delete_repo
  3. 设置秘钥名字: ACCESS_TOKEN
     保存密钥: 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
2. 设置token
  1. 进入项目https://github.com/xgz59421/vue-plugins-test -->Settings -->Secrets -->Actions secrets
  2. 密钥添加进去, 密钥的名称设置为: ACCESS_TOKEN
3. 设置Action文件
  打开项目的Actin，新建一个yaml文件点击-> set up a workflow yourself，将内容替换为
------------------------------------------------------------------------------
name: Build and Deploy
on: 
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3
        with:
          persist-credentials: false

      - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          yarn
          yarn build
          cp dist/index.html dist/404.html

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          branch: gh-pages
          folder: dist
------------------------------------------------------------------------------
```
