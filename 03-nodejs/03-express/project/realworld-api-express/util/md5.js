const crypto = require('crypto')
// 获取 crypto支持的散列算法
// console.log(crypto.getHashes());
module.exports = str => {
  return crypto.createHash('md5')
    .update('lagou' + str)
    .digest('hex')
}
