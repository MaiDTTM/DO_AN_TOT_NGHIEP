import React from 'react';
import { Table, Space, Button, Tooltip, Popconfirm, Input } from 'antd';
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
				<Button icon={<UserAddOutlined />} className="button_user_add">
					Add user
				</Button>
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
