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
				<form>
					<div className={style.item_form_dang_ky} style={{ marginTop: '25px' }}>
						<div className={style.title_dang_ky}>Tên đăng ký :</div>
						<div className={style.input_field}>
							<input type="text" id="name" required />
							<label htmlFor="name">Your name</label>
						</div>
					</div>
					<div className={style.item_form_dang_ky}>
						<div className={style.title_dang_ky}>Email :</div>
						<div className={style.input_field}>
							<input type="email" id="email" required />
							<label htmlFor="email" style={{ width: '60px' }}>
								Email
							</label>
						</div>
					</div>
					<div className={style.item_form_dang_ky}>
						<div className={style.title_dang_ky}>Số điện thoại :</div>
						<div className={style.input_field}>
							<input type="number" id="sdt" required />
							<label htmlFor="sdt" style={{ width: '140px' }}>
								Phone number
							</label>
						</div>
					</div>
					<div className={style.item_form_dang_ky}>
						<div className={style.title_dang_ky}>Mật khẩu :</div>
						<div className={style.input_field}>
							<input type="password" id="pass" required />
							<label htmlFor="password" style={{ width: '100px' }}>
								Password
							</label>
						</div>
					</div>
					<div className={style.item_form_dang_ky}>
						<div className={style.action_dang_ky}>
							<Checkbox>
								Tôi đồng ý với các điều khoản quy định sử dụng của trang web
							</Checkbox>
						</div>
					</div>
					<div className={style.item_form_dang_ky}>
						<div className={style.action_dang_ky}>
							<button>Tạo một tài khoản mới</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Register;
