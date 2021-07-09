import ReactDOM from "react-dom"
import App from "./components/App"
import { Global } from "@emotion/react"
import styles from "./styles"

ReactDOM.render(
  <>
    <Global styles={styles} />
    <App />
  </>,
  document.getElementById("root")
)
