import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useGetPost() {
  // 自定义hook 就是逻辑和内置的hook的组合
  const [post, setPost] = useState({})
  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/posts/1')
    .then(res => setPost(res.data))
  }, [])
  return [post, setPost]
}

function AppCustomHook() {
  const [post, setPost] = useGetPost()
  return (
    <div>
      <div>id: {post.id}</div>
      <div>title: {post.title}</div>
    </div>
  )
}

export default AppCustomHook
