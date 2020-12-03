### 列表 
------

1. 列表的作用  
  有条理的显示数据  
  现在,无序列表多用于布局  
2. 列表的组成  
  - 列表类型  
    有序列表 `<ol></ol>`  order list  
    无序列表 `<ul></ul>`  unorder list
  - 列表项 `<li></li>` list item
3. 有序列表ol属性  
  start="4" 指定编号的起始位置  
  type="A" 指定编号的type的值有:  
    - 1 (默认)  
    - A/a  
    - I/i  
    ```html
    <ol start="4" type="i">
      <li>把冰箱门打开</li>
      <li>把大象装里</li>
      <li>把冰箱门观赏</li>
    </ol>  
    ```
4. 无序列表ul属性  
  type="disc"  
    - disc 实心圆 (默认)
    - circle 空心圆
    - square 实心方块
    - none 没有标识
    ```html
    <ul type="disc">
      <li>狼叔</li>
      <li>死侍</li>
      <li>快银</li>
      <li>蜘蛛侠</li>
      <li>猩红女巫</li>
     </ul>
     ```
5. 列表的嵌套  
  所有的嵌套,都必须放在li中    
    ```html
    <ul>
      <li>
        <a href="">美国的超级英雄</a>
        <ul type="disc">
            <li>狼叔</li>
            <li>死侍</li>
        </ul>
      </li>
      <li>
        <a href="">日本的超级英雄</a>
        <ol>
            <li>阿童木</li>
            <li>阿拉蕾</li>
            <li>柯南</li>
        </ol>
      </li>
      <li>
        <a href="">中国的超级英雄</a>
        <ul>
            <li> <u>孙悟空</u> </li>
            <li>猪八戒</li>
            <li>唐僧</li>
        </ul>
      </li>
    </ul>
    ```
6. 定义列表   
  定义列表常用于给出一类事物或对名词的解释说明
  ```html
  <dl>
    <dt>走路能减肥</dt>
    <dd>有一个人,经常走,减肥了</dd>
  </dl>
  ```