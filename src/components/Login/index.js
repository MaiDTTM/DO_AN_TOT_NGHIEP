import React, { useState } from 'react';
import { Checkbox, message as messageAnt } from 'antd';
// style
import styles from './index.module.css';
import logo from '../../img/logotet2019.png';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import baseAPI from '../../axios/baseAPI';
import { TypeApi } from '../../util/TypeApi';
import { LoginUser } from '../../actions/userAction';
import { GoogleLogin } from 'react-google-login';
import { createFromIconfontCN, GooglePlusOutlined } from '@ant-design/icons';
// import SocialLogin from 'react-social-login';
//const
const IconFont = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
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
	//login
	const responseGoogle = (response) => {
		console.log(response);
	};
	// const handleSocialLogin = (user) => {
	// 	console.log(user);
	// };

	// const handleSocialLoginFailure = (err) => {
	// 	console.error(err);
	// };
	return (
		<div className={styles.dang_nhap}>
			<div className={styles.herader_dangnhap}>
				<Link to={'/'}>
					<img src={logo} alt={'logo'} />
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
				<div className={styles.item_form_dang_nhap} style={{ marginTop: '45px' }}>
					<div className={styles.input_field}>
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
					</div>
				</div>
				<div className={styles.item_form_dang_nhap}>
					<div className={styles.input_field}>
						<button
							onClick={onSave}
							style={{
								width: '90%',
								backgroundColor: '#fe6a00',
								color: '#fff',
								cursor: 'pointer',
								borderRadius: 5,
								fontSize: 18,
							}}
						>
							Đăng nhập
						</button>
					</div>
				</div>
				<div className={styles.login_social}>
					<div className={styles.IFLxoY}>
						<div className={styles._3svg61}></div>
						<span className={styles._1ZEpVL}>HOẶC</span>
						<div className={styles._3svg61}></div>
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						{/* <SocialButton*/}
						{/*	provider="facebook"*/}
						{/*	appId="YOUR_APP_ID"*/}
						{/*	onLoginSuccess={handleSocialLogin}*/}
						{/*	onLoginFailure={handleSocialLoginFailure}*/}
						{/* >*/}
						<div className={styles.login_fb}>
							<div>
								<span className={styles.login_social_icon}>
									<IconFont type="icon-facebook" />
								</span>
								<span className={styles.login_social_text}>Facebook</span>
							</div>
						</div>
						{/*</SocialButton>*/}
						<GoogleLogin
							clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
							render={(renderProps) => (
								<div className={styles.login_gg} onClick={renderProps.onClick}>
									<div>
										<span className={styles.login_social_icon}>
											<GooglePlusOutlined />
										</span>
										<span className={styles.login_social_text}>Google</span>
									</div>
								</div>
							)}
							buttonText="Login"
							onSuccess={responseGoogle}
							onFailure={responseGoogle}
							cookiePolicy={'single_host_origin'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
