const url = require("url");
console.log(url);
let str = "http://www.codey.com:80/products.html?kw=dell#three";
//解析URL为对象
var obj = url.parse(str);
console.log("-----------url------------------");
console.log(obj)
console.log("-----------query------------------");
console.log(obj.query)

//将对象转为URL
var obj2 = {
    protocol: 'http:',
    hostname: 'www.codey.com',
    port: '80',
    pathname: '/products.html',
    search: '?kw=dell',
    hash: '#three',
}
var strurl = url.format(obj2);
console.log(strurl)

//test
// let urlstring = "http://www.codey.com:80/products.html?kw=dell&price=3999.00#three";
// var obj = url.parse(urlstring);
// console.log(obj.query);
// const query = require("querystring");
// var obj = query.parse(obj.query);
// console.log(obj)