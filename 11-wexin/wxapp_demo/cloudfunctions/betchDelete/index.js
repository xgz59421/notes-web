// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  try{
    return await  db.collection("web2020")
                    .where({
                      age:db.command.eq(28)
                    })
                    .remove()
                    .then(res=>console.log(res))
                    .catch(res=>console.log(res));
  }catch(e){
    console.log(e);
  }
 
}