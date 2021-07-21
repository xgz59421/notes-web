import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

function Checkbox ({label, ...props}) {
  const [field, meta, helper] = useField(props);
  const { value } = meta;
  const { setValue } = helper;
  // console.log(value);
  const handleChange = () => {
    const set = new Set(value);
    if (set.has(props.value)) {
      set.delete(props.value);
    }else {
      set.add(props.value);
    }
    setValue([...set])
  }
  return <div>
    <label htmlFor={props.id}>
      <input checked={value.includes(props.value)} type="checkbox" {...props} onChange={handleChange}/> {label}
    </label>
  </div>
}

function MyInput({label, ...props}) {
  const [field, meta] = useField(props)
  // console.log(field, meta);
  return <div>
    <label htmlFor={props.id}>{label}</label>
    <input {...field} {...props}/>
    {meta.touched && meta.error ? <span>{meta.error}</span>: null}
  </div>
}

function App() {
  const initialValues = {
    username: '', 
    hobbies: ['足球'], 
    content: '内容区域',
    subject: '前端'
  };
  const handleSubmit = (values) => {console.log(values);};
  const schema = Yup.object({
    username: Yup.string()
      .max(15, "用户名的长度不能大于15")
      .required("请输入用户名"),
    password: Yup.string().max(6, '密码长度不能小于6').required('请输入密码'),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        姓名<Field name="username" />
        <ErrorMessage name="username" /> <br/>
        {/* <Field as='textarea' name="content" /> <br/>
        <Field as='select' name="subject">
          <option value='前端'>前端</option>
          <option value='后端'>后端</option>
        </Field> */}
        <MyInput id='pwd' label='密码' name='password' type='password' placeholder='请输入密码'/>
        <Checkbox id='1' value="足球" label="足球" name="hobbies"/>
        <Checkbox id='2' value="篮球" label="篮球" name="hobbies"/>
        <Checkbox id='3' value="橄榄球" label="橄榄球" name="hobbies"/>
        <input type="submit"/>
      </Form>
    </Formik>
  );
}

export default App;
