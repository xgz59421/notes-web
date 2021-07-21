//index.js

//使用ES6的写法, 引入css文件到 js中,形成依赖关系
import style from '../css/index.css'

//引入 util.js 导出的方法
//注意: from 后面是路径,必须带有后缀名
import { getCompanyName } from './util.js'

function createDiv() {
  // 创建一个 div 标签
  var div = document.createElement('div');
  // classList class样式列表中添加 hello
  // class="hello"
  div.classList.add('hello');
  // 设置div标签内容是 ... <div>xxx</div>
  // getCompanyName() 从 util.js 中来
  div.innerHTML = '版权所有：' + getCompanyName();
  return div;
}
//添加 元素到 body 中 
document.body.appendChild(createDiv());