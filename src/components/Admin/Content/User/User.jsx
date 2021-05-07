import React, { useState } from 'react';
import {
	Table,
	Space,
	Button,
	Tooltip,
	Popconfirm,
	Input,
	Modal,
	Form,
	Upload,
	InputNumber,
	Select,
	DatePicker,
} from 'antd';
import {
	EditOutlined,
	DeleteOutlined,
	UserAddOutlined,
	HeartTwoTone,
	SearchOutlined,
} from '@ant-design/icons';
import './style.css';
import ImgCrop from 'antd-img-crop';
// import PropTypes from 'prop-types';
const data = [];
const { Search } = Input;
for (let i = 0; i < 100; i++) {
	data.push({
		key: i,
		name: `Name ${i}`,
		gender: 32,
		birthday: '21-11-1999',
		email: 'sukhacbiet1199@gmail.com',
		password: '*******',
		number: '0966382406',
		address: `London Park no. ${i}`,
	});
}
const { Option } = Select;
const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 18 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};
function User() {
	const [form] = Form.useForm();
	const [formEdit] = Form.useForm();
	const onSearch = (value) => console.log(value);
	const [modal1Visible, setModal1Visible] = useState(false);
	const [modal2Visible, setModal2Visible] = useState(false);
	const [fileList, setFileList] = useState([
		{
			uid: '-1',
			name: 'image.png',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		},
	]);
	const columns = [
		{
			title: 'Ảnh',
			width: 100,
			dataIndex: 'image',
			key: 'image',
			fixed: 'left',
		},
		{
			title: 'Tên',
			width: 100,
			dataIndex: 'name',
			key: 'name',
			fixed: 'left',
		},
		{
			title: 'Giới tính',
			width: 100,
			dataIndex: 'gender',
			key: '1',
		},
		{
			title: 'Ngày sinh',
			dataIndex: 'date_of_birth',
			key: '2',
			width: 150,
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: '3',
			width: 150,
		},
		{
			title: 'Số điện thoại',
			dataIndex: 'phone',
			key: '5',
			width: 150,
		},
		{
			title: 'Địa chỉ',
			dataIndex: 'address',
			key: '6',
			width: 150,
		},
		{
			title: 'Trạng thái',
			dataIndex: 'status',
			key: '7',
			width: 150,
		},
		{
			title: 'Chức vụ',
			dataIndex: 'position',
			key: '8',
			width: 150,
		},
		{
			title: 'Hành động',
			key: 'action',
			fixed: 'right',
			width: 100,
			render: (record) => (
				<Space size="middle" style={{ marginLeft: '20px' }}>
					<Button
						icon={<EditOutlined />}
						type="text"
						onClick={() => setModalVisible1(true)}
					/>
					<Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
						<Button icon={<DeleteOutlined />} type="text" />
					</Popconfirm>
				</Space>
			),
		},
	];
	// document.getElementById('add_search').style.display = 'block';
	const handleClick = () => {
		const input = document.getElementById('add_search');
		const button = document.getElementById('button_search');
		input.style.display === 'block'
			? (input.style.display = 'none')
			: (input.style.display = 'block');
		// (input.style.display = 'none')
		// 	? (button.style.display = 'block')
		// 	: (button.style.display = 'none');
	};
	const setModalVisible1 = (modal1Visible) => {
		setModal1Visible(modal1Visible);
	};
	const setModalVisible2 = (modal2Visible) => {
		setModal2Visible(modal2Visible);
	};
	const onChange = ({ fileList: newFileList }) => {
		setFileList(newFileList);
	};
	const onPreview = async (file) => {
		let src = file.url;
		if (!src) {
			src = await new Promise((resolve) => {
				const reader = new FileReader();
				reader.readAsDataURL(file.originFileObj);
				reader.onload = () => resolve(reader.result);
			});
		}
		const image = new Image();
		image.src = src;
		const imgWindow = window.open(src);
		imgWindow.document.write(image.outerHTML);
	};
	const onFinishAdd = (values) => {
		console.log(values);
	};
	const onFinishEdit = (values) => {
		console.log(values);
	};
	const onReset = () => {
		form.resetFields();
	};
	return (
		<div className="content_user">
			<div className="filter_user_content">
				<div style={{ display: 'flex' }}>
					<form action="" className="search-bar">
						{/*<input type="search" name="search" pattern=".*\S.*" required />*/}
						{/*<button className="search-btn" type="submit">*/}
						{/*	<span>Search</span>*/}
						{/*</button>*/}
					</form>
				</div>
				<Button
					icon={<UserAddOutlined />}
					className="button_user_add"
					onClick={() => setModalVisible2(true)}
				>
					Add user
				</Button>
				<HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: '30px' }} />
			</div>
			<div className="table_user">
				<Table
					columns={columns}
					dataSource={data}
					scroll={{ x: 1500, y: 350 }}
					sticky
					style={{ height: '100%', width: '100%' }}
				/>
			</div>
			{/*Modal add*/}
			<Modal
				title={
					<div style={{ display: 'flex', justifyContent: 'center' }}>THÊM NHÂN VIÊN</div>
				}
				centered
				visible={modal2Visible}
				footer={null}
				onCancel={() => setModal2Visible(false)}
			>
				<Form {...layout} form={form} name="control-hooks" onFinish={onFinishAdd}>
					<Form.Item name="image_link" label="Ảnh :" rules={[{ required: true }]}>
						<ImgCrop rotate>
							<Upload
								action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
								listType="picture-card"
								fileList={fileList}
								onChange={onChange}
								onPreview={onPreview}
							>
								{fileList.length < 5 && '+ Upload'}
							</Upload>
						</ImgCrop>
					</Form.Item>
					<Form.Item name="name" label="Tên :" rules={[{ required: true }]}>
						<Input />
					</Form.Item>
					<Form.Item name="gender" label="Giới tính :" rules={[{ required: true }]}>
						<Select allowClear>
							<Option value="nam">Nam</Option>
							<Option value="nu">Nữ</Option>
							<Option value="khac">Khác</Option>
						</Select>
					</Form.Item>
					<Form.Item name="date_of_birth" label="Ngày sinh : ">
						<DatePicker />
					</Form.Item>
					<Form.Item name="email" label="Email :" rules={[{ type: 'email' }]}>
						<Input />
					</Form.Item>
					<Form.Item
						label="Mật khẩu :"
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						name="phone"
						label="Số điện thoại :"
						rules={[{ required: true, message: 'Please input your phone number!' }]}
					>
						<Input style={{ width: '100%' }} />
					</Form.Item>
					<Form.Item name="address" label="Địa chỉ :">
						<Input.TextArea />
					</Form.Item>
					<Form.Item name="gender" label="Chức vụ :" rules={[{ required: true }]}>
						<Select allowClear>
							<Option value="quanly">Quản lý </Option>
							<Option value="nhanvien">Nhân viên </Option>
							<Option value="ketoan">Kế toán </Option>
						</Select>
					</Form.Item>
					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit" style={{ marginRight: 15 }}>
							Submit
						</Button>
						<Button htmlType="button" onClick={onReset}>
							Reset
						</Button>
					</Form.Item>
				</Form>
			</Modal>
			{/*Modal edit*/}
			<Modal
				title={
					<div style={{ display: 'flex', justifyContent: 'center' }}>SỬA NHÂN VIÊN</div>
				}
				centered
				visible={modal1Visible}
				footer={null}
				onCancel={() => setModal1Visible(false)}
			>
				<Form {...layout} form={formEdit} name="control-hooks" onFinish={onFinishEdit}>
					<Form.Item name="image_link" label="Ảnh :" rules={[{ required: true }]}>
						<ImgCrop rotate>
							<Upload
								action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
								listType="picture-card"
								fileList={fileList}
								onChange={onChange}
								onPreview={onPreview}
							>
								{fileList.length < 5 && '+ Upload'}
							</Upload>
						</ImgCrop>
					</Form.Item>
					<Form.Item name="name" label="Tên :" rules={[{ required: true }]}>
						<Input />
					</Form.Item>
					<Form.Item name="gender" label="Giới tính :" rules={[{ required: true }]}>
						<Select allowClear>
							<Option value="nam">Nam</Option>
							<Option value="nu">Nữ</Option>
							<Option value="khac">Khác</Option>
						</Select>
					</Form.Item>
					<Form.Item name="date_of_birth" label="Ngày sinh : ">
						<DatePicker />
					</Form.Item>
					<Form.Item name="email" label="Email :" rules={[{ type: 'email' }]}>
						<Input />
					</Form.Item>
					<Form.Item
						label="Mật khẩu :"
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						name="phone"
						label="Số điện thoại :"
						rules={[{ required: true, message: 'Please input your phone number!' }]}
					>
						<Input style={{ width: '100%' }} />
					</Form.Item>
					<Form.Item name="address" label="Địa chỉ :">
						<Input.TextArea />
					</Form.Item>
					<Form.Item name="gender" label="Chức vụ :" rules={[{ required: true }]}>
						<Select allowClear>
							<Option value="quanly">Quản lý </Option>
							<Option value="nhanvien">Nhân viên </Option>
							<Option value="ketoan">Kế toán </Option>
						</Select>
					</Form.Item>
					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit" style={{ marginRight: 15 }}>
							Submit
						</Button>
						<Button htmlType="button" onClick={onReset}>
							Reset
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
}

User.propTypes = {};

User.defaultProps = {};

export default User;
