import { useState, useEffect } from "react"
import axios from "axios"

function useLogin() {

  // [false, true]  是否登录 , 是否加载中
  const [status, setStatus] = useState([false, true])
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      ;(async function () {
        try {
          await axios.get("/user", {
            headers: {
              Authorization: `Token ${token}`,
            },
          })
          setStatus([true, false])
        } catch (ex) {
          setStatus([false, false])
        }
      })()
    } else {
      setStatus([false, false])
    }
  }, [])
  return status
}

export default useLogin
