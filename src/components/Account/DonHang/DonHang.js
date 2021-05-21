import React, { useState } from 'react';
import logo from '../../../img/tong_tien.png';
// import PropTypes from 'prop-types';
import style from './styles.module.scss';
import { Tabs, List, Button, Image, Modal, Input } from 'antd';
import useTransactionData from '../../../hooks/useTransactionData';
import useCartLogicData from '../../../hooks/useCartLogicData';
import useProductLogicData from '../../../hooks/useProductLogicData';
import ConvertStringToVND from '../../../util/ConvertStringToVND';
import TYPE_TRANSACTION from '../../../util/TypeDoDatHang';
import { BASE_URL_IMAGE } from '../../../util/TypeApi';
const { TabPane } = Tabs;
const { TextArea } = Input;

function DonHang() {
	const { getListTransaction, transaction, putTransaction } = useTransactionData();
	const { carts } = useCartLogicData();
	const { product } = useProductLogicData();

	// state
	const [type, setType] = React.useState(TYPE_TRANSACTION.ALL);
	const [itemCancel, setItemCancel] = React.useState(null);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [valuesCancel, setValuesCancel] = useState('');

	const transactionFilter = () => {
		let arr = [...Object.values(transaction)];
		if (type !== 'Tất cả') {
			arr = Object.values(transaction).filter((item) => item.status_transaction === type);
		}
		return arr;
	};
	const handleOk = () => {
		itemCancel['status_transaction'] = TYPE_TRANSACTION.DA_HUY;
		valuesCancel && (itemCancel['messageError'] = valuesCancel);
		putTransaction(itemCancel, handleCancel);
	};
	const handleCancel = () => {
		setIsModalVisible(false);
		setItemCancel(null);
		setValuesCancel('');
	};
	const onChangeCancel = (e) => {
		setValuesCancel(e.target.value);
	};
	const handleHuyDon = (item) => {
		setItemCancel(item);
		setIsModalVisible(true);
	};
	const handleImage = (cartId) => {
		return carts[cartId] && carts[cartId].product_id && product[carts[cartId].product_id]
			? BASE_URL_IMAGE + product[carts[cartId].product_id].image
			: 'https://blackmantkd.com/wp-content/uploads/2017/04/default-image.jpg';
	};

	// func
	const callback = (key) => {
		setType(key);
	};

	React.useEffect(() => {
		const data = { status_transaction: type };
		type === TYPE_TRANSACTION.ALL ? getListTransaction() : getListTransaction(data);
	}, [type]);

	// JSX
	const ListComponent = (item) => (
		<React.Fragment>
			{
				<List
					size="small"
					header={
						<div className={style.header_list}>
							<div className={style.header_don_hang}>Đơn hàng {item._id}</div>
							<div className={style.header_trang_thai}>{item.status_transaction}</div>
						</div>
					}
					footer={
						<div className={style.footer_list}>
							<div className={style.footer_list_one}>
								<div className={style.footer_logo}>
									<img src={logo} />
								</div>
								<span className={style.footer_tong_tien}>Tổng số tiền : </span>
								<span className={style.footer_tien}>
									{ConvertStringToVND(item.amount)}
								</span>
							</div>
							<div className={style.footer_action}>
								{item['status_transaction'] === TYPE_TRANSACTION.CHO_LAY_HANG ||
								item['status_transaction'] === TYPE_TRANSACTION.CHO_XAC_NHAN ? (
									<Button
										danger
										type="primary"
										disabled={type === TYPE_TRANSACTION.ALL}
										onClick={() => handleHuyDon(item)}
									>
										Hủy đơn
									</Button>
								) : (
									<div />
								)}
								<Button className={style.btn_action}>Xem chi tiết đơn hàng</Button>
							</div>
						</div>
					}
					bordered
					dataSource={item.carts_id}
					renderItem={(cartId) => (
						<List.Item
							actions={[
								<div style={{ textDecoration: 'line-through' }}>
									{/*115.000<sup>đ</sup>*/}
								</div>,
								<div style={{ color: ' #f05d40' }}>
									{ConvertStringToVND(
										carts[cartId] &&
											carts[cartId].product_id &&
											product[carts[cartId].product_id] &&
											product[carts[cartId].product_id].price
									)}
									{/*<sup>đ</sup>*/}
								</div>,
							]}
						>
							<List.Item.Meta
								avatar={<Image width={100} height={50} src={handleImage(cartId)} />}
								title={
									carts[cartId] &&
									carts[cartId].product_id &&
									product[carts[cartId].product_id] &&
									product[carts[cartId].product_id].name
								}
								description={`Số lượng: ${carts[cartId] && carts[cartId].amount}`}
							/>
						</List.Item>
					)}
				/>
			}
		</React.Fragment>
	);
	return (
		<div className={style.purchase_list_page__tabs_container}>
			<div className={style.card_container}>
				<Tabs type="card" onChange={callback}>
					<TabPane tab={TYPE_TRANSACTION.ALL} key={TYPE_TRANSACTION.ALL}>
						{transactionFilter().map((item) => ListComponent(item))}
					</TabPane>
					<TabPane
						tab={TYPE_TRANSACTION.CHO_XAC_NHAN}
						key={TYPE_TRANSACTION.CHO_XAC_NHAN}
					>
						{transactionFilter().map((item) => ListComponent(item))}
					</TabPane>
					<TabPane
						tab={TYPE_TRANSACTION.CHO_LAY_HANG}
						key={TYPE_TRANSACTION.CHO_LAY_HANG}
					>
						{transactionFilter().map((item) => ListComponent(item))}
					</TabPane>
					<TabPane tab={TYPE_TRANSACTION.DANG_GIAO} key={TYPE_TRANSACTION.DANG_GIAO}>
						{transactionFilter().map((item) => ListComponent(item))}
					</TabPane>
					<TabPane tab={TYPE_TRANSACTION.DA_GIAO} key={TYPE_TRANSACTION.DA_GIAO}>
						{transactionFilter().map((item) => ListComponent(item))}
					</TabPane>
					<TabPane tab={TYPE_TRANSACTION.DA_HUY} key={TYPE_TRANSACTION.DA_HUY}>
						{transactionFilter().map((item) => ListComponent(item))}
					</TabPane>
				</Tabs>
			</div>
			<Modal
				title="Lý do hủy đơn ?"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<TextArea placeholder="Lý do hủy đơn của bạn là gì ?" onChange={onChangeCancel} />
			</Modal>
		</div>
	);
}

DonHang.propTypes = {};

DonHang.defaultProps = {};

export default DonHang;
