var obj = {}
console.log("*****统计字符串每个字符出现的个数*****");
var string = "helloworld";
for (const character of string) {
   if (obj[character] !== undefined) {
      obj[character]++;
   } else {
      obj[character] = 1;
   }
}
console.log(obj);