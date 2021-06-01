import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../img/logotet2019.png';
import styles from './index.module.css';
import { Checkbox, message as messageAnt } from 'antd';
import baseAPI from '../../../axios/baseAPI';
import { TypeApi } from '../../../util/TypeApi';
import { useDispatch } from 'react-redux';
import { loginAdmin } from '../../../actions/adminAction';
// import PropTypes from 'prop-types';

const TypeInput = {
	user: 'user',
	password: 'password',
};
function LoginAdmin() {
	// hook
	const dispatch = useDispatch();
	const history = useHistory();
	const [userAdmin, setUserAdmin] = useState('');
	const [password, setPassword] = useState('');
	// handle
	const onChangeText = (event, type) => {
		switch (type) {
			case TypeInput.user:
				setUserAdmin(event.target.value);
				break;
			case TypeInput.password:
				setPassword(event.target.value);
				break;
			default:
				break;
		}
	};
	const onSave = async () => {
		const data = { userAdmin, password };
		if (userAdmin && password) {
			const { message, Admin } = await baseAPI.add(`${TypeApi.admin}/login`, data);
			if (message === 'SUCCESS') {
				await dispatch(loginAdmin(Admin));
				history.push('/homeAdmin');
			} else {
				messageAnt.warn(message);
			}
		} else {
			messageAnt.warn('Không được bỏ trống thông tin nào !');
		}
		setUserAdmin('');
		setPassword('');
	};
	return (
		<div className={styles.dang_nhap}>
			<div className={styles.herader_dangnhap}>
				<img src={logo} />
				<div className={styles.verticalLine}>
					<p>
						<b>Hãy đăng nhập để vào trang quản trị của bạn !</b>
					</p>
				</div>
				<div></div>
				<hr />
			</div>
			<div className={styles.title}>
				<h3>ĐĂNG NHẬP VỚI EMAIL VÀ SỐ ĐIỆN THOẠI</h3>
			</div>
			<div className={styles.form_dang_nhap}>
				<div className={styles.item_form_dang_nhap} style={{ marginTop: '45px' }}>
					<div className={styles.input_field}>
						<input
							id="email"
							value={userAdmin}
							onChange={(e) => onChangeText(e, TypeInput.user)}
							required
						/>
						<label htmlFor="email" style={{ width: '140px' }}>
							Email hoặc SĐT
						</label>
					</div>
				</div>
				<div className={styles.item_form_dang_nhap}>
					<div className={styles.input_field}>
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
				<div className={styles.item_form_dang_nhap} style={{ marginTop: '15px' }}>
					<div className={styles.action_dang_nhap}>
						<Checkbox>Lưu mật khẩu cho lần đăng nhập tiếp theo</Checkbox>
						<Link to={'/registerAdmin'}>
							<div
								style={{
									color: '#45c326',
									textDecoration: 'underline',
									cursor: 'pointer',
								}}
							>
								Register now !
							</div>
						</Link>
					</div>
				</div>
				<div className={styles.item_form_dang_nhap}>
					<div className={styles.action_dang_nhap}>
						<button onClick={onSave}>Đăng nhập</button>
					</div>
				</div>
			</div>
		</div>
	);
}

LoginAdmin.propTypes = {};

LoginAdmin.defaultProps = {};

export default LoginAdmin;
