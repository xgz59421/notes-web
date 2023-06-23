/** 基本数据类型
 * 字符串（String）
 * 数字(Number)
 * 布尔(Boolean)
 * 空（Null）
 * 未定义（Undefined）
 * Symbol
 */

/** 引用数据类型
 * 对象(Object)
 * 数组(Array)
 * 函数(Function)
 * 正则（RegExp）
 * 日期（Date）
 */

//1.基本数据存储
var a = 1
var b = a //使用栈内存 会copy一份数据
a = 3
console.log(b) // 1

//2.引用数据存储
var person1 = { name: 'tom' }
var person2 = person1
person1.name = 'lucy'
//使用同一个堆内存保存数据, 两个栈内存保存地址,并且指向同一个堆内存中的数据
console.log(person2) // lucy
