### 去掉powershell路径
```js
有一个变量：$profile，它保存了当前Profile的路径。
使用`Test-Path $profile`可以查看当前有没有这个文件。
如果没有，可以使用`new-item -path $profile -itemtype file -force`命令来创建它。
然后再使用`notepad $profile`来快捷的打开它来编辑

方案一:  
// PS>
function prompt
{
  Write-Host("PS: $pwd>") 
}
方案二:
// PS>路径
// PS>
function prompt
{
  $host.UI.RawUI.WindowTitle = Get-Location
  'PS> '
}
```
