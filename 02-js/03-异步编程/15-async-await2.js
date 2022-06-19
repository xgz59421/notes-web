function sayhellow(name) {
  return new Promise((resolve, reject) => {
    console.log(name, "say hi!");
    resolve(name) // 返回name字符串
  })

}
(async function() {
  await sayhellow('tom')
  console.log('tom end');
  await sayhellow('jack')
  console.log('jack end');
  await sayhellow('lucy')
  console.log('lucy end');
  await sayhellow('lily')
  console.log('lily end');
})();