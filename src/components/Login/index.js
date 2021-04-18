import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
// style
import styles from './index.module.css';
import logo from '../../img/logotet2019.png';
import { Link } from 'react-router-dom';
import style from './index.module.css';

//const
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

function Login() {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div className={styles.dang_nhap}>
			<div className={styles.herader_dangnhap}>
				<Link to={'/'}>
					<img src={logo} />
				</Link>
				<div className={styles.verticalLine}>
					<p>
						<b>Chào mừng bạn quay trở lại</b>
					</p>
				</div>
			</div>
			<div>
				<hr />
			</div>
			<div className={styles.title}>
				<h3>ĐĂNG NHẬP VỚI EMAIL VÀ SỐ ĐIỆN THOẠI</h3>
			</div>
			<div className={styles.form_dang_nhap}>
				<form>
					<div className={style.item_form_dang_nhap} style={{ marginTop: '25px' }}>
						<div className={style.input_field}>
							<input type="text" id="name" required />
							<label htmlFor="name">Your name</label>
						</div>
					</div>
					<div className={style.item_form_dang_nhap}>
						<div className={style.input_field}>
							<input type="email" id="email" required />
							<label htmlFor="email" style={{ width: '140px' }}>
								Email hoặc SĐT
							</label>
						</div>
					</div>
					<div className={style.item_form_dang_nhap}>
						<div className={style.input_field}>
							<input type="password" id="pass" required />
							<label htmlFor="password" style={{ width: '100px' }}>
								Password
							</label>
						</div>
					</div>
					<div className={style.item_form_dang_nhap}>
						<div className={style.action_dang_nhap}>
							<Checkbox>Lưu mật khẩu cho lần đăng nhập tiếp theo</Checkbox>
						</div>
					</div>
					<div className={style.item_form_dang_nhap}>
						<div className={style.action_dang_nhap}>
							<button>Đăng nhập</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
