import React, { memo, useEffect, useState } from "react"

function ShowName({ name }) {
  console.log("showName render...")
  return <div>{name}</div>
}
// memo 将函数变为纯组件
const ShowNameMemo = memo(ShowName)

function App() {
  const [index, setIndex] = useState(0)
  const [name] = useState("张三")
  useEffect(() => {
    setInterval(() => {
      setIndex(prev => prev + 1)
    }, 1000)
  }, [])
  return (
    <div>
      {index}
      <ShowNameMemo name={name} />
    </div>
  )
}

export default App