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
import UploadFileView from '../../../../baseComponent/UploadFileView';
import EditorBase from '../../../../baseComponent/EditorBase';
import useCategoryLogicData from '../../../../hooks/useCategoryLogicData';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import useProductLogicData from '../../../../hooks/useProductLogicData';
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

const text = 'Are you sure to delete this task?';
function SanPham() {
	// hooks
	const [form] = Form.useForm();
	const {category} = useCategoryLogicData()
	const {postProduct} = useProductLogicData()

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
		values['description'] = description;
		values['image'] = linkFileUtil;

		if(linkFileUtil) {
			postProduct(values)
			onReset();
		} else {
			message.warn('Thiếu ảnh đi kèm')
		}
	};

	const onReset = () => {
		form.resetFields();
		setModalVisible(false);
		setLinkFileUtil('');
		setDescription('');
		setFileListUtil([]);
	};

	const onFill = () => {
		form.setFieldsValue({
			note: 'Hello world!',
			gender: 'male',
		});
	};
	const handleModalAdd = () => {};

	const handleSelect = (optionA, optionB) => {
		console.log('optionA', optionA); // MongLV log fix bug
		console.log('optionB', optionB); // MongLV log fix bug
		return optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
	}

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
						<Form.Item name="image" label="Ảnh sản phẩm" >
							<UploadFileView
								linkFileUtil={linkFileUtil}
								fileListUtil={fileListUtil}
								setLinkFileUtil={setLinkFileUtil}
								setFileListUtil={setFileListUtil}
							/>
						</Form.Item>
						<Form.Item name="catalog_id" label="Danh mục" rules={[{ required: true }]}>
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="Search to Select"
								optionFilterProp="children"
								filterOption={(input, option) =>
									option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
								filterSort={handleSelect}
							>
								{
									Object.values(category).map((item) => 	<Select.Option value={item._id}>{item.name}</Select.Option>)
								}
							</Select>
						</Form.Item>
						<Form.Item name="amount" label="Số lượng" rules={[{ required: true }]}>
							<InputNumber />
						</Form.Item>
						<Form.Item name="Giá tiền" label="price" rules={[{ required: true }]}>
							<InputNumber />
						</Form.Item>
						<div style={{margin: 10}}>
							<ErrorBoundary>
								<EditorBase content={description} setContent={setDescription} />
							</ErrorBoundary>
						</div>
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
