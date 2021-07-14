const React = require("react")
// const Layout = require("./src/components/Layout").default
const { Provider } = require("react-redux")
const createStore = require("./src/store/createStore").default

// exports.wrapPageElement = ({ element }) => {
//   return <Layout>{element}</Layout>
// }

exports.wrapRootElement = ({ element }) => {
  return <Provider store={createStore()}>{element}</Provider>
}
