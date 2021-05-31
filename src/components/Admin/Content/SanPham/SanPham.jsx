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
	Avatar,
	Image,
	Tag,
} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UploadFileView from '../../../../baseComponent/UploadFileView';
import EditorBase from '../../../../baseComponent/EditorBase';
import useCategoryLogicData from '../../../../hooks/useCategoryLogicData';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import useProductLogicData from '../../../../hooks/useProductLogicData';
import { BASE_URL_IMAGE } from '../../../../util/TypeApi';
import ConvertStringToVND from '../../../../util/ConvertStringToVND';
import ExportCSV from './ExportCSV/ExportCSV';
import { log10 } from 'chart.js/helpers';
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

const text = 'Bạn chắc chắn với thao tác này ?';
let dataSale = [];
for (let i = 0; i <= 100; i++) {
	dataSale.push(`${i} %`);
}

function SanPham() {
	// hooks
	const [form] = Form.useForm();
	const { category } = useCategoryLogicData();
	const { postProduct, product, deleteProduct, updateProduct } = useProductLogicData();
	const arrProduct = () =>
		Object.values(product).map((item) => {
			try {
				item.catalog_id = category[item.catalog_id].name;
			} catch (e) {
				console.log('item.catalog_id', item.catalog_id);
				console.log('category[item.catalog_id]', category[item.catalog_id]);
				console.log('e', e);
			}
			return item;
		});
	const refCallBack = React.useRef();
	const refCallBack2 = React.useRef();
	const arrCategory = Object.values(category);
	// state
	const [modalVisible, setModalVisible] = useState(false);
	const [linkFileUtil, setLinkFileUtil] = useState('');
	const [fileListUtil, setFileListUtil] = useState([]);
	const [fileListContentUtil, setFileListContentUtil] = useState([]); // [{}]
	const [listLinkFileUtil, setListLinkFileUtil] = useState([]); // ['image']
	const [description, setDescription] = useState('');
	const [dataProductEdit, setDataProductEdit] = useState(null);
	const [customers, setCustomers] = useState(arrProduct());
	// console.log(
	// 	'resut',
	// 	customers.map((item) => arrCategory.find((a) => a._id === item.catalog_id && a.name))
	// );
	console.log('customers', customers);
	// handle func
	const ModalVisible = (modalVisible) => {
		setModalVisible(modalVisible);
	};
	const wscols = [
		{ wch: Math.max(...customers.map((customer) => customer._id.length)) },
		{ wch: Math.max(...customers.map((customer) => customer.name.length)) },
		{ wch: 70 },
		{ wch: 20 },
		{ wch: 20 },
		{ wch: 20 },
		{ wch: 30 },
		{ wch: 20 },
		{ wch: 30 },
		{ wch: 30 },
		{ wch: 30 },
		{ wch: 30 },
	];
	const handleEditProduct = (item) => {
		setDataProductEdit(item);
		setModalVisible(true);
		form.setFieldsValue({ ...item });
		setLinkFileUtil(item.image);
		setFileListUtil([
			{
				uid: item._id,
				name: item.image,
				status: 'done',
				url: BASE_URL_IMAGE + item.image,
			},
		]);
		setListLinkFileUtil(item.image_destination);
		const arrObjImg =
			item.image_destination &&
			item.image_destination.map((item) => ({
				uid: item,
				name: item,
				status: 'done',
				url: BASE_URL_IMAGE + item,
			}));
		setFileListContentUtil([...arrObjImg]);
		setDescription(item.description);
	};

	const confirm = (id) => {
		id && deleteProduct(id);
	};

	const onFinish = (values) => {
		values['description'] = description;
		values['image'] = linkFileUtil;
		values['image_destination'] = listLinkFileUtil;

		if (linkFileUtil && listLinkFileUtil.length > 0) {
			if (!dataProductEdit) {
				postProduct(values);
			} else {
				updateProduct({ ...dataProductEdit, ...values });
			}
			onReset();
		} else {
			message.warn('Thiếu ảnh đi kèm');
		}
	};

	const onReset = () => {
		form.resetFields();
		setModalVisible(false);
		setLinkFileUtil('');
		setDescription('');
		setFileListUtil([]);
		setDataProductEdit(null);
		setListLinkFileUtil([]);
		setFileListContentUtil([]);
		refCallBack.current && refCallBack.current.handleResetState();
		refCallBack2.current && refCallBack2.current.handleResetState();
	};

	const handleSelect = (optionA, optionB) => {
		return optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase());
	};

	const columns = [
		{
			title: 'Ảnh',
			width: 100,
			dataIndex: 'image',
			render: (image) => (
				<Image
					style={{ width: 80, height: 50, objectFit: 'cover' }}
					src={BASE_URL_IMAGE + image}
				/>
			),
		},
		{
			title: 'Tên sản phẩm',
			width: 200,
			dataIndex: 'name',
			render: (name, data) => {
				return (
					<>
						<p style={{ fontSize: 17, fontWeight: 'bold', color: 'green' }}>{name}</p>
						<i style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>
							(
							{data.catalog_id &&
								category[data.catalog_id] &&
								category[data.catalog_id].name &&
								category[data.catalog_id].name}
							)
						</i>
					</>
				);
			},
		},
		{
			title: 'Giá',
			dataIndex: 'price',
			width: 125,
			render: (price) => (
				<p style={{ fontSize: 14, fontWeight: 'bold', color: 'orange' }}>
					{ConvertStringToVND(price)}
				</p>
			),
		},
		{
			title: 'Số lượng',
			dataIndex: 'amount',
			width: 80,
		},
		{
			title: 'Đã bán',
			dataIndex: 'sold',
			width: 75,
		},
		{
			title: 'Trạng thái',
			dataIndex: 'status',
			width: 100,
			render: (_, data) => {
				const isStatus = data.amount - data.sold === 0;
				const text = isStatus ? 'Hết hàng' : 'Còn hàng';
				return (
					<p
						style={{
							fontSize: 14,
							fontWeight: 'bold',
							color: isStatus ? 'red' : 'green',
						}}
					>
						{text}
					</p>
				);
			},
		},
		{
			title: 'SALE',
			dataIndex: 'price_seo',
			width: 75,
			render: (price_seo) => <Tag color="blue">{price_seo}</Tag>,
		},
		{
			title: 'Hành động',
			width: 100,
			render: (_, data) => (
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Button
						type="text"
						icon={<EditOutlined />}
						style={{ color: '#4cd3d7' }}
						onClick={() => handleEditProduct(data)}
					/>
					<Popconfirm
						placement="top"
						title={text}
						onConfirm={() => confirm(data._id)}
						okText="Yes"
						cancelText="No"
					>
						<Button type="text" icon={<DeleteOutlined />} style={{ color: '#ea506f' }} />
					</Popconfirm>
				</div>
			),
		},
	];
	const title = linkFileUtil.length > 0 ? 'Sửa sản phẩm' : 'Thêm sản phẩm';
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
					<ExportCSV csvData={customers} fileName="List_product" wscols={wscols} />
					{/*<Button*/}
					{/*	style={{*/}
					{/*		marginBottom: 15,*/}
					{/*		backgroundColor: '#42ec53',*/}
					{/*		color: '#fff',*/}
					{/*		borderRadius: 15,*/}
					{/*	}}*/}
					{/*>*/}
					{/*	Export excel*/}
					{/*</Button>*/}
				</div>
				{/*modal them*/}
				<Modal
					title={
						<div style={{ display: 'flex', justifyContent: 'center', fontSize: '18px' }}>
							{title}
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
						<Form.Item name="image" label="Ảnh sản phẩm">
							<UploadFileView
								linkFileUtil={linkFileUtil}
								fileListUtil={fileListUtil}
								setLinkFileUtil={setLinkFileUtil}
								setFileListUtil={setFileListUtil}
								refFunc={refCallBack}
							/>
						</Form.Item>
						<Form.Item name="image_destination" label="Ảnh đi kèm">
							<UploadFileView
								// linkFileUtil={linkFileUtil}
								fileListUtil={fileListContentUtil}
								setListLinkFileUtil={setListLinkFileUtil}
								listLinkFileUtil={listLinkFileUtil}
								// setLinkFileUtil={setLinkFileUtil}
								setFileListUtil={setFileListContentUtil}
								limit={10}
								refFunc={refCallBack2}
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
								{Object.values(category).map((item) => (
									<Select.Option value={item._id}>{item.name}</Select.Option>
								))}
							</Select>
						</Form.Item>
						<Form.Item name="amount" label="Số lượng" rules={[{ required: true }]}>
							<InputNumber />
						</Form.Item>
						<Form.Item name="price" label="Giá tiền" rules={[{ required: true }]}>
							<InputNumber />
						</Form.Item>
						<Form.Item name="price_seo" label="SALE sản phẩm">
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="Chọn % giảm giá"
								optionFilterProp="children"
								filterOption={(input, option) =>
									option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
								filterSort={handleSelect}
							>
								{dataSale.map((item) => (
									<Select.Option value={item}>{item}</Select.Option>
								))}
							</Select>
						</Form.Item>
						<div style={{ margin: 10 }}>
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
					dataSource={Object.values(product).reverse()}
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
