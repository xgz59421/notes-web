/**
 * 检测数组中的元素是否满足,函数中的条件
 * @method array.some(function(elem, index, arr))
 * @param elem 当前对象
 * @param index 当前位置 (可选)
 * @param arr 当前数组对象 (可选)
 * @return
 *    一个满足就返回true, 不再检测
 *    没有则返回false
 */
var array = [1, 2, 3, 4, 5]
// var array = [2, 4, 6, 4, 2];
console.log('判断哪些数组全部由偶数组成')
console.log('------------------------')
console.log('array:', array)
var rst = array.some((elem /*, i, arr*/) => elem % 2 == 0)
console.log('rst:', rst) //true
