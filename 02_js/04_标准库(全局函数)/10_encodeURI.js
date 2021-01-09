var uri = "www.codeboy.com/product.html?kw = 戴尔";
var string = encodeURI(uri);
console.log(string);
var string = decodeURI(string);
console.log(string);