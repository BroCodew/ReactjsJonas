import React, { useContext, useEffect, useReducer } from 'react'
import { AuthProvider } from '..'
import { Button, Form, Input } from 'antd';

//anvuko1g@gmail.com
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("state11111111", state);
      console.log("action.data.token", action.data.token);

      return [...state, action.data.token]
    case "LOGIN_FAIL":
      console.log("state", state);
      return
    default:
      return
  }
}

const FormAuth = () => {
  const [form] = Form.useForm();

  const { infor, setInfor } = useContext<any>(AuthProvider);
  const [state, dispatch] = useReducer(authReducer, infor);
  console.log("111111", infor);

  const handleFinish = async (e) => {
    try {
      const response = await fetch('http://127.0.0.1:3005/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: e.email,
          password: e.password
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      dispatch({
        type: "LOGIN_SUCCESS",
        data,
      })
      setInfor(data)
    } catch (error) {
      dispatch({ type: "LOGIN_FAIL", payload: error.message });
      console.error('Error fetching data:', error.message);
    }
  }



  return (
    <div>
      <Form onFinish={handleFinish} wrapperCol={{ span: 5 }}
        labelCol={{ span: 10 }}
      >
        <Form.Item label="Email" name={"email"}>
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item label="Password" name={"password"}>
          <Input.Password placeholder='Password' />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 5 }} label="Submit">
          <Button block htmlType='submit'>Login</Button>
        </Form.Item>
      </Form>
    </div >
  )
}

export default FormAuth
