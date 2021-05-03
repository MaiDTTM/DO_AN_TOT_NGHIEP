import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message as messageAnt } from 'antd';
// style
import styles from './index.module.css';
import logo from '../../img/logotet2019.png';
import { Link, useHistory } from 'react-router-dom';
import style from './index.module.css';
import { useDispatch } from 'react-redux';
import baseAPI from '../../axios/baseAPI';
import { TypeApi } from '../../util/TypeApi';
import { LoginUser } from '../../actions/userAction';

const TypeInput = {
	user: 'user',
	password: 'password',
};
function Login() {
	// state
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	// hook
	const dispatch = useDispatch();
	const history = useHistory();

	// handle
	const onChangeText = (event, type) => {
		switch (type) {
			case TypeInput.user:
				setUser(event.target.value);
				break;
			case TypeInput.password:
				setPassword(event.target.value);
				break;
			default:
				break;
		}
	};
	const onSave = async () => {
		const data = { user, password };
		if (user && password) {
			const { message, myUser } = await baseAPI.add(`${TypeApi.user}/login`, data);
			if (message === 'SUCCESS') {
				await dispatch(LoginUser(myUser));
				history.push('/');
			} else {
				messageAnt.warn(message);
			}
		} else {
			messageAnt.warn('Không được bỏ trống thông tin nào !');
		}
		setUser('');
		setPassword('');
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
				<div className={style.item_form_dang_nhap} style={{ marginTop: '45px' }}>
					<div className={style.input_field}>
						<input
							id="email"
							value={user}
							onChange={(e) => onChangeText(e, TypeInput.user)}
							required
						/>
						<label htmlFor="email" style={{ width: '140px' }}>
							Email hoặc SĐT
						</label>
					</div>
				</div>
				<div className={style.item_form_dang_nhap}>
					<div className={style.input_field}>
						<input
							type="password"
							id="pass"
							value={password}
							onChange={(e) => onChangeText(e, TypeInput.password)}
							required
						/>
						<label htmlFor="password" style={{ width: '100px' }}>
							Password
						</label>
					</div>
				</div>
				<div className={style.item_form_dang_nhap} style={{ marginTop: '15px' }}>
					<div className={style.action_dang_nhap}>
						<Checkbox>Lưu mật khẩu cho lần đăng nhập tiếp theo</Checkbox>
					</div>
				</div>
				<div className={style.item_form_dang_nhap}>
					<div className={style.action_dang_nhap}>
						<button onClick={onSave}>Đăng nhập</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
