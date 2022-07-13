
```js
1. 时间分析 
npm i speed-measure-webpack-plugin --save-dev
const smp = new SpeedMeasurePlugin()

module.exports = (env) => {
  const mergeConfig = merge(commonConfig, config)
  return smp.wrap(mergeConfig)
}

2. 捆绑分析
https://webpack.js.org/guides/code-splitting/#bundle-analysis
npm i webpack-bundle-analyzer --save-dev

plugins: [
  new BundleAnalyzerPlugin()
]

```