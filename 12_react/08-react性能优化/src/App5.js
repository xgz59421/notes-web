import React, { memo, useState } from "react"

// const ShowPersonMemo = memo(ShowPerson)
const ShowPersonMemo = memo(ShowPerson, comparePerson)

function comparePerson(prevProps, nextProps) {
  // 判断逻辑正好与 类组件中的shouldComponentUpdate 相反
  if (
    prevProps.person.name !== nextProps.person.name ||
    prevProps.person.age !== nextProps.person.age
  ) {
    return false
  }
  return true
}

function ShowPerson({ person }) {
  console.log("ShowPerson render...")
  return (
    <div>
      {person.name} {person.age}
    </div>
  )
}

function App() {
  const [person, setPerson] = useState({ name: "张三", age: 20, job: "waiter" })
  return <>
  	<ShowPersonMemo person={person} />
  	<button onClick={() => setPerson({...person, job: "chef"})}>button</button>
  </>
}
export default App