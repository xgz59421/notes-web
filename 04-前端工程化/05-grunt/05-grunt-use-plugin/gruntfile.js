// grunt-contrib-clean 删除文件
module.exports = grunt => {
  grunt.initConfig({
    clean: {
      // temp: 'temp/app.js'
      // temp: 'temp/*.js'
      temp: 'temp/**'  // 删除temp下所有的文件(包括子文件)
    }
  })
  // yarn grunt clean 
  grunt.loadNpmTasks('grunt-contrib-clean')
}