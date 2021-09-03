const { MongoClient, ObjectID } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017', {
  useUnifiedTopology: true
})

async function run () {
  try {
    // 开始连接
    await client.connect()

    const testDb = client.db('test')
    const pizzaCollection = testDb.collection('pizza')

    // 1.创建文档

    // // 插入一个
    // const pizzaDocument = {
    //   name: "Neapolitan pizza",
    //   shape: "round",
    //   toppings: [ "San Marzano tomatoes", "mozzarella di bufala cheese" ],
    // };
    // const result = await pizzaCollection.insertOne(pizzaDocument);
    
    // console.dir(result.insertedCount);
    // // 插入多个
    // const pizzaDocuments = [
    //   { name: "Sicilian pizza", shape: "square" },
    //   { name: "New York pizza", shape: "round" },
    //   { name: "Grandma pizza", shape: "square" },
    // ];
    // const result = await pizzaCollection.insertMany(pizzaDocuments);
    // console.dir(result.insertedCount);

    // 2.查询文档
    // const ret = await pizzaCollection.findOne({
    //   name: 'Grandma pizza'
    // })
    // console.log(ret)

    // 3.删除文档
    // // 删除一个
    // const ret = await pizzaCollection.deleteOne({
    //   _id: ObjectID('6131f5aa47bfd398906a9055')
    //   // name: 'Grandma pizza'
    // })
    // console.log(ret.deletedCount)

    // 删除多个
    // const deleteManyResult = await pizzaCollection.deleteMany

    // 4.更新文档
    const ret = await pizzaCollection.updateOne({
      _id: ObjectID('6131f5aa47bfd398906a9054')
    }, {
      $set: {
        name: '蒙古馅饼'
      }
    })
    console.log(ret)

  } catch (err) {
    // 连接失败
    console.log('连接失败', err)
  } finally {
    // 关闭连接
    await client.close()
  }
}

run()

// 开始连接
// client.connect().then(() => {
//   // 连接成功了
// }).catch(() => {
//   console.log('连接失败了')
// })
