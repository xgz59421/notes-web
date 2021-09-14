```sql
# 1. 丢弃数据库,如果存在
  DROP  DATABASE  IF  EXISTS  jd;
# 2. 创建新的数据库
  CREATE  DATABASE  jd;
# 3. 进入数据库
  USE  jd;
# 4.创建保存数据的表
  CREATE  TABLE  student(
    sid  INT,
    name  VARCHAR(8),
    sex  VARCHAR(1),
    score  INT
  );
# 5.插入数据
  INSERT  INTO  student  VALUES('1', 'range', 'g', '59');
# 6.修改数据
  UPDATE  user  SET  email='hhh@tedu.cn', isOnline='y'  WHERE  uid='3';
# 7.删除数据
  DELETE  FROM  user  WHERE  uid='2';
```
```sql
#简单查询
# 1.查询特定的列
  (1)查询出所有员工的姓名和性别
  SELECT ename,sex FROM emp;
  (2)查询出所有员工的编号，姓名，生日，工资
  SELECT eid,ename,birthday,salary FROM emp;
# 2.查询所有的列
  SELECT eid,ename,sex,salary,deptId FROM emp;
  SELECT * FROM emp;
# 3.给列起别名 (AS关键字可以省略)
  (1)查询所有员工的姓名和性别，显示汉字别名
  SELECT ename AS 姓名, sex AS 性别 FROM emp;
  (2)查询所有员工的编号，姓名，工资，显示汉字别名
  SELECT eid 编号,ename 姓名,salary 工资 FROM emp;
  (3)查询所有员工的姓名及其工资，使用一个字母作为别名
  SELECT ename e,salary s FROM emp;
# 4.显示不同的记录
  (1)查询出都有哪些性别的员工
  SELECT DISTINCT sex FROM emp;
  (2)查询出员工都分布在哪些部门
  SELECT DISTINCT deptId FROM emp;
# 5.查询时执行计算
  (1)查询出2+3-5*37+4*46.5
  SELECT  2+3-5*37+4*46.5;
  (2)查询出所有员工的姓名及其年薪
  SELECT ename,salary*12 FROM emp;
  (3)假设每个员工工资涨1000，年终奖20000，查询出每个员工的姓名及其年薪，使用汉字别名。
  SELECT ename 姓名,(salary+1000)*12+20000 年薪 FROM emp;
# 6.查询的结果集排序
  (1)查询出所有的部门，查询的结果集按照部门编号升序排列
  SELECT * FROM dept ORDER BY did ASC;   #ascend
  (2)查询出所有的部门，查询的结果集按照部门编号降序排列
  SELECT * FROM dept ORDER BY did DESC;  #descend
  (3)查询出所有的员工，结果集按照工资升序排列
  SELECT * FROM emp ORDER BY salary ASC;
  (4)查询出所有的员工，结果集按照年龄升序排序（生日降序）
  SELECT * FROM emp ORDER BY birthday DESC;
  (5)查询出所有的员工，结果集按照姓名升序排列
  SELECT * FROM emp ORDER BY ename;
  # 按照字符串排序，是按照字符串的首个字符的Unicode码
  # 不加排序规则，默认是按照升序排序
  (6)查询出所有的员工，结果集按照工资的降序排列，如果工资相同按照姓名排序
  SELECT * FROM emp ORDER BY salary DESC,ename;
  (7)查询出所有的员工，所有的女员工显示在前，如果性别相同按照年龄从小到大排序
  SELECT * FROM emp ORDER BY sex,birthday DESC;
# 7.条件查询
  (1)查询出编号为5的员工的所有列
  SELECT * FROM emp WHERE eid=5;
  (2)查询出员工姓名为'然哥'的所有列
  SELECT * FROM emp WHERE ename='然哥';
  (3)查询出20号部门下的员工有哪些
  SELECT * FROM emp WHERE deptId=20;
  (4)查询出所有的女员工有哪些
  SELECT * FROM emp WHERE sex=0;
  (5)查询出工资在7000以上的所有员工
  SELECT * FROM emp WHERE salary>7000;
  # >  <  =   >=  <=  != （不等于）
  (6)查询出不在20号部门下的员工有哪些
  SELECT * FROM emp WHERE deptId!=20;
  (7)查询出没有明确部门的员工有哪些
  SELECT * FROM emp WHERE deptId IS NULL;
  (8)查询出有明确部门的员工有哪些
  SELECT * FROM emp WHERE deptId IS NOT NULL;
  (9)查询出工资在8000以上的女员工有哪些
  SELECT * FROM emp WHERE salary>8000 AND sex=0;
  (10)查询出工资在7000~10000之间员工有哪些
  SELECT * FROM emp WHERE salary>=7000 AND salary<=10000;
  SELECT * FROM emp WHERE salary between 7000 and 10000;
  (11)查询出工资7000以下或者10000以上的员工有哪些  
  SELECT * FROM emp WHERE salary<7000 OR salary>10000;
  SELECT * FROM emp WHERE salary not between 7000 and 10000;
  (12)查询出在1999年出生的员工有哪些
  SELECT * FROM emp WHERE birthday>='1999-1-1' AND birthday<='1999-12-31';
  (13)查询出在10号部门或者20号部门下的员工有哪些
  SELECT * FROM emp WHERE deptId=10 OR deptId=20;
  SELECT * FROM emp WHERE deptId in(10,20);
  (14)查询寻不再10号部门或者20号部门下的员工有哪些
  SELECT * FROM  emp WHERE deptId not in(10,20);
  is null / is not null
  and / or
  between and / not between and
  in() / not in()
# 8.模糊条件查询 (常用于搜索中)
  (1)查询出员工姓名中含有字符'徐'的员工
  SELECT * FROM emp WHERE ename LIKE '%徐%';
  (2)查询出姓名中以'佳'结尾的员工有哪些
  SELECT * FROM emp WHERE ename LIKE '%佳';
  (3)查询出姓名中倒数第2个字符为'佳'的员工有哪些
  SELECT * FROM emp WHERE ename LIKE '%佳_';
  #   % 匹配任意个字符   >=0
  #   _ 匹配任意1个字符  =1
  # 以上两个匹配符必须结合着LIKE使用
# 8.分页查询
  需要有两个已知的条件：当前的页码，每页的数据量
  SELECT * FROM emp LIMIT 开始查询的值,每页的数据量;
  # 开始查询的值 = (当前的页码-1)*每页的数据量
  假设每页显示5条数据，查询出前3页每页的数据
  第1页：SELECT * FROM emp LIMIT 0,5;
  第2页：SELECT * FROM emp LIMIT 5,5;
  第3页：SELECT * FROM emp LIMIT 10,5;
```
```sql
#复杂查询
# 1.聚合查询/分组查询
(1)查询出所有员工的数量
  SELECT COUNT(*) FROM emp;
(2)使用员工的编号列查询数量
  SELECT COUNT(eid) FROM emp;   #推荐
(3)使用员工所在部门编号列查询数量
  SELECT COUNT(deptId) FROM emp;
#函数：是一个功能体，提供若干个数据，返回处理的结果———饺子机
# 2.聚合函数
# count()/sum()/avg()/max()/min()
(1)查询出所有男员工的平均工资
  SELECT AVG(salary) FROM emp WHERE sex=1;
(2)查询出10号部门员工的工资总和
  SELECT SUM(salary) FROM emp WHERE deptId=10;
(3)查询出女员工工资最高的是多少
  SELECT MAX(salary) FROM emp WHERE sex=0;
(4)查询出男员工中年龄最大的生日是多少
  SELECT MIN(birthday) FROM emp WHERE sex=1;
(5)查询男女员工的平均工资，最高工资，最低工资
  SELECT AVG(salary),MAX(salary),MIN(salary),sex FROM emp GROUP BY sex;
# 分组查询只能查询分组条件和聚合函数
(6)查询出各个部门的员工数量，工资总和，平均工资
  SELECT deptId,COUNT(eid),SUM(salary),AVG(salary) FROM emp GROUP BY deptId;
(7)查询出1993年出生的员工有哪些
  SELECT * FROM emp WHERE YEAR(birthday)=1993;
# 2.子查询
(1)查询出市场部的员工有哪些
   步骤1：查询出市场部的部门编号是多少——20
   SELECT did FROM dept WHERE dname='市场部';
   步骤2：查询出20号部门下的员工有哪些
   SELECT * FROM emp WHERE deptId=20;
   综合：
   SELECT * FROM emp WHERE deptId=(SELECT did FROM dept WHERE dname='市场部');
(2)查询出比wangtao工资高的员工有哪些
   步骤1：查询出wangtao的工资——8000
   SELECT salary FROM emp WHERE ename='wangtao';
   步骤2：查询工资高于8000的员工
   SELECT * FROM emp WHERE salary>8000;
   综合：
   SELECT * FROM emp WHERE salary>(SELECT salary FROM emp WHERE ename='wangtao');
(3)查询出和wangtao同一年出生的员工有哪些
   步骤1：查询出wangtao出生的年份——1993
   SELECT YEAR(birthday) FROM emp WHERE ename='wangtao';
   步骤2：查询出1993年出生的员工有哪些
   SELECT * FROM emp WHERE YEAR(birthday)=1993;
   综合：
   SELECT * FROM emp WHERE YEAR(birthday)=( SELECT YEAR(birthday) FROM emp WHERE ename='wangtao')  AND  ename!='wangtao';
# 3.多表查询
(1)查询出所有员工的姓名及其部门名称
  SELECT emp.ename,dept.dname FROM emp,dept WHERE emp.deptId=dept.did;
  #新的多表查询语法
  #内连接——和之前的查询结果一致
   SELECT ename,dname FROM emp INNER JOIN dept ON deptId=did;
  #左外连接
   SELECT ename,dname FROM emp LEFT OUTER JOIN dept ON deptId=did;
   #先写哪个表，哪个表就是左，左侧表中所有记录都显示
   outer关键字可以省略
  #右外连接  
   SELECT ename,dname FROM emp RIGHT OUTER JOIN dept ON deptId=did;
   #后写哪个表，哪个表就是右，右侧表中所有记录都显示
  #全连接
   FULL JOIN   mysql不支持
   union  联合，合并相同的记录
   union  all   联合，不合并相同的记录+
   (SELECT ename,dname FROM emp LEFT OUTER JOIN dept ON deptId=did)
   union
   (SELECT ename,dname FROM emp RIGHT OUTER JOIN dept ON deptId=did);