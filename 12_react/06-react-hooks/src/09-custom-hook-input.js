import React, { useState } from 'react'

function useUpdateInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: (e)=>setValue(e.target.value)
  }
}

function AppCustomHook() {
  let username = useUpdateInput('')
  let password = useUpdateInput('')

  let confirm = (e)=>{
    e.preventDefault();
    console.log('username', username.value);
    console.log('password', password.value);
  }
  return (
    <form onSubmit={confirm}>
      姓名: <input type='text' name='username' {...username}/> <br/>
      密码: <input type='password' name='password' {...password}/><br/>
      <input type='submit'/><br/>
    </form>
  )
}

export default AppCustomHook
