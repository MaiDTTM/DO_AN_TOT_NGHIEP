import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

// style
import logo from '../../img/logotet2019.png';
import style from './style.module.css';
import { Link } from 'react-router-dom';

//const
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

function Register() {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div className={style.dang_ky}>
			<div className={style.herader_dangky}>
				<Link to={'/'}>
					<img src={logo} />
				</Link>
				<div className={style.verticalLine}>
					<p>
						<b>Chào mừng bạn quay trở lại</b>
					</p>
				</div>
			</div>
			<div>
				<hr />
			</div>
			<div className={style.titell}>
				<h3>TẠO MỘT TÀI KHOẢN MỚI</h3>
			</div>
			<div className={style.form_dangky}>
				<Form
					className={style.form}
					{...layout}
					name="basic"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						className={style.Username}
						label="Username"
						name="username"
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input className={style.input_username} />
					</Form.Item>
					<Form.Item
						className={style.Email}
						label="Email"
						name="Email"
						rules={[{ required: false, message: 'Please input your Email!' }]}
					>
						<Input className={style.input_email} />
					</Form.Item>
					<Form.Item
						className={style.Password}
						label="Password"
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password className={style.input_password} />
					</Form.Item>
					<Form.Item
						className={style.Enter_the_Password}
						label="Enter the Password"
						name="Enter_the_Password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						className={style.Checkbox}
						{...tailLayout}
						name="remember"
						valuePropName="checked"
					>
						<Checkbox>
							Tôi đồng ý với các điều khoản quy định khi sử dụng trang web
						</Checkbox>
					</Form.Item>

					<Form.Item className={style.Submit} {...tailLayout}>
						<Button type="primary" htmlType="submit">
							Đăng ký
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default Register;
