import React from 'react'
import { Form, Button, Checkbox, DatePicker, Input, Select, AutoComplete } from 'antd'

const MultipleForm = () => {
  const onFinish = (e) => {
    console.log(e);

  }
  return (
    <Form onFinish={onFinish}
      onFinishFailed={(error) => console.log({ error })}
      labelCol={{ span: 10 }} wrapperCol={{ span: 14 }} autoComplete='off' >
      <Form.Item name="fullName" label="Full Name"
        rules={[
          {
            required: true,
            message: "Please enter your name",
          },
          {
            min: 3,
            message: "Full Name at least 3 characters",
          },
          {
            whitespace: true
          }
        ]}
        hasFeedback
      >
        <Input placeholder='Enter full name' />
      </Form.Item>
      <Form.Item name="email" label="Email"
        rules={[
          {
            required: true,
            message: "Please enter your name",

          },
          {
            type: "email",
            message: "Please enter your valid email"
          },
          {
            whitespace: true
          }
        ]}
        hasFeedback

      >
        <Input placeholder='Enter email' />
      </Form.Item>
      <Form.Item name="password" label="Password"
        rules={[
          {
            required: true,
            message: "Please enter your password",
          },
          { min: 6 },
          {
            validator: (_, value): any =>
              value && value.includes("A") ? Promise.resolve : Promise.reject("Password does not match critea")
          }
        ]}
        hasFeedback
      >
        <Input.Password placeholder='Enter password' />
      </Form.Item>
      <Form.Item name="confirmPassword" label="Confirm Password"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Please enter your confirm password",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve()
              }
              return Promise.reject("The two password is different")
            }
          })
        ]}
        hasFeedback
      >
        <Input placeholder='Enter confirmPassword' />
      </Form.Item>
      <Form.Item name="gender" label="Gender" >
        <Select placeholder="Please choose gender">
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="dob" label="Date of birthday" wrapperCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: "Please select birthday",
          },
        ]}
      >
        <DatePicker style={{ width: "100%" }} picker='date' placeholder='Day of birthday' value="dob" className='w-full' />
      </Form.Item>
      <Form.Item name="website" label="Website"
        rules={[
          {
            required: true,
            message: "Please enter url",
          },
          { type: "url", message: "Please provide the website URL" }
        ]}
      >
        <Input placeholder='Add your Url website' />
      </Form.Item>
      <Form.Item name={"agrement"} wrapperCol={{ span: 24 }}
        valuePropName='checked'
        rules={[
          {
            validator: (_, value): any =>
              value ? Promise.resolve : Promise.reject("Please agreement")
          }
        ]}
      >
        <Checkbox>Agree to our <a href="#">Terms and Conditional</a></Checkbox>
      </Form.Item>
      <Form.Item name="check" className='w-full' wrapperCol={{ span: 24 }}>
        <Button block className='text-[blue]' htmlType='submit'>Register</Button>
      </Form.Item>
    </Form >
  )
}

export default MultipleForm
