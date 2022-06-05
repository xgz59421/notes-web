##### snapshot 快照
```
// 第1次运行的时候, 会生成快照文件字符串
// 下一次运行测试的时候会和快照文件进行比对, 如果不一致则测试失败
expect(document.body.innerHTML).toMatchSnapShot()

__snapshots__ 目录中生成快照

更新快照
npx jest --updateSnapshot
```