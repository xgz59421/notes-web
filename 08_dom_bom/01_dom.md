## DOM
- [1. dom介绍](#1)
- [2. 查找元素](#2)
- [3. 修改元素](#3)
- [4. 添加/删除元素](#4)
- [5. HTML DOM常用对象](#5)
--------
><h2 id='1'>1. dom介绍</h2>
- `DOM`: Document Object Model 
- `DOM`: 一套专门操作网页内容的对象和函数的集合
- 几乎所有浏览器100%兼容DOM标准。
- `DOM树`: 在内存中，专门保存一个网页中所有内容的树形结构
- `DOM 5件事`: 增删改查+事件绑定 

><h2 id='2'>2. 查找元素</h2>
1. 不需要查找就可直接获得的元素对象
    ```css
    document.documentElement —— <html>
    document.head  —— <head>
    document.body —— <body>
    document.forms[i] —— <form>
    ```
2. 找周围附近的元素对象
    ```css
    a. 父子关系: 4种
      1. 元素的父元素:  元素.parentElement或元素.parentNode
      2. 元素下的所有直接子元素: 元素.children
      3. 元素下的第一个直接子元素: 元素.firstElementChild
      4. 元素下的最后一个直接子元素: 元素.lastElementChild
    b. 兄弟关系: 2种
      1. 元素的前一个兄弟: 元素.previousElementSibling
      2. 元素的后一个兄弟: 元素.nextElementSibling
    ```
3. 按HTML特征查找
    ```css
    a. 按id查找: 
      var 一个元素对象=document.getElementById("id名");
    b. 按标签名name查找: 
      var 类数组对象=任意父元素.getElementsByTagName("标签名")、
    c. 按class名查找: 
      var 类数组对象=任意父元素.getElementsByClassName("class名")
    d. 按name名查找表单元素: 
      var 类数组对象=document.getElementsByName("name名")
    ```
4. 用按选择器查找:
    ```css
    a. 只查找一个符合条件的元素: 
      var 一个元素=任意父元素.querySelector("任意选择器")
    b. 查找多个符合条件的元素: 
      var 类数组对象=任意父元素.querySelectorAll("任意选择器")
    ```
5. 总结: 查找函数的返回值规律:
    ```bash
    #1. 如果原函数返回下标位置, 如果找不到，返回-1
    #2. 如果原函数返回一个数组或一个对象，如果找不到，返回null
    #3. 如果原函数返回类数组对象，如果找不到返回空类数组对象: {length:0 }
    ```

><h2 id='3'>3. 修改元素</h2>
1. 修改内容:
    ```bash
    a. 获取或修改元素的HTML内容: 
      #	元素.innerHTML
    b. 获取或修改元素的纯文本内容: 
      # 元素.textContent
    c. 获取或修改表单元素的值: 
      # 表单元素.value
    ```
2. 修改属性
    ```bash
    a. 字符串类型的HTML标准属性: 
      1. 旧核心DOM:  
        # 元素.getAttribute("属性名");
        # 元素.setAttribute("属性名", "属性值")
        # var bool=元素.hasAttribute("属性名")
        # 元素.removeAttribute("属性名")
        优点: 万能, 缺点: 繁琐
      2. 新HTML DOM: 
        # 元素.属性名
        # 元素.属性名="属性值"
        # 元素.属性名!==""
        # 元素.属性名=""
        优点: 简单, 缺点: 不万能
    b. bool类型的HTML标准属性：
      #1. 不能用旧核心DOM4个函数修改
      #2. 只能用HTML DOM的"元素.属性名"方式获取或修改，且值为bool类型
    c. 自定义扩展属性: 
      1. 何时: 2种
        (1)代替id、class、元素等选择器作为查找触发事件的元素的条件
        (2) 在客户端元素上临时缓存业务数据
      2. HTML中: 
        # <元素 data-自定义属性名="属性值">
      3. js中:（不能用.访问）
        (1) 核心DOM: 
          # var 属性值=元素.getAttribute("data-自定义属性名")
          # 元素.setAttribute("data-自定义属性名","属性值")
        (2) HTML5标准:  
          # 元素.dataset.自定义属性名
    ```
3. 修改样式: 
    ```bash
    a. 修改元素的内联样式: 
      # 元素.style.css属性="属性值"
    b. 获取元素的完整样式: 
      var style=getComputedStyle(元素对象);
      style.css属性
      计算后的样式都是只读的
    c. 修改元素的样式时，都用class: 
      # 元素.className="class名"
    ```

><h2 id='4'>4. 添加/删除元素</h2>
1. 只添加一个新元素:
    ```bash
    a. 创建一个新元素: 
      # var 新元素=document.createElement("标签名")
    b. 为元素设置关键属性: 
      # 新元素.属性名="属性值";
    c. 将新元素添加到DOM树: 3种: 
      1. 末尾追加: 
        # 父元素.appendChild(新元素)
      2. 在某个元素前插入: 
        # 父元素.insertBefore(新元素, 现有元素)
      3. 替换某个元素: 
        # 父元素.replaceChild(新元素, 现有元素)
    ```
2. 优化: 尽量减少操作DOM树的次数: 
    ```bash
    a. 如果同时添加父元素和子元素，应该先将子元素添加到父元素，最后再将父元素一次性添加到DOM树
    b. 如果父元素已经在页面上，要添加多个平级子元素。应该利用文档片段对象
      1. 创建文档片段对象: 
        # var frag=document.createDocumentFragment()
      2. 将子元素添加到文档片段对象中: 
        # frag.appendChild(子元素)
      3. 最后将文档片段对象一次性添加到DOM树上父元素下
        # 父元素.appendChild(frag);
    ```
3. 删除元素: `父元素.removeChild(子元素)`
    ```javascript
    //删除元素本身
    var guideNode = document.getElementsByClassName('guide')[0];
    guideNode.parentNode.removeChild(guideNode);
    ```

><h2 id='5'>5. HTML DOM常用对象</h2>
1. image对象
- `var img=new Image()`
2. table对象
    ```bash
    a. table管着行分组: 
      1. 添加行分组: 
      # var thead=table.createTHead()
      # var tbody=table.createTBody()
      # var tfoot=table.createTFoot()
      2. 删除行分组: 
      # table.deleteTHead(); 
      # table.deleteTFoot()
      3. 获取行分组:
      # table.tHead  
      # table.tFoot  
      # table.tBodies[i]
    b. 行分组管着行: 
      1. 添加行: 
        (1) 任意行插入新行: 
        # var tr=行分组.insertRow(i);
        # ex: var tr = tbody.insertRow();
        (2) 开头插入新行: 
        # var tr=行分组.insertRow(0)
        (3) 末尾追加新行: 
        # var tr=行分组.insertRow()
      2. 删除行: 
        # table.deleteRow(tr.rowIndex)
      3. 获取行: 
        # 行分组.rows[i]
    c. 行管着格: 
      1. 添加格: # var td=tr.insertCell()
      2. 删除格: # tr.deleteCell(i)
      3. 获取格: # tr.cells[i]
    ```
3. form对象
    ``` bash
    a. 获取form元素: # document.forms[i]
    b. 获取form中的表单元素: 
      1. 标准:
        # form.elements[i或id或name名]
      2. 简写: 如果有name属性:
        # form.name名
    c. 让表单元素自动获得焦点: 
        # 表单元素.focus()
    ```
4. select对象
    ```bash
    select对象:
      常用属性:
        # 1. options
        # 2. selectedIndex
        # 3. size
      常用方法:
        # 1. add(option)
        # 2. remove(index)

      事件: # onchange
    Option对象
      创建对象:
        # var o = new Option(text, value)
      常用属性:
        # 1. index
        # 2. text
        # 3. value
        # 4. selected
    ```
