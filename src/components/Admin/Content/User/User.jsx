import React from 'react';
import {
	Form,
	Select,
	Modal,
	Table,
	Space,
	Button,
	Tooltip,
	Popconfirm,
	Input,
	Row,
	Col,
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
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};
const style = { padding: '8px 0' };
const { Option } = Select;
const config = {
	rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};
function User() {
	const [modalVisible, setModalVisible] = React.useState(false);
	const [modal2Visible, setModal2Visible] = React.useState(false);
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	function setModal0Visible(modalVisible) {
		setModalVisible({ modalVisible });
		const remo = document.getElementsByClassName('ant-modal-footer');
		remo.innerHTML = '';
	}
	function setModal1Visible(modal2Visible) {
		setModal2Visible({ modal2Visible });
	}
	const prefixSelector = (
		<Form.Item name="prefix" noStyle>
			<Select style={{ width: 70 }}>
				<Option value="86">+86</Option>
				<Option value="87">+87</Option>
			</Select>
		</Form.Item>
	);
	const columns = [
		{
			title: 'Full Name',
			width: 100,
			dataIndex: 'name',
			key: 'name',
			fixed: 'left',
		},
		{
			title: 'Gender',
			width: 100,
			dataIndex: 'gender',
			key: '1',
			fixed: 'left',
		},
		{
			title: 'Birthday',
			dataIndex: 'birthday',
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
			title: 'Password',
			dataIndex: 'password',
			key: '4',
			width: 150,
		},
		{
			title: 'Number phone',
			dataIndex: 'number',
			key: '5',
			width: 150,
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: '6',
			width: 150,
		},
		{
			title: 'Action',
			key: 'operation',
			fixed: 'right',
			width: 100,
			render: () => {
				return (
					<Space size="middle" style={{ marginLeft: '20px' }}>
						<Button
							icon={<EditOutlined />}
							type="text"
							onClick={() => setModal1Visible(true)}
						/>
						<Modal
							title="EDIT USER"
							centered
							visible={modal2Visible.modal2Visible}
							onOk={() => setModal2Visible(false)}
							onCancel={() => setModal2Visible(false)}
						>
							<Form
								name="basic"
								initialValues={{ remember: true }}
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
							>
								<Form.Item
									label="Username"
									name="username"
									rules={[{ required: true, message: 'Please input your username!' }]}
								>
									<Input />
								</Form.Item>

								<Form.Item
									label="Password"
									name="password"
									rules={[{ required: true, message: 'Please input your password!' }]}
								>
									<Input.Password />
								</Form.Item>
								<Form.Item
									name="phone"
									label="Phone Number"
									rules={[{ required: true, message: 'Please input your phone number!' }]}
								>
									<Input addonBefore={prefixSelector} style={{ width: '100%' }} />
								</Form.Item>
								<Form.Item
									name="email"
									label="E-mail"
									rules={[
										{
											type: 'email',
											message: 'The input is not valid E-mail!',
										},
										{
											required: true,
											message: 'Please input your E-mail!',
										},
									]}
								>
									<Input />
								</Form.Item>
							</Form>
						</Modal>
						<Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
							<Button icon={<DeleteOutlined />} type="text" />
						</Popconfirm>
					</Space>
				);
			},
		},
	];
	const onSearch = (value) => console.log(value);
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
	const [form] = Form.useForm();
	const onGenderChange = (value) => {
		switch (value) {
			case 'male':
				form.setFieldsValue({ note: 'Hi, man!' });
				return;
			case 'female':
				form.setFieldsValue({ note: 'Hi, lady!' });
				return;
			case 'other':
				form.setFieldsValue({ note: 'Hi there!' });
		}
	};
	return (
		<div className="content_user">
			<div className="filter_user_content">
				<div style={{ display: 'flex' }}>
					<div id="add_search">
						<Search
							placeholder="input search text"
							onSearch={onSearch}
							style={{ width: 200 }}
						/>
					</div>
					<Tooltip title="search">
						<Button
							type="primary"
							shape="circle"
							icon={<SearchOutlined />}
							onClick={handleClick}
							id="button_search"
						/>
					</Tooltip>
				</div>
				<Button
					icon={<UserAddOutlined />}
					className="button_user_add"
					onClick={() => setModal0Visible(true)}
				>
					Add user
				</Button>
				<Modal
					title="ADD DEVICE"
					centered
					visible={modalVisible.modalVisible}
					onOk={() => setModalVisible(false)}
					onCancel={() => setModalVisible(false)}
				>
					<Form
						name="basic"
						form={form}
						initialValues={{ remember: true }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={8}>
								<div style={style}>
									<Form.Item
										name={['user', 'name']}
										// label="Name"
										rules={[{ required: true }]}
									>
										<Input placeholder="Full name" />
									</Form.Item>
								</div>
							</Col>
							<Col className="gutter-row" span={8}>
								<div style={style}>
									<Form.Item name="gender" rules={[{ required: true }]}>
										<Select
											placeholder="Select gender"
											onChange={onGenderChange}
											allowClear
										>
											<Option value="male">male</Option>
											<Option value="female">female</Option>
											<Option value="other">other</Option>
										</Select>
									</Form.Item>
								</div>
							</Col>
							<Col className="gutter-row" span={8}>
								<div style={style}>
									<Form.Item name="date-picker" {...config}>
										<DatePicker placeholder="Birthday" />
									</Form.Item>
								</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col className="gutter-row" span={8}>
								<div style={style}>
									<Form.Item
										name={['user', 'email']}
										// label="Email"
										rules={[{ type: 'email' }]}
									>
										<Input placeholder="Email" />
									</Form.Item>
								</div>
							</Col>
							<Col className="gutter-row" span={8}>
								<div style={style}>
									<Form.Item
										name="password"
										// label="Password"
										rules={[
											{
												required: true,
												message: 'Please input your password!',
											},
										]}
										hasFeedback
									>
										<Input.Password placeholder="Password" />
									</Form.Item>
								</div>
							</Col>
							<Col className="gutter-row" span={8}>
								<div style={style}>
									<Form.Item
										name="phone"
										// label="Phone Number"
										rules={[
											{ required: true, message: 'Please input your phone number!' },
										]}
									>
										<Input
											addonBefore={prefixSelector}
											style={{ width: '100%' }}
											placeholder="Phone Number"
										/>
									</Form.Item>
								</div>
							</Col>
						</Row>
						<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
							<Col span={8}>
								<div style={style}>
									<Form.Item label="Address">
										<Input.Group compact>
											<Form.Item
												name={['address', 'province']}
												noStyle
												rules={[{ required: true, message: 'Province is required' }]}
											>
												<Select placeholder="Select province">
													<Option value="Zhejiang">Zhejiang</Option>
													<Option value="Jiangsu">Jiangsu</Option>
												</Select>
											</Form.Item>
											<Form.Item
												name={['address', 'street']}
												noStyle
												rules={[{ required: true, message: 'Street is required' }]}
											>
												<Input style={{ width: '50%' }} placeholder="Input street" />
											</Form.Item>
										</Input.Group>
									</Form.Item>
								</div>
							</Col>
						</Row>
					</Form>
				</Modal>
				<HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: '30px' }} />
			</div>
			<div className="table_user">
				<Table
					columns={columns}
					dataSource={data}
					scroll={{ x: 1500, y: 510 }}
					sticky
					style={{ height: '100%', width: '100%' }}
				/>
			</div>
		</div>
	);
}

User.propTypes = {};

User.defaultProps = {};

export default User;
