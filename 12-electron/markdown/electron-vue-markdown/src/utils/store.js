const Store = window.require('electron-store')

const fileStore = new Store({ "name": "filesInfo" })
const { remote } = window.require('electron')
console.log('数据持久化存放位置', remote.app.getPath('userData'))
const setFileStore = (files) => {
  fileStore.set('infoFiles', files)
}

const getFileStore = () => {
  return fileStore.get('infoFiles') || []
}

export {
  getFileStore,
  setFileStore
}
// const store = new Store()
// // 1 设置数据
// store.set('name', '拉勾教育')

// // 2 获取数据
// console.log(store.get('name'))

// // 3 删除数据
// store.delete('name')
// console.log(store.get('name'))