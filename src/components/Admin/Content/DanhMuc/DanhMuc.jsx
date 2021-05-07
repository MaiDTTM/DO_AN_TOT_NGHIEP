import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Button, Modal, Form, Input, Menu, Select, Upload, Table, message } from 'antd';
import {
	AppstoreOutlined,
	MailOutlined,
	PlusOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import styles from './styles.module.css';
import { columns, data } from './dataTableProduct/data';
import UploadFileView from '../../../../baseComponent/UploadFileView';
import useCategoryLogicData from '../../../../hooks/useCategoryLogicData';
import TitleDanhMuc from '../TitleDanhMuc';
import { BASE_URL_IMAGE } from '../../../../util/TypeApi';

const { SubMenu } = Menu;
// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
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
	const [formAdd] = Form.useForm();
	const {
		category,
		getListCategory,
		postCategory,
		deleteCategory,
		updateCategory,
	} = useCategoryLogicData();

	// state
	const [openKeys, setOpenKeys] = React.useState(['sub1']);
	const [modal2Visible, setModal2Visible] = useState(false);
	const [paramId, setParamId] = useState('-1'); // Note: -1 là quy chuẩn với server
	const [linkFileUtil, setLinkFileUtil] = useState('');
	const [fileListUtil, setFileListUtil] = useState([]);
	const [dataEditCategoryModal, setDataEditCategoryModal] = useState(null); // Note: '' -> hiễn thị modal add, tồn tại -> hiễn tị modal edit

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
				onReset();
			} else {
				updateCategory({ ...dataEditCategoryModal, ...values });
			}
		} else {
			message.warn('Thiếu icon');
		}
	};
	const onReset = () => {
		formAdd.resetFields();
		setDataEditCategoryModal(null);
		setModal2Visible(false);
	};

	const handleCancelModal = () => {
		setModal2Visible(false);
		setParamId('-1');
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
		formAdd.setFieldsValue({ ...item });
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
	return (
		<div className={styles.from_danh_muc}>
			<div className={styles.danh_muc}>
				<div className={styles.title_danh_muc}>DANH SÁCH DANH MỤC</div>
				<Menu
					mode="inline"
					openKeys={openKeys}
					onOpenChange={onOpenChange}
					style={{ width: 256 }}
				>
					{Object.values(category).length > 0 &&
						Object.values(category).map(
							(item) =>
								item.paramId === '-1' && (
									<SubMenu
										key={item._id}
										// icon={<AppstoreOutlined />}
										title={TitleCategory(item)}
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
						)}
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
						footer={null}
					>
						<Form {...layout} form={formAdd} onFinish={onFinishAdd}>
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
				<Table
					title={() => (
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<h1>DANH SÁCH SẢN PHẨM THUỘC DANH MỤC</h1>
						</div>
					)}
					columns={columns}
					dataSource={data}
					scroll={{ x: 1500, y: 400 }}
					bordered={true}
				/>
			</div>
		</div>
	);
}

DanhMuc.propTypes = {};

DanhMuc.defaultProps = {};

export default DanhMuc;
