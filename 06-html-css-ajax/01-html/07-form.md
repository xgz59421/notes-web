### 表单 form
><h2 id='0'></h2> 
- [1. form](#1)
- [2. input](#2)
- [3. textarea](#3)
- [4. select下拉框](#4)
- [5. label,fieldset,iframe](#5)
- [6. h5 input](#6)
------

 
><h2 id='1'></h2> 
## 1. form
 `<form action='' method='' enctype=''></form>`  
 在网页上不可见,可以自动收集整理数据,并发送请求
- action='url' 发送的动作（提交的接口）
   ``` 
   如果action没有值，默认提交给本页面  
   ```
- method='' 提交请求的方法
   ```   
   *get方法: 向服务器要数据的时候使用
      明文提交，参数在查询字符串中显示  
      提交的数据有大小限制，最大2kb
   *post方法: 向服务器发送数据的时候使用
      隐式提交，参数在formdata中(请求主体)
      提交的数据没有大小限制
   *其他请求方法  delete put option
   ```
- enctype='' 设置表单数据的编码方式
   ```
   设置表单允许将什么样的格式的数据，传递给服务器
   如果格式不正确，传递不过去
   取值:
      application/x-www-form-urlencoded   默认值
            允许提交任意字符给服务器
      text/plain   允许提交普通字符给服务器  （&  = 等符号不能传递）
      multipart/form-data 允许提交文件给服务器
   ```
   ```html
   <form action="">
    <input type="text" name="uname"><br>
    <input type="text" name="upwd"><br>
    <input type="submit">
   </form>
   ```
   [返回顶部](#0)
><h2 id='2'></h2> 
## 2. input
1. `<input> 或者 <input/>`  
   `type=""` 指定input控件的类型  
   `name=""`   
   1. form表单自动收集整理数据，只会收集有name属性的元素  
   2. 后台接收数据，会和前台的name属性值匹配  
     ```
     但是，使用ajax的时候，多数情况不需要name属性
     多选框和单选框是需要使用name属性来分组的
     ```
   `value=""`   
   1. 使用用户填入的值，也就是我们要传递的数据  
   2. 特殊情况，对于所有的按钮，value是按钮上显示id文本

   `disabled`或 `disable="disable"`   
   1. 禁用的，无值属性
   2. 不能选中，不能修改值, 不能提交
2. 文本框和密码框   
   `type="text"` 文本框    
   - 所有input的默认值。不写type，或者type值写错，都是文本框  

   `type="password"` 密码框   
   `maxlength=""` 设置输入的最大字符数  
   `readonly`  不能修改值,可以提交  
   `placeholder=""` 占位提示符
3. 按钮  
   `type="submit"` 提交按钮  form中生效的提交按钮  
   `type="button"` 普通按钮  通常用来配合事件，调用js代码  
   `type="reset"` 重置按钮   把当前form表单内容恢复到初始状态  
   `value` 是设置按钮上的文本  
   `<button></button>` h5新标签 功能为提交 submit 
   ```html
   <form action="">
      <input type="text" name="uname" placeholder="请输入用户名"><br>
      <input type="password" name="upwd" maxlength="6"><br>
      <input disabled type="text" name="sex" value="男"><br>
      <input readonly type="text" name="home" value="辽宁"><br>
      <input type="submit" value="点我提交">
      <input type="reset" value="重置">
      <input type="button" onclick="fn()" value="点击"> <br>
      <button onclick="fn()">button点击</button>
      <script>
         function fn() {
            alert("点击111111")
         }
      </script>
   </form>
   ```
4. 单选按钮和复选按钮  
   `type="radio"` 单选  
   `type="checkbox"` 多选  
   `name` 属性，这里除了提供收集信息和提交的名称以外  
               还有分组的功能  
   `value` 属性，必须有value属性，不然提交的就是on  
   `checked` 属性，默认选中, 无值属性  
   ```html
   <form action="">
      <input type="radio" name="gender" value="man" checked>男
      <input type="radio" name="gender" value="woman">女
      <input type="radio" name="gender" value="none">保密 <br>
      <input type="checkbox" name="hobby" value="1" checked>吃
      <input type="checkbox" name="hobby" value="2" checked>喝
      <input type="checkbox" name="hobby" value="3">玩
      <input type="checkbox" name="hobby" value="4">乐 <br>
      <button>点击</button>
   </form>
   ``` 
5. 隐藏域 `type="hidden"`  
   数据需要提交给服务器，但是又不想让用户看到
   ```html
   <form action="">
      <input type="hidden" name="pid" value="jd_10233754">
      <button>提交</button>
   </form>
   ```
6. 上传文件 `type="file"`   
   属性:`multiple`  多选 
   ```
   提交方法  
   `method="post" `
   `enctype="multipart/form-data"`  
   ```
   ```html
   example:
   <form action="" method="post" enctype="multipart/form-data">
      <input type="file" name="pic" multiple>
      <button>提交</button>
   </form>
   ```
   [返回顶部](#0)
><h2 id='3'></h2>
## 3.多文本域 textare 
   ```
   看作一个比较大的<input>
   设置col有bug。而且灵活度太高，所有项目中不用！
   ```
   ```html
   <form action="">
      <textarea name="" id="" cols="30" rows="10">
      </textarea>
      <button>提交</button>
   </form>
   ```
   [返回顶部](#0)
><h2 id='4'></h2>
## 4.下拉选择框 select>option
   ```
   当option没有value属性时，select提交的value是选中的option的内容区域
   当option有value属性时，select提交的value是选中的option的value值
   ```
   `size="3"`  
      默认值为1，下拉选择框  
      取值大于1，变成滚动选择框  
   `multiple` 无值属性，变为多选  
    `selected`  默认选中  无值属性
   ```html
   <form action="">
      <select name="cai" multiple size="3">
         <option value="0">土豆丝</option>
         <option value="1">豆角丝</option>
         <option value="2">茄子丝</option>
         <option value="3" selected>锅包肉</option>
         <option>鸡蛋汤</option>
      </select>
      <button>提交</button>
   </form>
   ```
[返回顶部](#0)
><h2 id='5'></h2>
## 5.label,fieldset,iframe
1. label标签  
 `<label></label>`  
作用：  
   1.在form表单中可以替代span，不强制  
   2.label可以和表单元素做关联  
属性 `for="要绑定的input的id值"`
   ```html
   <form action="">
      <input id="auto" type="checkbox">
      <label for="auto">请点点我</label>
   </form>
   ```
2. `控件分组 <fieldset></fieldset>`
   ```html
   <form action="">
      <fieldset>
         <legend>用户基本信息</legend>
         姓名:<input type="text" name="uname"><br>
         密码:<input type="text" name="upwd"><br>
      </fieldset>
   </form>
   ```
3. `浮动框架<iframe></iframe>`  
   跟form没有任何关系  
   在一个html文件中，导入其他的html文件  
   `<iframe ></iframe>`  
   ```javascript
   src="00_home.html"  引用资源的路径
   width="100%"  宽度
   height="200px"  高度
   frameborder="0"  边框宽度 0为去除边框
   scrolling="no"  去除滚动条
   ```
   ```html
   <iframe src="test/html6_form_test.html" 
      frameborder="0" width="100%" height="100" scrolling="no">
   </iframe>
   ```  
[返回顶部](#0)  
><h2 id='6'></h2>
## 6. h5 input  
1. 邮箱控件 `<input type="email" name="email">` 提交的时候,做邮箱格式验证,必须有@,@前后必须有内容
2. 搜索类型 `<input type="search">` 有快速删除的小叉子
3. url类型 `<input type="url">`  提交时，验证开头是不是http:
4. 电话号码类型 `type="tel` 移动设备弹出数字虚拟键盘  
5. 数字类型 `<input type="number" name="num">`  
属性:  
max="20" 最大值   
min="10" 最小值  
step="3"  步长
6. 范围类型 `<input type="range" name="fw">`  
属性:   
max="20"   
min="10"   
step="3"  
7. 颜色类型 `<input type="color" name="color">`
8. 日期类型 `<input type="date" name="date">`
9. 月份类型 `<input type="month" name="month">`
10. 星期类型 `<input type="week" name="week">`
```html
 <form action="">
   <input type="email" name="email">email <br>
   <input type="search" name="search">search <br>
   <input type="url" name="url">url <br>
   <input type="tel" name="tel">tel <br>
   <input type="number" name="number" max="30" min="10" step="2">number <br>
   <input type="range" name="range" max="50" min="1" step="2">range <br>
   <input type="color" name="color">color <br>
   <input type="date" name="date">date <br>
   <input type="month" name="month">month <br>
   <input type="week" name="week">week <br>
   <button>提交</button>
</form>
```






