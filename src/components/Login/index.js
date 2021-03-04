import React from 'react';
import { Button, Checkbox, Form, Input, Layout } from 'antd';

// style
import './style.css';
// import PropTypes from 'prop-types';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
function Login() {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout className='site_layout'>
                <div className="container">
                    <div className="header">
                        <h1 className="formName">DAISYSHOP LOGIN FORM</h1>
                    </div>
                    <div className="loginForm">
                        <h2>Fill out the form below to login</h2>
                        <Form
                            {...layout}
                            name='basic'
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <div className="formItem">
                                <Form.Item
                                    label='Email'
                                    name='email'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label='Password'
                                    name='password'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item  name='remember' valuePropName='checked'>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item >
                                    <Button type='primary' htmlType='submit'>
                                        Login
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
            </Layout>
        </Layout>
    );
}

export default Login;
