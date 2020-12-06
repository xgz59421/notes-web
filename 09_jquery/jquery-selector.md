## jQuery 选择器
1. `ID选择器`   $('#bts')
2. `类选择器`   $('.bts')
3. `元素选择器`   $('div')
4. 通配符选择器   $("*")
5. `复合选择器`   $("#div1, h4") 两种都要有
6. `后代选择器`   $("#div3 span")
7. `子代选择器`   $("#div4>span")
8. `兄弟选择器`   $("li+li") 除了第一个
9. `过滤选择器`   (以":" 或 "[]"开始, )  
    (1) 基本过滤器:  (index由0开始)
    ```css
    $("li:first")
    $("li:last")
    $("li:not(li:eq(3))")
    $("li:even") 
    $("li:odd")
    $("li:eq(1)") :其实是2
    $("li:gt(1)")
    $("li:lt(1)")
    ```
    (2) 内容过滤选择器:
    ```css
    $("button:contains(提交)") 包含指定文本的元素
    $("div:empty") 匹配所有不包含子元素或文本的空元素
    $(".alert:has(.close)")  匹配含有选择器所有匹配的元素
    $(".alert:parent") 匹配含有子元素或者文本的元素
    ```
    (3) 可见性过滤选择器:
    ```css
    $(':hidden') 匹配所有不可见元素,display:none
    $div.is(":visible")  is()返回 bool 
    ```
    (4) 属性过滤选择器:
    ```css
    [attribute] 匹配具有attribute属性的元素
    [attribute = value] 匹配属性==value元素
    [attribute != value] 匹配属性!=value元素
    [attribute ^= value] 匹配属性以某值开始的元素
    [attribute $= value] 匹配属性以某值结尾的元素
    [attribute *= value] 匹配属性以包含某值的元素
    [attributeFilter1][attributeFilter2] 复合属性,满足多个条件
    ```
    ```css
    <li data-name='child'></li>
    $('[data-name]')
    $('[data-name*=child]') 所有data-name=child元素
    ```
10. `子元素过滤选择器` (结果可能会是多个,看父元素)  
    nth-child (index/even/odd||2n/2n-1) css起始位置1开始
    ```css
    $("ul>li:first-child") 查找所有ul下的 第一个li
    $("ul>li:last-child")
    $("ul>li:nth-child(2n)") 偶数
    $("ul>li:nth-child(2)")  第二个
    $("ul>li:only-child").css("background-color", "orange");
    ```
11. `表单属性过滤选择器`
    ```
    :enabled 可用元素
    :disabled 不可用元素
    :checked 被选中元素(单选,多选)
    :selected 选中元素(下拉列表)
    :input (选取所有input textarea select button 元素)
    :text 
    :password
    :radio 
    :checkbox 
    :submit 
    :image 
    :reset 
    ```
