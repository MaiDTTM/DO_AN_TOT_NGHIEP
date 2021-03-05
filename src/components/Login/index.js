import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

// style
import './style.css';
import logo from "../../img/logotet2019.png";

//const
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function Login() {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="dang_nhap">
            <div className="herader_dangnhap">
                <a><img src={logo}/></a>
                <div className="verticalLine">
                    <p><b>Chào mừng bạn quay trở lại</b></p>
                </div>
            </div>
            <div><hr/></div>
            <div className='titell'>
                <h3>ĐĂNG NHẬP VỚI EMAIL VÀ SỐ ĐIỆN THOẠI</h3>
            </div>
            <div className='form_dangnhap'>
                <Form className="form"
                      {...layout}
                      name="basic"
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                >
                    <Form.Item className='Username'
                               label="Username"
                               name="username"
                               rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item className="Password"
                               label="Password"
                               name="password"
                               rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item className="Checkbox"
                               {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item className="Submit"
                               {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;
