import React from 'react';
import style from '../styles.module.css';
import {
	Avatar,
	Button,
	DatePicker,
	Form,
	Input,
	message,
	Modal,
	Radio,
	Select,
	Upload,
} from 'antd';
import {
	LoadingOutlined,
	LockOutlined,
	PlusOutlined,
	UserOutlined,
} from '@ant-design/icons';
import './style.css';
// import PropTypes from 'prop-types';
const { Option } = Select;
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
function HoSo(props) {
	const { disabled } = props;
	const [value, setValue] = React.useState(1);
	const [previewVisible, setPreviewVisible] = React.useState(false);
	const [previewImage, setPreviewImage] = React.useState('');
	const [previewTitle, setPreviewTitle] = React.useState('');
	const [fileList, setFileList] = React.useState([
		{
			uid: '-1',
			name: 'image.png',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		},
	]);

	// func
	const handleCancel = () => setPreviewVisible(false);

	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}
		setPreviewImage(file.url || file.preview);
		setPreviewVisible(true);
		setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
	};
	const handleChange = ({ fileList }) => {
		setFileList([fileList[fileList.length - 1]]);
	};

	const onFinish = (values) => {
		console.log(values);
	};

	const onChangeRadios = (e) => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
	};

	// JSX
	const prefixSelector = (
		<Form.Item name="prefix" noStyle>
			<Select style={{ width: 70 }} defaultValue="86">
				<Option value="86">+86</Option>
				<Option value="87">+87</Option>
			</Select>
		</Form.Item>
	);

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	return (
		<div>
			<div className={style.my_account_section__header}>
				<div className={style.my_account_section__header_left}>
					<div className={style.my_account_section__header_title}>Hồ sơ của tôi</div>
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
									<Form.Item>
										<div style={{ marginTop: '0px' }}>Maisumule</div>
									</Form.Item>
								</div>
							</div>
							<div className={style.my_account_profile__left_item}>
								<div className={style.my_account_profile__left_item_title}>Tên :</div>
								<div className={style.my_account_profile__left_item_input}>
									<Form.Item name={['user', 'name']}>
										<Input disabled={disabled} />
									</Form.Item>
								</div>
							</div>
							<div className={style.my_account_profile__left_item}>
								<div className={style.my_account_profile__left_item_title}>Email :</div>
								<div className={style.my_account_profile__left_item_input}>
									<Form.Item name={['user', 'email']}>
										<Input disabled={disabled} />
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
											disabled={disabled}
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
										<Radio.Group
											onChange={onChangeRadios}
											value={value}
											disabled={disabled}
										>
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
										<DatePicker disabled={disabled} />
									</Form.Item>
								</div>
							</div>
							<div className={style.my_account_profile__left_item}>
								<div className={style.my_account_profile__left_item_title}>Địa chỉ :</div>
								<div className={style.my_account_profile__left_item_input}>
									<Form.Item name={['user', 'address']}>
										<Input.TextArea disabled={disabled} />
									</Form.Item>
								</div>
							</div>
						</div>
						<div className={style.my_account_profile__right}>
							{/*mk hiển thị trang hồ sơ*/}
							<div
								className={style.my_account_profile__left_item}
								style={{ display: 'block' }}
								id="left_item_password_1"
							>
								<Form.Item label="Mật khẩu HT:">
									<Input.Password
										prefix={<LockOutlined className="site-form-item-icon" />}
										type="password"
										placeholder="Password"
										disabled={disabled}
									/>
								</Form.Item>
							</div>
							{/*mk hiển thị trang chỉnh sửa hồ sơ*/}
							<div
								className={style.my_account_profile__left_item}
								style={{ display: 'none' }}
								id="left_item_password_2"
							>
								<Form.Item label="Mật khẩu mới :">
									<Input.Password
										prefix={<LockOutlined className="site-form-item-icon" />}
										type="password"
										placeholder="Password"
										disabled={disabled}
									/>
								</Form.Item>
							</div>
							<div
								className={style.my_account_profile__left_item}
								style={{ display: 'none' }}
								id="left_item_password_3"
							>
								<Form.Item label="Nhập lại mật khẩu :">
									<Input.Password
										prefix={<LockOutlined className="site-form-item-icon" />}
										type="password"
										placeholder="Password"
										disabled={disabled}
									/>
								</Form.Item>
							</div>
							{/*het pass*/}
							<div className={style.my_account_profile__left_item}>
								<div className={style.my_account_profile__left_item_title}>
									Ảnh avatar :
								</div>
								<div className={style.my_account_profile__left_item_input}>
									<Form.Item>
										<Upload
											action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
											listType="picture-card"
											fileList={fileList}
											onPreview={handlePreview}
											onChange={handleChange}
											disabled={disabled}
										>
											{fileList.length >= 8 ? null : uploadButton}
										</Upload>
										<Modal
											visible={previewVisible}
											title={previewTitle}
											footer={null}
											onCancel={handleCancel}
										>
											<img alt="example" style={{ width: '100%' }} src={previewImage} />
										</Modal>
									</Form.Item>
									<div>
										Dung lượng file tối đa 2 MB
										<br />
										Định dạng:.JPEG, .PNG
									</div>
									<div style={{ color: '#f65353', display: 'none' }} id="chu_y">
										* Click vào ảnh để thay đổi avatar
									</div>
								</div>
							</div>
							<div className={style.my_account_profile__left_item}>
								<div className={style.my_account_profile__left_item_title}>
									<Button
										id="left_item_password_4"
										style={{ backgroundColor: '#ee4d2d', color: '#fff', display: 'none' }}
									>
										Lưu
									</Button>
								</div>
							</div>
						</div>
					</div>
				</Form>
			</div>
		</div>
	);
}

HoSo.propTypes = {};

HoSo.defaultProps = {};

export default HoSo;
