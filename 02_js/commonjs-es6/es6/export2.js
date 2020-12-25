//一次性导出多个值的方式

//推荐一个插件 tabout, 按tab键自动把光标移到 ) 或 ' " 的外面
var name = '小明'

var age = 18

var sex = '男'

//一起导出
export {
  name,
  age,
  sex as gender
}
//通过 as 可以起别名
