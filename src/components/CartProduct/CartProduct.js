import React from 'react';
import { Input, Popconfirm, Avatar, Button, message, Table, Modal } from 'antd';
// import PropTypes from 'prop-types';
import Styles from './style.module.css';
import logo from '../../img/logotet2019.png';
import { Link } from 'react-router-dom';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import PopupBuyProduct from './PopupBuyProduct/PopupBuyProduct';
import Footer from '../Footer/footer';
const { Search } = Input;
const text = 'Are you sure to delete this task?';
const data = [];
function confirm() {
	message.info('Clicked on Yes.');
}
for (let i = 1; i < 31; i++) {
	data.push({
		key: i,
		stt: i,
		name: (
			<div style={{ display: 'flex', width: '500px' }}>
				<Avatar
					src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
					style={{ width: '50px', height: '50px' }}
				/>
				<div style={{ marginLeft: '15px' }}>
					Ant Design, a design language for background applications, is refined by Ant UED
					Team dtgfdgfghfhgjhhgj
				</div>
			</div>
		),
		price: (
			<div className={Styles.gia_item_cart}>
				<span>45.000</span>
			</div>
		),
		number: 2,
		total: <span style={{ color: 'red' }}> 48.000</span>,
		action: (
			<div className={Styles.action_item_cart}>
				<Link to={'/buyproduct'}>
					<Button
						style={{
							backgroundColor: '#ee4d2d',
							color: '#fff',
						}}
					>
						Mua hàng
					</Button>
				</Link>
				<Popconfirm
					placement="topLeft"
					title={text}
					onConfirm={confirm}
					okText="Yes"
					cancelText="No"
				>
					<Button type="text" style={{ color: '#9f643c' }}>
						Xoá
					</Button>
				</Popconfirm>
			</div>
		),
	});
}
function CartProduct() {
	const onSearch = (value) => console.log(value);
	const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
	const [modal2Visible, setModal2Visible] = React.useState(false);
	const onSelectChange = (selectedRowKeys) => {
		console.log('selectedRowKeys changed: ', selectedRowKeys);
		setSelectedRowKeys(selectedRowKeys);
	};
	console.log('selectedRowKeys', selectedRowKeys);
	const handleClickBuyAllProduct = () => {
		if (selectedRowKeys.length === 0) {
			message.error('Hãy chọn sản phẩm để thực hiện chức năng này');
		} else {
			setModal2Visible(true);
		}
	};
	const columns = [
		{
			title: 'STT',
			dataIndex: 'stt',
		},
		{
			title: (
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>Tên sản phẩm</div>
					<div>
						<Button onClick={handleClickBuyAllProduct}>Xem sản phẩm đã chọn</Button>
						<Modal
							title={
								<div style={{ color: '#e728ce', marginLeft: '400px', fontSize: '18px' }}>
									DANH SÁCH CÁC SẢN PHẨM ĐÃ CHỌN
								</div>
							}
							centered
							visible={modal2Visible}
							onOk={() => setModal2Visible(false)}
							footer={null}
							onCancel={() => setModal2Visible(false)}
							className={Styles.modal_xem_tat_ca}
							style={{ width: '1200px' }}
						>
							<PopupBuyProduct setModal2Visible={setModal2Visible} />
						</Modal>
					</div>
				</div>
			),
			dataIndex: 'name',
		},
		{
			title: 'Giá 1 sản phẩm',
			dataIndex: 'price',
		},
		{
			title: 'Số lượng',
			dataIndex: 'number',
		},
		{
			title: 'Tổng tiền',
			dataIndex: 'total',
		},
		{
			title: 'Hành động',
			dataIndex: 'action',
		},
	];
	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
		selections: [
			Table.SELECTION_ALL,
			Table.SELECTION_INVERT,
			Table.SELECTION_NONE,
			{
				key: 'odd',
				text: 'Select Odd Row',
				onSelect: (changableRowKeys) => {
					// console.log('changableRowKeys', changableRowKeys);
					let newSelectedRowKeys = [];
					newSelectedRowKeys = changableRowKeys.filter((key, index) => {
						if (index % 2 !== 0) {
							return false;
						}
						return true;
					});
					setSelectedRowKeys(newSelectedRowKeys);
				},
			},
			{
				key: 'even',
				text: 'Select Even Row',
				onSelect: (changableRowKeys) => {
					let newSelectedRowKeys = [];
					newSelectedRowKeys = changableRowKeys.filter((key, index) => {
						if (index % 2 !== 0) {
							return true;
						}
						return false;
					});
					setSelectedRowKeys(newSelectedRowKeys);
				},
			},
		],
	};
	return (
		<div>
			<div className={Styles.form_cart}>
				<div className={Styles.header_cart}>
					<div className={Styles.container_wrapper}>
						<div className={Styles.container}>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<div className={Styles.img_header_cart}>
									<Link to={'/'}>
										<img src={logo} />
									</Link>
									<div className={Styles.gio_hang}>Giỏ hàng</div>
								</div>
								<div className={Styles.search_header_cart}>
									<Search
										placeholder="input search text"
										allowClear
										enterButton="Search"
										size="large"
										onSearch={onSearch}
										style={{ backgroundColor: '#f05d40' }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={Styles.content_wart_cart}>
					<div className={Styles.content_cart}>
						<Table
							rowSelection={rowSelection}
							columns={columns}
							dataSource={data}
							pagination={false}
						/>
					</div>
				</div>
			</div>
			<div className={Styles.footer_wart_cart}>
				<Footer />
			</div>
		</div>
	);
}

CartProduct.propTypes = {};

CartProduct.defaultProps = {};

export default CartProduct;
