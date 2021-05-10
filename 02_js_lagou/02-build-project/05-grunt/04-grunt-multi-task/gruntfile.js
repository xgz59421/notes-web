module.exports = grunt => {
  // 多目标模式，可以让任务根据配置形成多个子任务

  // grunt.initConfig({
  //   build: {
  //     foo: 100,
  //     bar: '456'
  //   }
  // })

  // // yarn grunt build
  // // yarn grunt build:foo
  // grunt.registerMultiTask('build', function () {
  //   // console.log(`task: build`);
  //   console.log(`task: build, target: ${this.target}, data: ${this.data}`)
  // })

  // yarn grunt build
  // yarn grunt build:foo
  // yarn grunt build:bar
  grunt.initConfig({
    build: {
      options: {
        msg: 'task options'
      },
      foo: {
        options: {
          msg: 'foo target options'
        }
      },
      bar: '456'
    }
  })

  grunt.registerMultiTask('build', function () {
    console.log(this.options())
  })
}
