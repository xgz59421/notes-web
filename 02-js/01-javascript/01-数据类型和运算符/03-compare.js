var c1 = (3=='3');      //true
var c2 = (3==='3');     //false
var c3 = (1==true);     //true
var c4 = (1===true);    //false
var c5 = (2!='3');      //只是比较值 true
var c6 = ('2'!=='3');   //先比较类型，再比较值 true
console.log(c1, c2, c3, c4, c5, c6); 

console.log('--------------------------');
var n1 = (3>'10');//false
// 比较的Unicode码
var n2 = ('3'>'10');
var n3 = ('3'.charCodeAt(), '1'.charCodeAt());
console.log(n1, n2, n3);

console.log('--------------------------');
var m1 = (3>'10a');//false
var m2 = (3<'10a');//false
var m3 = (3=='10a');//false
var m4 = (NaN==NaN);//false
console.log(m1, m2, m3, m4);




