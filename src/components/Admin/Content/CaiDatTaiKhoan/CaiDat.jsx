import React from 'react';
import {
	Button,
	DatePicker,
	Form,
	Input,
	Modal,
	Radio,
	Select,
	Switch,
	Upload,
} from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { BASE_URL_IMAGE } from '../../../../util/TypeApi';
import style from './styles.module.css';
// import PropTypes from 'prop-types';
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
const { Option } = Select;
function CaiDat() {
	const [form] = Form.useForm();
	const [value, setValue] = React.useState(1);
	const [linkFile, setLinkFile] = React.useState('');
	const [fileList, setFileList] = React.useState([]);
	const [previewVisible, setPreviewVisible] = React.useState(false);
	const [previewImage, setPreviewImage] = React.useState('');
	const [previewTitle, setPreviewTitle] = React.useState('');

	const onFinish = (values) => {};
	const onChangeRadios = (e) => {
		setValue(`${e.target.value}`);
	};
	function onChangeStatus(checked) {
		console.log(`switch to ${checked}`);
	}
	const onChange = (info) => {
		setFileList(info.fileList);
		switch (info.file.status) {
			case 'uploading':
				break;
			case 'done':
				setLinkFile(info.file.response.fileNameInServer);
				break;
			default:
				// message.error(`${info.file.name}`);
				setLinkFile('');
				break;
		}
	};
	const linkFileView = linkFile
		? BASE_URL_IMAGE + linkFile
		: 'https://img.icons8.com/cotton/344/image--v1.png';

	// JSX
	const UpFile = {
		name: 'file',
		action: `${BASE_URL_IMAGE}upload`,
		multiple: true,
		onChange: (info) => onChange(info),
	};
	const handleCancel = () => setPreviewVisible(false);
	return (
		<div className={style.my_account_profile}>
			<Form
				name="nest-messages"
				onFinish={onFinish}
				validateMessages={validateMessages}
				form={form}
			>
				<div className={style.content_left}>
					<div className={style.my_account_profile__left}>
						{/*<div className={style.my_account_profile__left_item}>*/}
						{/*	<div className={style.my_account_profile__left_item_title}>*/}
						{/*		Tên đăng nhập :*/}
						{/*	</div>*/}
						{/*	<div className={style.my_account_profile__left_item_input}>*/}
						{/*		<Form.Item>*/}
						{/*			<div style={{ marginTop: '0px' }}>Maisumule</div>*/}
						{/*		</Form.Item>*/}
						{/*	</div>*/}
						{/*</div>*/}
						<div className={style.my_account_profile__left_item}>
							<div className={style.my_account_profile__left_item_title}>Tên :</div>
							<div className={style.my_account_profile__left_item_input}>
								<Form.Item name={'name'}>
									<Input />
								</Form.Item>
							</div>
						</div>
						<div className={style.my_account_profile__left_item}>
							<div className={style.my_account_profile__left_item_title}>Email :</div>
							<div className={style.my_account_profile__left_item_input}>
								<Form.Item name={'email'}>
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
										// addonBefore={prefixSelector}
										style={{ width: '100%' }}
									/>
								</Form.Item>
							</div>
						</div>
						<div className={style.my_account_profile__left_item}>
							<div className={style.my_account_profile__left_item_title}>Giới tính :</div>
							<div className={style.my_account_profile__left_item_input}>
								<Form.Item name={'gender'}>
									<Radio.Group
										onChange={onChangeRadios}
										value={value.toString()}
										defaultValue={value.toString()}
									>
										<Radio value={'1'}>Nam</Radio>
										<Radio value={'2'}>Nữ</Radio>
										<Radio value={'3'}>Khác</Radio>
									</Radio.Group>
								</Form.Item>
							</div>
						</div>
						<div className={style.my_account_profile__left_item}>
							<div className={style.my_account_profile__left_item_title}>Ngày sinh :</div>
							<div className={style.my_account_profile__left_item_input}>
								<Form.Item>
									<DatePicker
									// format={dateFormat}
									// value={date}
									// defaultValue={date}
									// onChange={onChangeDate}
									/>
								</Form.Item>
							</div>
						</div>
						<div className={style.my_account_profile__left_item}>
							<div className={style.my_account_profile__left_item_title}>Địa chỉ :</div>
							<div className={style.my_account_profile__left_item_input}>
								<Form.Item name={'address'}>
									<Input.TextArea />
								</Form.Item>
							</div>
						</div>
						<div className={style.my_account_profile__left_item}>
							<div className={style.my_account_profile__left_item_title}>Chức vụ :</div>
							<div className={style.my_account_profile__left_item_input}>
								<Form.Item name="gender" rules={[{ required: true }]}>
									<Select allowClear>
										<Option value="quanly">Quản lý </Option>
										<Option value="nhanvien">Nhân viên </Option>
										<Option value="ketoan">Kế toán </Option>
									</Select>
								</Form.Item>
							</div>
						</div>
						<div className={style.my_account_profile__left_item}>
							<div className={style.my_account_profile__left_item_title}>
								Trạng thái :
							</div>
							<div className={style.my_account_profile__left_item_input}>
								<Switch defaultChecked onChange={onChangeStatus} />
							</div>
						</div>
					</div>
					<div className={style.my_account_profile__right}>
						{/*mk hiển thị trang hồ sơ*/}
						<div
							className={style.my_account_profile__left_item}
							id="left_item_password_1"
						>
							<div className={style.my_account_profile__left_item_title}>
								Mật khẩu HT:
							</div>
							<div className={style.my_account_profile__left_item_input}>
								<Form.Item name={'password'}>
									<Input.Password
										prefix={<LockOutlined className="site-form-item-icon" />}
										type="password"
										placeholder="Password"
									/>
								</Form.Item>
							</div>
						</div>
						{/*mk hiển thị trang chỉnh sửa hồ sơ*/}
						<div
							className={style.my_account_profile__left_item}
							id="left_item_password_2"
						>
							<div className={style.my_account_profile__left_item_title}>
								Mật khẩu mới :
							</div>
							<div className={style.my_account_profile__left_item_input}>
								<Form.Item name={'new_password'}>
									<Input.Password
										prefix={<LockOutlined className="site-form-item-icon" />}
										type="password"
										placeholder="Password"
									/>
								</Form.Item>
							</div>
						</div>
						<div
							className={style.my_account_profile__left_item}
							id="left_item_password_3"
						>
							<div className={style.my_account_profile__left_item_title}>
								Nhập lại mật khẩu :
							</div>
							<div className={style.my_account_profile__left_item_input}>
								<Form.Item name={'check_new_password'}>
									<Input.Password
										prefix={<LockOutlined className="site-form-item-icon" />}
										type="password"
										placeholder="Password"
									/>
								</Form.Item>
							</div>
						</div>
						{/*het pass*/}
						<div className={style.my_account_profile__left_item}>
							<div className={style.my_account_profile__left_item_title}>
								Ảnh avatar :
							</div>
							<div className={style.my_account_profile__left_item_input}>
								<Form.Item>
									<Upload
										{...UpFile}
										listType="picture-card"
										fileList={fileList}
										// onPreview={handlePreview}
									>
										{linkFile.length <= 0 ? (
											<img
												alt="example"
												src={linkFileView}
												style={{ width: 50, height: 50 }}
											/>
										) : null}
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
									htmlType="submit"
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
	);
}

CaiDat.propTypes = {};

CaiDat.defaultProps = {};

export default CaiDat;
