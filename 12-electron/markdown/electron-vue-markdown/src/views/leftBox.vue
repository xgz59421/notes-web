<template>
  <el-aside class="aside" ref="filesRef">
    <el-input v-model="searchValue" @change="searchFile($event)" :clearable='true' class="file-search" placeholder="搜索" prefix-icon="el-icon-search" />
    <div v-for="(file, index) in fileList" :key="file.id">
      <div v-if="file.isEdit==false" @contextmenu.prevent='mouseClick(file, index)' @click="openFile(file)" class="file-box" :class="{active: file.selected}">
        <i class="el-icon-document"></i>
        <span class="file-name">{{file.title}}</span>
        <i class="el-icon-edit" @click.stop="editFileHandle(file, true)"></i>
        <i class="el-icon-delete" @click.stop="removeFile(index)"></i>
      </div>
      <div v-else class="edit-box">
        <el-input :ref='file.id' v-model="file.title" @change="saveFileName(file)" />
        <i class="el-icon-close" @click="editFileHandle(file, false)"></i>
      </div>
    </div>
    <el-button-group class="bottom-btns">
      <el-button type="primary" @click.stop='newFile'>新建</el-button>
      <el-button type="primary" @click.stop='importFile'>导入</el-button>
    </el-button-group>
  </el-aside>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import mouseRightMenuTemp from '@/utils/menuRight.js'
  import bus from '@/utils/bus.js'
  const { ipcRenderer } = window.require('electron')
  const { remote } = window.require('electron')
  const { Menu } = remote
  export default {
    name: 'LeftBox',
    components: {},
    props: {},
    data() {
      return {
        searchValue: '',
        mouseClickFile: {}
      }
    },
    computed: {
      ...mapGetters({ fileList: "fileList" })
    },
    mounted() {
      ipcRenderer.on('execute-create-file', this.newFile)
      ipcRenderer.on('execute-search-file', this.search)
      ipcRenderer.on('execute-import-file', this.importFile)
      // 添加鼠标右键菜单
      this.$refs.filesRef.$el.addEventListener('contextmenu', this.addMouseRightEvent)
      bus.$on('renameMenu', this.renameMenu)
      bus.$on('deleteMenu', this.deleteMenu)
    },
    beforeDestroy() {
      this.$refs.filesRef.$el.addEventListener('contextmenu', this.addMouseRightEvent)
      ipcRenderer.removeListener('execute-create-file', this.newFile)
      ipcRenderer.removeListener('execute-search-file', this.search)
      ipcRenderer.removeListener('execute-import-file', this.importFile)
    },
    watch: {
      'fileList': {
        deep: true, // 深度遍历监控
        handler(data) {
          this.$nextTick(() => {
            this.fileList.forEach(file => {
              // 如果是修改状态, 则获取焦点
              if (file.isEdit) {
                this.$refs[file.id][0].focus()
              }
            })
          })
        }
      },
      // fileList 修改, 
      'fileList.length'(data) {
        console.log('length', data)
      }
    },
    methods: {
      ...mapMutations(['removeFile', 'editFile', 'saveFileName', 'searchFile', 'openFile', 'newFile', 'importFile']),
      editFileHandle(file, state) {
        let payload = {
          ...file,
          isEdit: state
        }
        this.editFile(payload)
      },
      search() {
        console.log('search')
      },
      // 鼠标右击事件
      mouseClick(file, index) {
        this.mouseClickFile = {
          ...file,
          index
        }
      },
      // 鼠标右键菜单
      addMouseRightEvent(ev) {
        ev.preventDefault()
        let menu = Menu.buildFromTemplate(mouseRightMenuTemp)
        ev.path.forEach((item) => {
          if (item.className && (item.className.indexOf('file-box') > -1)) {
            menu.popup({ window: remote.getCurrentWindow() })
            return
          }
        })
      },
      deleteMenu() {
        this.removeFile(this.mouseClickFile.index)
      },
      renameMenu() {
        this.editFileHandle(this.mouseClickFile, true)
      }
    }
  }
</script>

<style lang="less" scoped>
  .aside {
    width: 25% !important;
    overflow: hidden;
    background-color: #5aa7a7;
    position: relative;

    ::v-deep .el-input__inner {
      border-radius: 0;
      background-color: transparent;
      border: 0;
      border-bottom: 1px solid #DCDFE6
    }

    // 中间文件列表
    .file-box {
      height: 45px;
      line-height: 45px;
      color: #fff;
      border-bottom: 1px solid #CCCCCC;
      font-size: 17px;
      // padding: 8px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;

      .el-icon-document,
      .el-icon-edit,
      .el-icon-delete {
        flex-grow: 1;
        padding: 0 10px;
      }

      .file-name {
        flex-grow: 100;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        /*超出部分以点号代替*/
      }
    }

    .file-box:hover {
      background-color: rgba(186, 201, 74, 0.3);
    }

    .file-box.active {
      background-color: rgba(186, 201, 74, 1);
    }

    .edit-box {
      // box-sizing: content-box;
      box-sizing: border-box;
      height: 45px;
      line-height: 45px;
      color: #fff;
      background-color: #6c8cbf;
      border-bottom: 1px solid #DCDFE6;
      font-size: 17px;
      display: flex;
      align-items: center;

      ::v-deep .el-input__inner {
        border: 0;
      }

      .el-icon-close {
        padding-right: 10px;
      }
    }

    // 底部按钮组
    .bottom-btns {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;

      ::v-deep .el-button {
        flex: 1;
        background-color: #6c8cbf;
      }
    }
  }
</style>