import './title'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

if (module.hot) {
  module.hot.accept(['./title.js'], () => {
    console.log('title.js模块更新')
  })
}

ReactDOM.render(<App />, document.getElementById('app'))
