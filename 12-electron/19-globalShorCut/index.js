window.onload = function () {
  let oBtn = document.getElementById('btn')

  oBtn.addEventListener('click', () => {
    let option = {
      title: '拉勾教育',
      body: '互联网人的实战大学，大前端',
      icon: './msg.png'
    }

    let myNotification = new window.Notification(option.title, option)

    myNotification.onclick = function () {
      console.log('点击了消息页卡')
    }
  })
}