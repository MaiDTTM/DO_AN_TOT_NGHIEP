import { Button, Table, Modal, Form, Popconfirm, message, Switch } from 'antd';
import React, { useState } from 'react';
import { CopyOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import PropTypes from 'prop-types';

// const
const layout = {
	labelCol: {
		span: 5,
	},
	wrapperCol: {
		span: 19,
	},
};
const dataSource = [
	{
		key: '1',
		name: 'Mike',
		age: 32,
		address: '10 Downing Street',
	},
	{
		key: '2',
		name: 'John',
		age: 42,
		address: '10 Downing Street',
	},
];
function KhachHang() {
	const [form2] = Form.useForm();
	const dispatch = useDispatch();
	const [visibleCopy, setVisibleCopy] = useState(false);
	const [columnsTable, setColumnsTable] = React.useState([]);
	const [status, setStatus] = useState(true);
	const [keyEdit, setKeyEdit] = React.useState('');
	const [previewVisible, setPreviewVisible] = useState(false);
	const [modal1Visible, setModal1Visible] = React.useState(false);

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			filters: [
				{
					text: 'Joe',
					value: 'Joe',
				},
				{
					text: 'Jim',
					value: 'Jim',
				},
				{
					text: 'Submenu',
					value: 'Submenu',
					children: [
						{
							text: 'Green',
							value: 'Green',
						},
						{
							text: 'Black',
							value: 'Black',
						},
					],
				},
			],
			onFilter: (value, record) => record.name.indexOf(value) === 0,
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ['descend'],
		},
		{
			title: 'Email',
			dataIndex: 'email',
			filters: [],
			onFilter: (value, record) => record.email.indexOf(value) === 0,
			sorter: (a, b) => a.email.length - b.email.length,
			sortDirections: ['descend'],
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
			defaultSortOrder: 'descend',
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: 'Gender',
			dataIndex: 'gender',
			filters: [
				{
					text: 'Nam',
					value: 'nam',
				},
				{
					text: 'Nữ',
					value: 'nu',
				},
				{
					text: 'Khác',
					value: 'khac',
				},
				{
					text: 'Submenu',
					value: 'Submenu',
					children: [
						{
							text: 'Green',
							value: 'Green',
						},
						{
							text: 'Black',
							value: 'Black',
						},
					],
				},
			],
			onFilter: (value, record) => record.gender.indexOf(value) === 0,
			sorter: (a, b) => a.gender.length - b.gender.length,
			sortDirections: ['descend'],
		},
		{
			title: 'Ngày sinh',
			dataIndex: 'date_of_birth',
			defaultSortOrder: 'descend',
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: 'Address',
			dataIndex: 'address',
			filters: [],
			filterMultiple: false,
			onFilter: (value, record) => record.address.indexOf(value) === 0,
			sorter: (a, b) => a.address.length - b.address.length,
			sortDirections: ['descend', 'ascend'],
		},
		{
			title: 'Ảnh đại diện',
			dataIndex: 'image',
		},
		{
			title: 'Trạng thái',
			dataIndex: 'status',
		},
		{
			title: 'Action',
			dataIndex: '',
			key: 'x',
			render: (record) => {
				return (
					<div style={{ display: 'flex', justifyContent: 'space-around' }}>
						<Button
							onClick={() => handleEdit(true, record._id)}
							type="text"
							style={{ color: '#4cd3d7' }}
						>
							<EditOutlined />
						</Button>
						<Popconfirm
							title="Sure to delete?"
							onConfirm={() => handleDelete(record._id)}
						>
							<Button
								style={{ color: '#ea506f' }}
								type="text"
								icon={<DeleteOutlined />}
							/>
						</Popconfirm>
					</div>
				);
			},
		},
	];

	const handleDelete = () => {};
	const handleEdit = (modal1Visible, key) => {
		setKeyEdit(key);
		setModal1Visible(modal1Visible);
	};
	const onFinishEdit = async (values) => {};
	const handleSwitch = (checked) => {
		console.log('checked', checked); // MongLV log fix bug
		form2.setFieldsValue({
			status: checked,
		});
	};
	//func
	function onChange(pagination, filters, sorter, extra) {
		console.log('params', pagination, filters, sorter, extra);
	}
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
				{/*modal edit*/}
				<Modal
					title={
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							CẬP NHẬT TÀI KHOẢN
						</div>
					}
					centered
					style={{ top: 20 }}
					visible={modal1Visible}
					footer={null}
					onCancel={() => setModal1Visible(false)}
				>
					<Form
						{...layout}
						form={form2}
						name="basic"
						initialValues={{ remember: true }}
						onFinish={onFinishEdit}
					>
						<Form.Item name="status" label="Tắt/Bật User" style={{ marginLeft: '10px' }}>
							<Switch defaultChecked={status} onChange={handleSwitch} />
						</Form.Item>
						<Form.Item label="Password" name="password">
							<Popconfirm
								title="Bạn muốn reset lại mật khẩu ?"
								okText="Yes"
								cancelText="No"
								// onConfirm={handleResetPass}
							>
								<Button type={'danger'}>Reset</Button>
							</Popconfirm>{' '}
							{visibleCopy && (
								<CopyToClipboard>
									<Button
										type={'default'}
										onClick={() => message.success('Copy thành công')}
									>
										<CopyOutlined />
									</Button>
								</CopyToClipboard>
							)}
						</Form.Item>
						<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
							<Button type="primary" htmlType="submit" style={{ marginRight: '50px' }}>
								Cập nhật
							</Button>
							<Button
								onClick={() => setModal1Visible(false)}
								htmlType="button"
								style={{ paddingLeft: '10px' }}
							>
								Đóng
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</div>
			<div style={{ height: 480 }}>
				<Table
					columns={columns}
					// dataSource={columnsTable}
					dataSource={dataSource}
					onChange={onChange}
					style={{ marginTop: '20px' }}
				/>
			</div>
		</div>
	);
}

KhachHang.propTypes = {};

KhachHang.defaultProps = {};

export default KhachHang;
