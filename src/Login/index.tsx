import {Button, Form, Input} from "antd";

const Index = () => {
    // const [form] = Form.useForm();
    const handleFinish = (e) => {
        console.log(e);
    }

    return (
        <div>
            <Form onFinish={handleFinish} >
                <Form.Item label="User Name" name={"userName"}>
                    <Input placeholder='User Name' />
                </Form.Item>
                <Form.Item label="Password" name={"password"}>
                    <Input.Password placeholder='Password' />
                </Form.Item>
                <Form.Item>
                        <Button   htmlType='submit'>Login</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Index;