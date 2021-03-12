tsc -w 打成js 


codeRuner 
"code-runner.runInTerminal": true
报错解决:

在通过vs code 运行webpack进行打包时，报错webpack : 无法加载文件 D:\nodejs\node_global\webpack.ps1，因为在此系统上禁止运行脚本。
解决方案：

以管理员身份运行vs code
执行：get-ExecutionPolicy，显示Restricted，表示状态是禁止的
执行：set-ExecutionPolicy RemoteSigned
这时再执行get-ExecutionPolicy，就显示RemoteSigned
