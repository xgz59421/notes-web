import React from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup'

function App1() {
  const formik = useFormik({
    initialValues:{ username:'张三', password:'123456'},
    // validate: values=>{
    //   const errors = {};
    //   if (!values.username) {
    //     errors.username = '请输入用户名'
    //   } else if(values.username.length >10){
    //     errors.username = '用户名长度不能大于10'
    //   }
    //   if (!values.password) {
    //     errors.password = '请输入密码'
    //   } else if(values.password.length <6){
    //     errors.password = '密码长度不能小于6'
    //   }
    //   return errors
    // },
    validationSchema: Yup.object({
      username: Yup.string().max(10, '用户名长度不能大于10').required('请输入用户名'),
      password: Yup.string().max(6, '密码长度不能小于6').required('请输入密码'),
    }),
    onSubmit: (values)=>{
      console.log(values);
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
    {/* <input name='username' value={formik.values.username} 
      onChange={formik.handleChange} onBlur={formik.handleBlur}/> */}
    {/* 减少样板代码 代替 value, onChange, onBlur*/}
    <input name='username' {...formik.getFieldProps('username')}/>
    <p>{formik.touched.username && formik.errors.username ? formik.errors.username: null}</p>
    {/* <input name='password' value={formik.values.password} 
      onChange={formik.handleChange} onBlur={formik.handleBlur}
    />    */}
    <input name='password' {...formik.getFieldProps('password')}/>   
    <p>{formik.touched.password && formik.errors.password ? formik.errors.password: null}</p>
    <input type='submit'/>
    </form>
  )
}

export default App1
