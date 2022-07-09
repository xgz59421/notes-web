const sass = require('sass')
const loadGruntTasks = require('load-grunt-tasks')

module.exports = grunt => {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        implementation: sass // 处理sass编译
      },
      main: {
        files: {
          'dist/css/main.css': 'src/scss/main.scss'
        }
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      },
      main: {
        files: {
          'dist/js/app.js': 'src/js/app.js'
        }
      }
    },
    // 监视, 自动编译
    watch: {
      js: {
        files: ['src/js/*.js'],
        tasks: ['babel']  // 需要执行的任务
      },
      css: {
        files: ['src/scss/*.scss'],
        tasks: ['sass']
      }
    }
  })
  // grunt.loadNpmTasks('grunt-sass')
  loadGruntTasks(grunt) // 自动加载所有的 grunt 插件中的任务

  // 1. yarn grunt sass
  // 2. yarn grunt babel
  // 3. yarn grunt watch
  // 4. yarn grunt // 执行default里所有的任务
  grunt.registerTask('default', ['sass', 'babel', 'watch'])
}