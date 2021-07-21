function sayhellow(str) {
  return new Promise((resolve, reject)=>{
    console.log(str,"say hi!");
    resolve(str)
  })
  
}
(async function () {
  await sayhellow('tom')
  console.log('tom end');
  await sayhellow('jack')
  console.log('jack end');
  await sayhellow('lucy')
  console.log('lucy end');
  await sayhellow('lily')
  console.log('lily end');
})();

