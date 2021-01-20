function sayhellow(str) {
  return new Promise((resolve, reject)=>{
    console.log(str,"say hi!");
    resolve(str)
  })
  
}
Promise.all([
  sayhellow('tom'), 
  sayhellow('jack'),
  sayhellow('lucy'), 
  sayhellow('lily')
])
.then((res)=>{
  console.log(res);
  console.log('end');
});
