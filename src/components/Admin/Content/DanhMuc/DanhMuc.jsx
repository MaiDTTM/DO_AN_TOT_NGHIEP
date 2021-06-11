/* eslint-disable */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Button, Modal, Form, Input, Menu, Table, message, Image, Tag } from 'antd';
import styles from './styles.module.scss';
import UploadFileView from '../../../../baseComponent/UploadFileView';
import useCategoryLogicData from '../../../../hooks/useCategoryLogicData';
import TitleDanhMuc from '../TitleDanhMuc';
import { BASE_URL_IMAGE } from '../../../../util/TypeApi';
import ConvertStringToVND from '../../../../util/ConvertStringToVND';
import useProductLogicData from '../../../../hooks/useProductLogicData';

const { SubMenu } = Menu;
// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const responsiveMap = {
	xs: '(max-width: 575px)',
	sm: '(min-width: 576px)',
	md: '(min-width: 768px)',
	lg: '(min-width: 992px)',
	xl: '(min-width: 1200px)',
	xxl: '(min-width: 1600px)',
};
const layout = {
	labelCol: {
		span: 6,
	},
	wrapperCol: {
		span: 18,
	},
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16,
	},
};
const { Search } = Input;

function DanhMuc() {
	// hooks
	const [form] = Form.useForm();
	const {
		category,
		getListCategory,
		postCategory,
		deleteCategory,
		updateCategory,
	} = useCategoryLogicData();
	const { product } = useProductLogicData();
	const newArrProduct = Object.values(product);
	// state
	const [openKeys, setOpenKeys] = React.useState([]);
	const [modal2Visible, setModal2Visible] = useState(false);
	const [paramId, setParamId] = useState('-1'); // Note: -1 là quy chuẩn với server
	const [linkFileUtil, setLinkFileUtil] = useState('');
	const [fileListUtil, setFileListUtil] = useState([]);
	const [dataEditCategoryModal, setDataEditCategoryModal] = useState(null); // Note: '' -> hiễn thị modal add, tồn tại -> hiễn tị modal edit
	const [listProduct, setListProduct] = useState({ ...newArrProduct });
	const onOpenChange = (keys) => {
		const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
		if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			setOpenKeys(keys);
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
		}
	};
	const onSearch = (value) => console.log(value);
	const setModalVisible2 = (modal2Visible) => {
		setModal2Visible(modal2Visible);
	};
	const onFinishAdd = (values) => {
		if (linkFileUtil) {
			values['icon'] = linkFileUtil;

			if (!dataEditCategoryModal) {
				// Add
				values['paramId'] = paramId;
				postCategory(values);
				onCancel();
			} else {
				updateCategory({ ...dataEditCategoryModal, ...values });
				onCancel();
			}
		} else {
			message.warn('Thiếu icon');
		}
	};
	const onReset = () => {
		form.resetFields();
		setDataEditCategoryModal(null);
		setLinkFileUtil('');
		setFileListUtil([]);
	};

	const onCancel = () => {
		onReset();
		setModal2Visible(false);
	};

	const handleCancelModal = () => {
		setModal2Visible(false);
		setParamId('-1');
		onReset();
	};

	const handleEditModal = (item) => {
		setModal2Visible(true);
		setDataEditCategoryModal(item);

		setFileListUtil([
			{
				uid: '-1',
				name: item.icon,
				status: 'done',
				url: BASE_URL_IMAGE + item.icon,
			},
		]);
		setLinkFileUtil(item.icon);
		form.setFieldsValue({ ...item });
	};
	const handleAddChildren = (id) => {
		setModalVisible2(true);
		setParamId(id);
	};

	React.useEffect(() => {
		getListCategory();
	}, []);

	const TitleCategory = (item) => (
		<TitleDanhMuc
			item={item}
			setModal={setModalVisible2}
			handleDelete={deleteCategory}
			handleEdit={handleEditModal}
			handleAdd={handleAddChildren}
		/>
	);
	const handleClick = ({ item, key, keyPath, domEvent }) => {
		setListProduct(newArrProduct.filter((word) => word.catalog_id === key));
	};
	const handleSubmenuClick = ({ key, domEvent }) => {
		setListProduct(newArrProduct.filter((word) => word.catalog_id === key));
		setOpenKeys(key);
	};
	const columns = [
		{
			title: 'Ảnh',
			width: 100,
			dataIndex: 'image',
			fixed: 'left',
			align: 'center',
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
			key: 'name',
			align: 'center',
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
			width: 100,
			key: '1',
			align: 'center',
			render: (price) => (
				<p style={{ fontSize: 14, fontWeight: 'bold', color: 'orange' }}>
					{ConvertStringToVND(price)}
				</p>
			),
		},
		{
			title: 'Số lượng',
			dataIndex: 'amount',
			key: '2',
			align: 'center',
			width: 75,
		},
		{
			title: 'Đã bán',
			dataIndex: 'sold',
			width: 60,
			key: '3',
			align: 'center',
		},
		{
			title: 'Trạng thái',
			dataIndex: 'status',
			width: 100,
			key: '4',
			align: 'center',
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
			key: '5',
			align: 'center',
			render: (price_seo) => <Tag color="blue">{price_seo}</Tag>,
		},
	];
	return (
		<div className={styles.from_danh_muc}>
			<div className={styles.danh_muc}>
				<div className={styles.title_danh_muc}>DANH SÁCH DANH MỤC</div>
				<Menu
					className={styles.menu_danh_muc}
					mode="inline"
					openKeys={openKeys}
					onOpenChange={(keys) => onOpenChange(keys)}
					style={{ width: 256 }}
					onClick={(key) => handleClick(key)}
				>
					{Object.values(category).length > 0 &&
						Object.values(category).map((item, index) => {
							return (
								item.paramId === '-1' && (
									<SubMenu
										key={item._id}
										title={TitleCategory(item)}
										onTitleClick={handleSubmenuClick}
									>
										{Object.values(category).map((itemChildren) => {
											if (itemChildren.paramId === item._id) {
												return (
													<Menu.Item key={itemChildren._id}>
														{TitleCategory(itemChildren)}
													</Menu.Item>
												);
											}
										})}
									</SubMenu>
								)
							);
						})}
				</Menu>
				<div className={styles.danh_muc_action}>
					<Search placeholder="input search text" onSearch={onSearch} enterButton />
					<Button type="primary" onClick={() => setModalVisible2(true)}>
						Thêm
					</Button>
					<Modal
						title={
							<div className={styles.title_them_moi}>
								{dataEditCategoryModal ? 'EDIT DANH MỤC' : 'THÊM MỚI DANH MỤC'}
							</div>
						}
						centered
						visible={modal2Visible}
						onCancel={handleCancelModal}
						maskClosable={false}
						footer={null}
					>
						<Form {...layout} form={form} onFinish={onFinishAdd}>
							<Form.Item
								name={'name'}
								label="Tên danh mục"
								rules={[
									{
										required: true,
										message: 'Không được để trống tên',
									},
								]}
							>
								<Input />
							</Form.Item>
							<Form.Item name={'description'} label="Miêu tả">
								<Input.TextArea />
							</Form.Item>
							<Form.Item name={'icon'} label="Icon :">
								<UploadFileView
									setFileListUtil={setFileListUtil}
									setLinkFileUtil={setLinkFileUtil}
									fileListUtil={fileListUtil}
									linkFileUtil={linkFileUtil}
								/>
							</Form.Item>
							<div style={{ marginLeft: 120, marginBottom: 20 }}>
								Dung lượng file tối đa 2 MB
								<br />
								Định dạng:.JPEG, .PNG
							</div>
							<div style={{ color: '#f65353', display: 'none' }} id="chu_y">
								* Click vào ảnh để thay đổi avatar
							</div>
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
			</div>
			<div className={styles.table_product}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						height: 20,
						fontSize: 18,
						marginBottom: 32,
					}}
				>
					<h1>DANH SÁCH SẢN PHẨM THUỘC DANH MỤC</h1>
				</div>
				<Table
					columns={columns}
					dataSource={Object.values(listProduct).reverse()}
					scroll={{ x: { responsiveMap } }}
					bordered={true}
				/>
			</div>
		</div>
	);
}

DanhMuc.propTypes = {};

DanhMuc.defaultProps = {};

export default DanhMuc;
