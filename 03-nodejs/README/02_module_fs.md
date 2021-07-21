# fs模块
```
同步sync：
  等待前边的代码执行完，才能执行后边的代码；会阻止后边代码的执行，通过返回值来获取结果。
异步：
  不会阻止后边代码执行，后边的操作可以先执行，不必等待前边的操作结束，通过回调函数来获取结果。
```
```css
1. 查看文件状态
  fs.stat(path, callback)
  fs.statSync(path)
2. 创建目录
  fs.mkdir(path, callback)
  fs.mkdirSync(path)
3. 移除目录
  fs.rmdir(path, callback)
  fs.rmdirSync(path)
    使用异步移除目录mydir
    使用同步移除目录mydir2
4. 读取目录
  fs.readdir(path, callback)
  fs.readdirSync(path)
5. 创建文件/写入文件
  fs.writeFile( path, data, callback ) 
  fs.writeFileSync(path,data)
    data要写入的数据
    如果文件不存在，会创建文件并写入数据；
    如果文件已经存在，会清空文件中内容，然后写入数据
6. 追加写入文件
  fs.appendFile(path, data, callback)
  fs.appendFileSync(path, data)
    如果文件不存在，会创建文件，然后写入数据
    如果文件已经存在，会再文件的末尾写入数据
7. 读取文件
   fs.readFile(path, callback)
   fs.readFileSync(path)
     callback 
      err
      data  读取的数据，格式为buffer
8. 删除文件
   fs.unlink(path, callback)
   fs.unlinkSync(path)
9. 判断文件是否存在
   fs.existsSync(path)
10. 文件流
   var readStream=fs.createReadStream(文件路径)  
   // 创建可读流
   readStream.on('data', function(chunk){})
   // 当有数据流入,自动触发事件;
   // 通过回调函数来获取,chunk就是获取的数据流
   readStream.on('end', function(){})
   // 当读取结束，自动触发事件
   pipe  管道，可以将数据从可读流添加到可写流
   ```