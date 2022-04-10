const { remote } = require('electron')

window.onload = function () {
  let oBtn = document.getElementById('btn')
  let oBtnErr = document.getElementById('btnErr')

  oBtn.addEventListener('click', () => {
    remote.dialog.showOpenDialog({
      defaultPath: __dirname,
      buttonLabel: '请选择',
      title: '拉勾教育',
      // openFile: 允许选择文件
      // openDirectory: 允许选择文件夹
      // multiSelections 文件可以多选
      properties: ['openFile', 'multiSelections'],
      filters: [
        { "name": '代码文件', extensions: ['js', 'json', 'html'] },
        { "name": '图片文件', extensions: ['ico', 'jpeg', 'png'] },
        { "name": '媒体类型', extensions: ['avi', 'mp4', 'mp3'] }
      ]
    }).then((ret) => {
      console.log(ret)
    })
  })


  oBtnErr.addEventListener('click', () => {
    remote.dialog.showErrorBox('自定义标题', '当前错误内容')
  })
}