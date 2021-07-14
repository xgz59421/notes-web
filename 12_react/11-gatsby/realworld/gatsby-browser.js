const React = require("react")
const Layout = require("./src/components/Layout").default
const { Provider } = require("react-redux")
const createStore = require("./src/store/createStore").default
const axios = require("axios")

axios.defaults.baseURL = "https://conduit.productionready.io/api"

exports.wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}

exports.wrapRootElement = ({ element }) => {
  return <Provider store={createStore()}>{element}</Provider>
}
