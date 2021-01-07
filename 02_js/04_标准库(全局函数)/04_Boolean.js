
//false :0, NaN, "", undefined, null
var b1 = new Boolean(false) //obj
console.log('new b1:', b1, typeof b1);
var b2 = Boolean(NaN);
console.log('NaN:', b2);
var b3 = Boolean("");
console.log('"":', b3);
var b4 = Boolean([]);
var b5 = Boolean({});
console.log(b4, b5);

//隐式转换 bool类型
var b6 = !!undefined;
console.log('!!undefined', b6)
var str = b6.toString();
console.log(str, typeof b6)
