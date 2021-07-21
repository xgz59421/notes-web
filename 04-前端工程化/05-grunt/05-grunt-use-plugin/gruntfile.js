// grunt-contrib-clean 删除文件
module.exports = grunt => {
  grunt.initConfig({
    clean: {
      // temp: 'temp/app.js'
      // temp: 'temp/*.js'
      temp: 'temp/**'
    }
  })
  // yarn grunt clean 
  grunt.loadNpmTasks('grunt-contrib-clean')
}