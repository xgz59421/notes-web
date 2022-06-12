module.exports = {
  // preset 真正配置 node_modules/cli-plugin-unit-jest/presets/default/jest-preset.js
  preset: '@vue/cli-plugin-unit-jest',
  // 运行测试前加载的 js
  setupFilesAfterEnv: ['./jest.setup.js']
}


