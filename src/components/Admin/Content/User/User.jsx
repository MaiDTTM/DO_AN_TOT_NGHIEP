import React from 'react';
import { Table, Space, Button, Tooltip, Popconfirm } from 'antd';
import {
	EditOutlined,
	DeleteOutlined,
	UserAddOutlined,
	SmileTwoTone,
	HeartTwoTone,
	SearchOutlined,
} from '@ant-design/icons';
import './style.css';
// import PropTypes from 'prop-types';
const data = [];
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
		render: () => (
			<Space size="middle" style={{ marginLeft: '20px' }}>
				<Button icon={<EditOutlined />} type="text" />
				<Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
					<Button icon={<DeleteOutlined />} type="text" />
				</Popconfirm>
			</Space>
		),
	},
];
function User() {
	return (
		<div className="content_user">
			<div
				style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 15px' }}
			>
				<Tooltip title="search">
					<Button type="primary" shape="circle" icon={<SearchOutlined />} />
				</Tooltip>
				<Button
					icon={<UserAddOutlined />}
					style={{
						backgroundColor: '#94e3db',
						marginBottom: '10px',
						width: '115px',
						borderRadius: '15px',
						borderStyle: 'outset',
					}}
				>
					Thêm user
				</Button>
				<HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: '30px' }} />
			</div>
			<Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 340 }} sticky />
		</div>
	);
}

User.propTypes = {};

User.defaultProps = {};

export default User;
