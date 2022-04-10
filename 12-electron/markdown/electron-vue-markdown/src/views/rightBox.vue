<template>
  <el-main class="main">
    <el-tabs v-if="openFiles.length" v-model="activeId" type="card" @tab-click='tabClick'>
      <el-tab-pane v-for="file in openFiles" :key="file.id" :name="file.id">
        <span slot="label">
          {{file.title}}
          <i v-if="file.unsave<=1 || file.unsave==undefined" class="el-icon-circle-close" @click.stop="tabRemove(file.id)" />
          <i v-if="file.unsave>1" class="el-icon-circle-plus" @click.stop="tabRemove(file.id)" />
        </span>
        <wangeditor v-model="file.body" key="file.id" @onChange="editorChange(file)"></wangeditor>
      </el-tab-pane>
    </el-tabs>
    <section v-else class="emptyPage">新建或者导入文档</section>
  </el-main>
</template>

<script>
  import wangeditor from 'wangeditor-vue'
  import bus from '@/utils/bus.js'
  const { ipcRenderer } = window.require('electron')
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'RightBox',
    components: { wangeditor },
    props: {},
    data() {
      return {
        activeId: '', // 当前激活的打开的文件
      }
    },
    mounted() {
      bus.$on('changeTabActive', this.changeTabActive)
      bus.$on('tabRemove', this.tabRemove)
      ipcRenderer.on('execute-save-file', this.saveCurrentFile)
    },
    beforeDestroy() {
      ipcRenderer.removeListener('execute-save-file', this.saveCurrentFile)
    },
    computed: {
      ...mapState(['files', 'openFiles']),
    },
    created() {},
    methods: {
      ...mapMutations(['openFile', 'removeTab', 'saveFileContent']),
      tabRemove(id) {
        this.removeTab(id)
        // 关闭tab后, 打开上一次打开的文件
        if (this.openFiles.length > 0)
          this.openFile({
            id: this.openFiles[this.openFiles.length - 1].id
          })
      },
      tabClick(tab, event) {
        this.openFile({
          id: tab.name
        })
      },
      changeTabActive() {
        this.openFiles.forEach(file => {
          if (file.selected) {
            this.activeId = file.id
          }
        })
      },
      editorChange(file) {
        file.unsave = (file.unsave == undefined) ? 0 : file.unsave + 1
      },
      saveCurrentFile() {
        let file = this.openFiles.find((file)=> file.id == this.activeId)
        this.saveFileContent(file)
      }
    },
    watch: {
      // openFiles(val) {
      //   val && val.forEach(file => {
      //     this.activeId = file.id
      //   })
      // }
    }
  }
</script>

<style lang='less' scoped>
  .main {
    background-color: #96d7c6;
    padding: 0;

    .emptyPage {
      margin: 100px auto;
      text-align: center;
      font-size: 30px;
      color: #6c8cbf
    }

    ::v-deep .el-tabs__header {
      margin: 0;
    }

    .editor {
      margin: 0;
      height: calc(100vh - 41px);
    }

    ::v-deep [class*=" el-icon-"],
    [class^=el-icon-] {
      padding-left: 10px;
    }

    // 为保持状态 hover 时候显示 关闭icon
    ::v-deep .el-icon-circle-plus:hover::before {
      content: "\e78d";
    }

  }
</style>