/* eslint-disable */
import { Button, Table, Modal, Form, Popconfirm, message, Switch, Image } from 'antd';
import React, { useState } from 'react';
import { CopyOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useCustomerLogicData from '../../../../hooks/useCustomerLogicData';
import { BASE_URL_IMAGE } from '../../../../util/TypeApi';
import style from './style.module.scss';
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
function KhachHang() {
	const [form2] = Form.useForm();
	const [visibleCopy, setVisibleCopy] = useState(false);
	const [status, setStatus] = useState(true);
	const [modal1Visible, setModal1Visible] = React.useState(false);
	const [dataCustomerEdit, setDataCustomerEdit] = useState(null);
	const { customer, updateCustomer } = useCustomerLogicData();
	const columns = [
		{
			title: 'Ảnh đại diện',
			dataIndex: 'image',
			key: 'image',
			fixed: 'left',
			width: 120,
			render: (image) => (
				<Image
					style={{ width: 80, height: 50, objectFit: 'cover' }}
					src={BASE_URL_IMAGE + image}
				/>
			),
		},
		{
			title: 'Name',
			dataIndex: 'name',
			width: 220,
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
			width: 250,
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
		},
		{
			title: 'Gender',
			dataIndex: 'gender',
			width: 100,
		},
		{
			title: 'Ngày sinh',
			dataIndex: 'date_of_birth',
			defaultSortOrder: 'descend',
		},
		{
			title: 'Address',
			dataIndex: 'address',
		},
		{
			title: 'Mật khẩu',
			dataIndex: 'password',
		},
		{
			title: 'Trạng thái',
			dataIndex: 'status',
			render: (status) => {
				if (status === true) {
					return <div>Đang hoạt động</div>;
				} else if (status === false) {
					return <div>Tài khoản đã bị khóa</div>;
				}
			},
		},
		{
			title: 'Action',
			dataIndex: '',
			key: 'action',
			fixed: 'right',
			width: 80,
			render: (record) => {
				return (
					<div style={{ display: 'flex', justifyContent: 'space-around' }}>
						<Button
							onClick={() => handleEdit(record)}
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
	const PassDefault = '12345@2021';
	const handleDelete = (record) => {};
	const handleEdit = (record) => {
		setModal1Visible(true);
		setDataCustomerEdit(record);
		form2.setFieldsValue({ ...record });
	};
	const onFinishEdit = (values) => {
		updateCustomer({ ...dataCustomerEdit, ...values });
		// handleSwitch();
		setModal1Visible(false);
	};
	const handleSwitch = (checked) => {
		form2.setFieldsValue({
			status: checked,
		});
	};
	const handleResetPass = () => {
		form2.setFieldsValue({
			password: PassDefault,
		});
		setVisibleCopy(!visibleCopy);
		message.success('Đã Reset');
	};
	//func
	function onChange(pagination, filters, sorter, extra) {
		console.log('params', pagination, filters, sorter, extra);
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column', minHeight: 508 }}>
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
								onConfirm={handleResetPass}
							>
								<Button type={'danger'}>Reset</Button>
							</Popconfirm>{' '}
							{visibleCopy && (
								<CopyToClipboard text={PassDefault}>
									<Button
										type={'default'}
										onClick={() => message.success('Copy thành công')}
									>
										{PassDefault} <CopyOutlined />
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
			<div className={style.table_customer}>
				<Table
					columns={columns}
					// dataSource={columnsTable}
					dataSource={Object.values(customer).reverse()}
					onChange={onChange}
					style={{ marginTop: '20px' }}
					scroll={{ x: 1500, y: 420 }}
				/>
			</div>
		</div>
	);
}

KhachHang.propTypes = {};

KhachHang.defaultProps = {};

export default KhachHang;
