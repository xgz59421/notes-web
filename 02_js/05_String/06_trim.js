/*
 * string.trim()
 * 返回移除头尾空格的字符串。
*/
var string = "    zhang    hao       ";
//去掉左边空字符
function trimLeft(str) {
    return str.replace(/^\s+/, "");
}

//去掉右边空字符
function trimRight(str) {
    return str.replace(/\s+$/, "");
}
//去掉左右空字符
function mytrim(str) {
    return str.replace(/^\s+|\s+$/g, "");
}
console.log('去掉左边空字符:',trimLeft(string));
console.log('去掉右边空字符:',trimRight(string));
console.log('mytrim:',mytrim(string));
console.log('trim:',string.trim());