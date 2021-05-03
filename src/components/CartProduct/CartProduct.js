import React, { useContext } from 'react';
import { Input, Popconfirm, Avatar, Button, message, Table, Modal } from 'antd';
import queryString from 'query-string';
// import PropTypes from 'prop-types';
import Styles from './style.module.css';
import logo from '../../img/logotet2019.png';
import { Link, useHistory } from 'react-router-dom';
import PopupBuyProduct from './PopupBuyProduct/PopupBuyProduct';
import Footer from '../Footer/footer';
import useCartLogicData from '../../hooks/useCartLogicData';
import useProductLogicData from '../../hooks/useProductLogicData';
import { ContextApp } from '../../context/contextApp';
const { Search } = Input;
const text = 'Are you sure to delete this task?';

function CartProduct() {
	// hooks
	const { carts, deleteCart, getListCart } = useCartLogicData();
	const { product, getListProduct } = useProductLogicData();
	const history = useHistory();
	const { selectedRowKeys, setSelectedRowKeys } = useContext(ContextApp);

	// state
	const [modal2Visible, setModal2Visible] = React.useState(false);

	// const
	const { location } = history;
	const parsed = queryString.parse(location.search);
	const arrCarts = Object.values(carts).filter(
		(item) => parsed && parsed.id !== item._id
	);
	const arrSelect = Object.values(carts).filter(
		(item) => parsed && parsed.id === item._id
	);
	const arrCartTable = arrSelect.concat(arrCarts.reverse());

	// handle func
	const onSelectChange = (selectedRowKeys) => {
		setSelectedRowKeys(selectedRowKeys);
	};

	const handleDeleteOption = () => {
		selectedRowKeys.map(async (idCart) => await deleteCart(idCart));
	};
	const onSearch = (value) => console.log(value);

	const handleClickBuyAllProduct = () => {
		if (selectedRowKeys.length === 0) {
			message.error('Hãy chọn sản phẩm để thực hiện chức năng này');
		} else {
			setModal2Visible(true);
		}
	};

	const handleFindIndex = () => {
		if (parsed && parsed.id) {
			setSelectedRowKeys([parsed.id]);
		}
	};

	// Vòng đời
	React.useEffect(() => {
		handleFindIndex();
		getListCart();
		getListProduct();
	}, []);

	// JSX
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
						<Button onClick={handleDeleteOption} style={{ marginRight: '5px' }} danger>
							Xóa sản phẩm đã chọn
						</Button>
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
							<PopupBuyProduct
								setModal2Visible={setModal2Visible}
								selectedRowKeys={selectedRowKeys}
								product={product}
								carts={carts}
							/>
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
	const dataTable = arrCartTable.map((item, i) => ({
		key: item._id,
		stt: i + 1,
		name: (
			<div style={{ display: 'flex', width: '500px' }}>
				<Avatar
					src="https://picsum.photos/200"
					style={{ width: '50px', height: '50px' }}
				/>
				<div style={{ marginLeft: '15px' }}>
					{product && product[item.product_id] && product[item.product_id].name}
				</div>
			</div>
		),
		price: (
			<div className={Styles.gia_item_cart}>
				<span>
					{`${
						product && product[item.product_id] && product[item.product_id].price * 1000
					}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' VNĐ'}
				</span>
			</div>
		),
		number: item.amount,
		total: (
			<span style={{ color: 'red' }}>
				{`${
					product &&
					product[item.product_id] &&
					product[item.product_id].price * 1000 * item.amount
				}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' VNĐ'}
			</span>
		),
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
					onConfirm={() => deleteCart(item._id)}
					okText="Yes"
					cancelText="No"
				>
					<Button type="text" style={{ color: '#9f643c' }}>
						Xoá
					</Button>
				</Popconfirm>
			</div>
		),
	}));
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
							dataSource={dataTable}
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

export default React.memo(CartProduct);
