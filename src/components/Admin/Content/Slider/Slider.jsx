import React, { useState } from 'react';
import {
	Button,
	Form,
	Input,
	InputNumber,
	message,
	Modal,
	Popconfirm,
	Table,
	Tag,
	Upload,
} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
// import PropTypes from 'prop-types';

const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
];
const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 18 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};
function Slider() {
	const [form] = Form.useForm();
	const [formEdit] = Form.useForm();
	const [modalVisible, setModalVisible] = useState(false);
	const [modalVisible1, setModalVisible1] = useState(false);
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
			title: 'Hình ảnh',
			dataIndex: 'image_link',
			key: 'image_link',
		},
		{
			title: 'Tên',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Vị trí',
			dataIndex: 'index',
			key: 'index',
			return: () => <Tag color="cyan-inverse">1</Tag>,
		},
		{
			title: 'Liên kết',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Action',
			key: 'action',
			width: 100,
			render: (record) => (
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<Button
						type="text"
						style={{ color: '#4cd3d7' }}
						icon={<EditOutlined />}
						onClick={() => ModalVisible1(true)}
					/>
					<Popconfirm
						title="Are you sure to delete this task?"
						onConfirm={confirm}
						onCancel={cancel}
						okText="Yes"
						cancelText="No"
					>
						<Button style={{ color: '#ea506f' }} type="text" icon={<DeleteOutlined />} />
					</Popconfirm>
				</div>
			),
		},
	];
	function confirm(e) {
		console.log(e);
		message.success('Click on Yes');
	}

	function cancel(e) {
		console.log(e);
		message.error('Click on No');
	}
	const ModalVisible1 = (modalVisible1) => {
		setModalVisible1(modalVisible1);
	};
	const ModalVisible = (modalVisible) => {
		setModalVisible(modalVisible);
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
	const onChange = ({ fileList: newFileList }) => {
		setFileList(newFileList);
	};
	function onChangeInput(value) {
		console.log('changed', value);
	}
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
	return (
		<div>
			<Button
				style={{ marginBottom: 15, backgroundColor: '#ec6342', color: '#fff' }}
				onClick={() => ModalVisible(true)}
			>
				Thêm slider
			</Button>
			<div style={{ height: 450 }}>
				<Table columns={columns} dataSource={data} />
			</div>
			{/*modal them*/}
			<Modal
				title={
					<div style={{ display: 'flex', justifyContent: 'center', fontSize: '18px' }}>
						THÊM SLIDER
					</div>
				}
				centered
				visible={modalVisible}
				footer={null}
				onCancel={() => setModalVisible(false)}
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
					<Form.Item name="name" label="Tên slider :" rules={[{ required: true }]}>
						<Input />
					</Form.Item>
					<Form.Item name="index" label="Vị trí :" rules={[{ required: true }]}>
						<InputNumber min={1} max={10} defaultValue={3} onChange={onChangeInput} />
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
			{/*modal sua*/}
			<Modal
				title={
					<div style={{ display: 'flex', justifyContent: 'center', fontSize: '18px' }}>
						SỬA SLIDER
					</div>
				}
				centered
				visible={modalVisible1}
				footer={null}
				onCancel={() => setModalVisible1(false)}
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
					<Form.Item name="name" label="Tên slider :" rules={[{ required: true }]}>
						<Input />
					</Form.Item>
					<Form.Item name="index" label="Vị trí :" rules={[{ required: true }]}>
						<InputNumber min={1} max={10} defaultValue={3} onChange={onChangeInput} />
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

Slider.propTypes = {};

Slider.defaultProps = {};

export default Slider;
