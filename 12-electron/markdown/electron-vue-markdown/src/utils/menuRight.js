import bus from '@/utils/bus.js'

const mouseRightMenuTemp = [
  {
    label: '重命名',
    click(e) {
      console.log('执行重命名', e)
      bus.$emit('renameMenu')
    }
  },
  {
    label: '删除',
    click() {
      console.log('执行删除')
      bus.$emit('deleteMenu')
    }
  }
]

export default mouseRightMenuTemp