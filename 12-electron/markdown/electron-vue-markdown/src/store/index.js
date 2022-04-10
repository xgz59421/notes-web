import Vue from 'vue'
import Vuex from 'vuex'
// import initFiles from '@/utils/initFiles.js'
import { v4 } from 'uuid'
import bus from '@/utils/bus.js'
import { setFileStore, getFileStore } from '@/utils/store.js'
import { readFile, writeFile, renameFile, deleteFile, savedPath } from '@/utils/fs.js'
const path = window.require('path')
const { remote } = window.require('electron')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // files: initFiles, // 总文件
    files: getFileStore(),
    searchFiles: [], // 搜索文件
    openFiles: [], // 打开的文件
  },
  getters: {
    fileList(state) {
      return state.searchFiles.length > 0 ? state.searchFiles : state.files
    }
  },
  mutations: {
    removeTab(state, id) {
      state.openFiles.forEach((file, index) => {
        if (file.id == id) {
          state.openFiles.splice(index, 1)
          return
        }
      })
    },
    // 搜索文件
    searchFile(state, name) {
      if (name == '') {
        state.searchFiles = []
      } else {
        state.searchFiles = state.files.filter((file) => file.title.includes(name))
      }
    },
    // 打开文件
    openFile(state, payload) {
      // 修改文件列表中文件状态
      state.files.forEach((file) => {
        file.selected = false
        if (file.id == payload.id) {
          file.selected = true
        }
      })
      // console.log('state.files', state.files)
      // 判断是否打开过文件
      let hasFile = state.openFiles.some((file) => file.id == payload.id)
      if (!hasFile) state.openFiles.push({
        ...payload
      })
      // 修改打开文件的状态
      state.openFiles.forEach((file) => {
        file.selected = false
        if (file.id == payload.id) {
          file.selected = true
          // 读取文件内容
          if (!file.body) {
            readFile(payload.path)
            .then((data)=> {
              file.body = data
            })
          }
        }
      })
      
      bus.$emit('changeTabActive')
    },
    // 修改文件状态
    editFile(state, payload) {
      state.files.forEach((file, index) => {
        file.isEdit = false
        if (file.id == payload.id) {
          file.isEdit = payload.isEdit
          // 如果是新建的文件, 直接点关闭按钮则删除
          if (payload.isNew) {
            state.files.splice(index, 1)
            return
          }
        }

      })
    },
    saveFileContent(state, curfile) {
      writeFile(curfile.path, curfile.body).then(()=>console.log('success'))
    },
    // 新建文件
    newFile(state) {
      for (let i = 0; i < state.files.length; i++) {
        const file = state.files[i]
        // 如果新建文件时, 还有新建的文件, 则不新建文件
        if (file.isNew) return
        // 新建文件时候, 其他文件都不再是编辑模式
        file.isEdit = false
      }
      const newId = v4()
      state.files.push({
        id: newId,
        title: '',
        body: '',
        createTime: new Date().getTime(),
        isEdit: true,
        selected: false,
        isNew: true
      })
      // 之后, vue for循环中 多了一个空的file, 需要手动修改title, 然后进入 saveFileName方法
    },
    // 保存文件名
    saveFileName(state, payload) {
      // 判断重复文件名
      for (let i = 0; i < state.files.length; i++) {
        const file = state.files[i]
        if (file.id != payload.id && file.title == payload.title) {
          remote.dialog.showMessageBox({
            type: 'error',
            title: "关闭",
            message: '已存在相同文件名'
          })
          return
        }
      }

      // 保存到'savedPath'中
      const newPath = path.join(savedPath, `${payload.title}.md`)
      if (payload.isNew) {
        payload.path = newPath
        writeFile(newPath, payload.body)
          .then(() => console.log('保存成功'))
          .catch((err) => console.log(err))
      } else {
        renameFile(payload.path, newPath)
          .then(() => console.log('保存成功'))
          .catch((err) => console.log(err))
      }
      // 修改文件状态
      state.files.forEach(file => {
        if (file.id == payload.id) {
          file.isEdit = false
          file.title = payload.title
          file.path = newPath
          if (payload.isNew) payload.isNew = false
          this.commit('openFile', payload)
        }
      })
      // 保存到store中
      setFileStore(state.files)
    },
    // 文件删除
    removeFile(state, index) {
      let file = state.files[index]
      remote.dialog.showMessageBox({
        type: 'warning',
        title: "删除",
        message: '您确定要删除文件吗？',
        buttons: ['cancel', 'ok']
      }).then(res => {
        // 确定: 1, 取消: 0
        if (res.response == 1) {
          deleteFile(file.path)
            .then(() => {
              // 移除内存中的数据
              state.files.splice(index, 1)
              // 移除tab中'openfiles'的数据
              bus.$emit('tabRemove', file.id)
              // 移除store中的数据
              setFileStore(state.files)
            })
            .catch((err) => console.log(err))
        } else {
          remote.dialog.showMessageBox({
            type: 'info',
            title: "关闭",
            message: '已取消删除'
          })
        }
      })
    },
    // 导入文件
    importFile(state) {
      remote.dialog.showOpenDialog({
        defaultPath: __dirname,
        buttonLabel: '请选择',
        title: '选择md文件',
        properties: ['openFile', 'multiSelections'],
        filters: [
          { "name": "md文档", extensions: ["md"] },
          { "name": "其它类型", extensions: ["js", 'json', 'html', '*'] },
        ]
      }).then((ret) => {
        const paths = ret.filePaths
        if (paths.length) {
          // 01 判断当前路径们，是否存在于 files 当中，如果已经存在则无须再执行导入操作
          const validPaths = paths.filter(filePath => {
            // 判断当前 path 是否已经存在过了
            const existed = state.files.find(file => {
              return file.path == filePath
            })
            return !existed
          })
          // 02 将上述的路径信息组装成 files 格式， id title path 
          const packageData = validPaths.map(filePath => {
            return {
              id: v4(),
              title: path.basename(filePath, '.md'),
              body: '',
              path: filePath,
              isEdit: false,
              selected: false
            }
          })

          // 03 将上述的数据格式处理为 files 所需要的
          state.files = state.files.concat(packageData)
          
          // 04 更新数据重新渲染
          setFileStore(state.files)
  
          // 05 成功导入提示
          if (packageData.length) {
            remote.dialog.showMessageBox({
              type: 'info',
              title: "导入md文档",
              message: '文件导入成功'
            })
          }
        } else {
          remote.dialog.showMessageBox({
            type: 'info',
            title: "导入md文档",
            message: '未选择文件导入'
          })
        }
      })
    }
  },
  actions: {},
  modules: {}
})