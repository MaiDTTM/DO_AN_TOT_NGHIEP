import React, { useState } from 'react';
import {
	Button,
	Table,
	Modal,
	Popconfirm,
	message,
	Input,
	InputNumber,
	Form,
	Select,
} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styles from './style.module.css';
import UploadImg from './uploadImg/UploadIMG';
import SelectDanhMucContainer from '../DanhMuc/SelectDanhMuc/SelectDanhMucContainer';
import { Editor } from '@tinymce/tinymce-react';
import tinymce from 'tinymce';
import UploadFileView from '../../../../baseComponent/UploadFileView';
import EditorBase from '../../../../baseComponent/EditorBase';
// import PropTypes from 'prop-types';

const data = [];
for (let i = 0; i < 100; i++) {
	data.push({
		key: i,
		name: `Edward King ${i}`,
		age: 32,
		address: `London, Park Lane no. ${i}`,
	});
}

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

const children = [];
for (let i = 10; i < 36; i++) {
	children.push(
		<Select.Option key={i.toString(36) + i}>{i.toString(36) + i}</Select.Option>
	);
}
const text = 'Are you sure to delete this task?';
function SanPham() {
	// hooks
	const [form] = Form.useForm();

	// state
	const [modalVisible, setModalVisible] = useState(false);
	const [linkFileUtil, setLinkFileUtil] = useState('');
	const [fileListUtil, setFileListUtil] = useState([]);
	const [description, setDescription] = useState('');

	const ModalVisible = (modalVisible) => {
		setModalVisible(modalVisible);
	};
	const ModalVisible1 = (modalVisible1) => {
		setModalVisible(modalVisible1);
	};
	//function
	function confirm() {
		message.info('Clicked on Yes.');
	}
	const onFinish = (values) => {
		console.log(values);
	};

	const onReset = () => {
		form.resetFields();
	};

	const onFill = () => {
		form.setFieldsValue({
			note: 'Hello world!',
			gender: 'male',
		});
	};
	const handleModalAdd = () => {};

	function handleChangeSelect(value) {
		console.log(`selected ${value}`);
	}

	const columns = [
		{
			title: 'Ảnh',
			width: 80,
			dataIndex: 'image',
		},
		{
			title: 'Tên sản phẩm',
			width: 200,
			dataIndex: 'name',
		},
		{
			title: 'Giá',
			dataIndex: 'price',
			width: 100,
		},
		{
			title: 'Số lượng',
			dataIndex: 'amount',
			width: 80,
		},
		{
			title: 'Trạng thái',
			dataIndex: 'status',
			width: 150,
		},
		{
			title: 'Giá sale',
			dataIndex: 'price_seo',
			width: 150,
		},
		{
			title: 'Đã bán',
			dataIndex: 'sold',
			width: 100,
		},
		{
			title: 'Hành động',
			width: 100,
			render: () => (
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Button
						type="text"
						icon={<EditOutlined />}
						style={{ color: '#4cd3d7' }}
						onClick={() => ModalVisible1(true)}
					/>
					<Popconfirm
						placement="top"
						title={text}
						onConfirm={confirm}
						okText="Yes"
						cancelText="No"
					>
						<Button type="text" icon={<DeleteOutlined />} style={{ color: '#ea506f' }} />
					</Popconfirm>
				</div>
			),
		},
	];

	return (
		<div>
			<div>
				<div style={{ display: 'flex' }}>
					<Button
						style={{
							marginBottom: 15,
							backgroundColor: '#ec6342',
							color: '#fff',
							marginRight: 5,
							borderRadius: 15,
						}}
						onClick={() => ModalVisible(true)}
					>
						Thêm sản phẩm
					</Button>
					<Button
						style={{
							marginBottom: 15,
							marginRight: 5,
							backgroundColor: '#42ecec',
							borderRadius: 15,
						}}
					>
						Import excel
					</Button>
					<Button
						style={{
							marginBottom: 15,
							backgroundColor: '#42ec53',
							color: '#fff',
							borderRadius: 15,
						}}
					>
						Export excel
					</Button>
				</div>
				{/*modal them*/}
				<Modal
					title={
						<div style={{ display: 'flex', justifyContent: 'center', fontSize: '18px' }}>
							THÊM SẢN PHẨM
						</div>
					}
					centered
					visible={modalVisible}
					footer={null}
					onCancel={() => setModalVisible(false)}
				>
					<Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
						<Form.Item name="name" label="Tên sản phẩm" rules={[{ required: true }]}>
							<Input />
						</Form.Item>
						<Form.Item name="image" label="Ảnh sản phẩm" rules={[{ required: true }]}>
							<UploadFileView
								linkFileUtil={linkFileUtil}
								setLinkFileUtil={setLinkFileUtil}
								fileListUtil={fileListUtil}
								setFileListUtil={setLinkFileUtil}
							/>
						</Form.Item>
						<Form.Item name="catalog_id" label="Danh mục" rules={[{ required: true }]}>
							<Select
								mode="tags"
								style={{ width: '100%' }}
								placeholder="Chọn Danh mục"
								onChange={handleChangeSelect}
							>
								{children}
							</Select>
						</Form.Item>
						<Form.Item name="amount" label="Số lượng" rules={[{ required: true }]}>
							<InputNumber />
						</Form.Item>
						<Form.Item name="Giá tiền" label="price" rules={[{ required: true }]}>
							<InputNumber />
						</Form.Item>
						<Form.Item
							name="Chi tiết sản phẩm"
							label="description"
							rules={[{ required: true }]}
						>
							<EditorBase content={description} setContent={setDescription} />
						</Form.Item>
						<EditorBase content={description} setContent={setDescription} />
						<Form.Item {...tailLayout}>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</div>
			<div style={{ border: '1px solid red' }}>
				<Table
					columns={columns}
					dataSource={data}
					pagination={{ pageSize: 50 }}
					scroll={{ y: 380 }}
					bordered={true}
				/>
			</div>
		</div>
	);
}

SanPham.propTypes = {};

SanPham.defaultProps = {};

export default SanPham;
