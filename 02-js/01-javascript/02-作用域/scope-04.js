
console.log(a); 
var a=1;
console.log(a);    
function a(){console.log(20);}
console.log(a);   
var a=3;
console.log(a);    
function a(){console.log(30);}
a();
console.log(a);

/*
  翻译为:
  -----------------------
  var a
  function a(){console.log(20);}
  function a(){console.log(30);}
  console.log(a);----------------------->[Function: a]
  a=1;
  console.log(a);----------------------->1  
  console.log(a);----------------------->1 
  a=3;  
  console.log(a);----------------------->3  
  a();---------------------------------->此时a=3,报错
  console.log(a);

*/
