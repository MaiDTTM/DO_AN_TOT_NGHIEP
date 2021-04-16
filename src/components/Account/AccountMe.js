import React from 'react';
import Advertisement from '../Header/advertisement/advertisement';
import MenuHome from '../Header/menuHeader/MenuHome';
import Styles from '../Content/DetailProduct/Style.module.css';
import style from './styles.module.css';
import {
	Avatar,
	Button,
	Input,
	Form,
	Radio,
	Select,
	DatePicker,
	Upload,
	message,
} from 'antd';
import {
	UserOutlined,
	EditOutlined,
	SmileTwoTone,
	CheckCircleTwoTone,
	LockOutlined,
	LoadingOutlined,
	PlusOutlined,
} from '@ant-design/icons';
// import PropTypes from 'prop-types';
const { Option } = Select;
const Style = {
	width: '100%',
	height: '60px',
	display: 'flex',
	justifyContent: 'center',
	backgroundColor: '#ea2190',
	float: 'left',
};
const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
};
function getBase64(img, callback) {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
}
const img = <Avatar shape="square" size={64} icon={<UserOutlined />} />;
function beforeUpload(file) {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
	if (!isJpgOrPng) {
		message.error('You can only upload JPG/PNG file!');
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error('Image must smaller than 2MB!');
	}
	return isJpgOrPng && isLt2M;
}
function AccountMe() {
	const [value, setValue] = React.useState(1);
	const [loading, setLoading] = React.useState(false);
	const [imageUrl, setImageUrl] = React.useState('');
	const onFinish = (values) => {
		console.log(values);
	};
	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);
	function onChange(value) {
		console.log('changed', value);
	}
	const handleChange = (info) => {
		if (info.file.status === 'uploading') {
			setLoading(true);
			return;
		}
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			getBase64(
				info.file.originFileObj,
				(imageUrl) => setLoading(false),
				setImageUrl(imageUrl)
			);
		}
	};
	const prefixSelector = (
		<Form.Item name="prefix" noStyle>
			<Select style={{ width: 70 }} defaultValue="86">
				<Option value="86">+86</Option>
				<Option value="87">+87</Option>
			</Select>
		</Form.Item>
	);
	const onChangeRadios = (e) => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
	};
	return (
		<div className={Styles.header_home}>
			<div className="top_header width-common" style={Style}>
				<Advertisement />
			</div>
			<div className="from_menu_header">
				<MenuHome />
			</div>
			<div className={style.content_account}>
				<div className={style.user_page_sidebar}>
					<div className={style.user_page_brief}>
						<Avatar
							className={style.user_page_brief__avatar}
							size={64}
							icon={<UserOutlined />}
						/>
						<div className={style.user_page_brief__right}>
							<div className={style.user_page_brief__username}>maisumule</div>
							<div>
								<Button icon={<EditOutlined />}>Sửa hồ sơ</Button>
							</div>
						</div>
					</div>
					<div className={style.user_page_sidebar_menu}>
						<ul style={{ listStyle: 'none' }}>
							<li>
								<SmileTwoTone style={{ marginRight: '10px' }} />
								Hồ sơ của bạn
							</li>
							<li>
								<CheckCircleTwoTone
									twoToneColor="#52c41a"
									style={{ marginRight: '10px' }}
								/>
								Đơn hàng
							</li>
						</ul>
					</div>
				</div>
				<div className={style._3D9BVC}>
					<div className={style.h4QDlo}>
						<div className={style.my_account_section}>
							<div className={style.my_account_section__header}>
								<div className={style.my_account_section__header_left}>
									<div className={style.my_account_section__header_title}>
										Hồ sơ của tôi
									</div>
									<div className={style.my_account_section__header_subtitle}>
										Quản lý thông tin hồ sơ để bảo mật tài khoản
									</div>
								</div>
							</div>
							<div className={style.my_account_profile}>
								<Form
									name="nest-messages"
									onFinish={onFinish}
									validateMessages={validateMessages}
								>
									<div className={style.content_left}>
										<div className={style.my_account_profile__left}>
											<div className={style.my_account_profile__left_item}>
												<div className={style.my_account_profile__left_item_title}>
													Tên đăng nhập :
												</div>
												<div className={style.my_account_profile__left_item_input}>
													<Form.Item>Maisumule</Form.Item>
												</div>
											</div>
											<div className={style.my_account_profile__left_item}>
												<div className={style.my_account_profile__left_item_title}>
													Tên :
												</div>
												<div className={style.my_account_profile__left_item_input}>
													<Form.Item name={['user', 'name']}>
														<Input />
													</Form.Item>
												</div>
											</div>
											<div className={style.my_account_profile__left_item}>
												<div className={style.my_account_profile__left_item_title}>
													Email :
												</div>
												<div className={style.my_account_profile__left_item_input}>
													<Form.Item name={['user', 'email']}>
														<Input />
													</Form.Item>
												</div>
											</div>
											<div className={style.my_account_profile__left_item}>
												<div className={style.my_account_profile__left_item_title}>
													Số điện thoại :
												</div>
												<div className={style.my_account_profile__left_item_input}>
													<Form.Item name="phone">
														<Input
															addonBefore={prefixSelector}
															style={{ width: '100%' }}
														/>
													</Form.Item>
												</div>
											</div>
											<div className={style.my_account_profile__left_item}>
												<div className={style.my_account_profile__left_item_title}>
													Giới tính :
												</div>
												<div className={style.my_account_profile__left_item_input}>
													<Form.Item name="gender">
														<Radio.Group onChange={onChangeRadios} value={value}>
															<Radio value={1}>Nam</Radio>
															<Radio value={2}>Nữ</Radio>
															<Radio value={3}>Khác</Radio>
														</Radio.Group>
													</Form.Item>
												</div>
											</div>
											<div className={style.my_account_profile__left_item}>
												<div className={style.my_account_profile__left_item_title}>
													Ngày sinh :
												</div>
												<div className={style.my_account_profile__left_item_input}>
													<Form.Item>
														<DatePicker />
													</Form.Item>
												</div>
											</div>
											<div className={style.my_account_profile__left_item}>
												<div className={style.my_account_profile__left_item_title}>
													Địa chỉ :
												</div>
												<div className={style.my_account_profile__left_item_input}>
													<Form.Item name={['user', 'address']}>
														<Input.TextArea />
													</Form.Item>
												</div>
											</div>
										</div>
										<div className={style.my_account_profile__right}>
											<div className={style.my_account_profile__left_item}>
												<div className={style.my_account_profile__left_item_title}>
													Mật khẩu :
												</div>
												<div className={style.my_account_profile__left_item_input}>
													<Form.Item>
														<Input.Password
															prefix={<LockOutlined className="site-form-item-icon" />}
															type="password"
															placeholder="Password"
														/>
													</Form.Item>
												</div>
											</div>
											<div className={style.my_account_profile__left_item}>
												<div className={style.my_account_profile__left_item_title}>
													Ảnh avatar :
												</div>
												<div className={style.my_account_profile__left_item_input}>
													<Form.Item>
														<Upload
															name="avatar"
															listType="picture-card"
															className="avatar-uploader"
															showUploadList={false}
															action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
															beforeUpload={beforeUpload}
															onChange={handleChange}
														>
															{imageUrl ? (
																<img
																	src={imageUrl}
																	alt="avatar"
																	style={{ width: '100%' }}
																/>
															) : (
																uploadButton
															)}
														</Upload>
													</Form.Item>
													<div>
														Dụng lượng file tối đa 2 MB
														<br />
														Định dạng:.JPEG, .PNG
													</div>
													<div style={{ color: '#f65353' }}>
														* Click vào ảnh để thay đổi avatar
													</div>
												</div>
											</div>
											<div className={style.my_account_profile__left_item}>
												<div className={style.my_account_profile__left_item_title}>
													<Button style={{ backgroundColor: '#ee4d2d', color: '#fff' }}>
														Lưu
													</Button>
												</div>
											</div>
										</div>
									</div>
								</Form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

AccountMe.propTypes = {};

AccountMe.defaultProps = {};

export default AccountMe;
