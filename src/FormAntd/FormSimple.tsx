import { Form, Input, Button } from 'antd';

const FormSimple = () => {
  const handleFinish = (e) => {
    console.log(e);
  }
  return (
    <Form onFinish={handleFinish}>
      <Form.Item label="User Name" name={"userName"}>
        <Input placeholder='User Name' />
      </Form.Item>
      <Form.Item label="Password" name={"password"}>
        <Input.Password placeholder='Password' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>Login</Button>
      </Form.Item>
    </Form>
  )
}

export default FormSimple
