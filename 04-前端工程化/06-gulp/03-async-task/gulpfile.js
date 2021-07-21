const fs = require('fs')

// yarn gulp callback
exports.callback = done => {
  console.log('callback task')
  done()
}
// yarn gulp callback_error
exports.callback_error = done => {
  console.log('callback task')
  done(new Error('task failed'))
}
// yarn gulp promise
exports.promise = () => {
  console.log('promise task')
  return Promise.resolve()
}
// yarn gulp promise_error
exports.promise_error = () => {
  console.log('promise task')
  return Promise.reject(new Error('task failed'))
}

const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
// yarn gulp async
exports.async = async () => {
  await timeout(1000)
  console.log('async task')
}
// yarn gulp stream
exports.stream = () => {
  const read = fs.createReadStream('package.json')
  const write = fs.createWriteStream('a.txt')
  read.pipe(write)
  return read
}

// exports.stream = done => {
//   const read = fs.createReadStream('yarn.lock')
//   const write = fs.createWriteStream('a.txt')
//   read.pipe(write)
//   read.on('end', () => {
//     done()
//   })
// }
