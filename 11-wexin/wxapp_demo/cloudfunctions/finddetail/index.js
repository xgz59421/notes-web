// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require("request-promise")
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  var url = `http://api.douban.com/v2/movie/subject/${event.id}`;
  url += "?apikey=0df993c66c0c636e29ecbb5344252a4a";
  return rp(url).then(res=>{
    return res;
  })
  .catch(err=>console.log(err));
}