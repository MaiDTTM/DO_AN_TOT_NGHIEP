import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Tabs, List, Avatar, Button, message, Spin, Image } from 'antd';
import style from './style.module.css';
import logo from '../../../../img/tong_tien.png';
import useTransactionData from '../../../../hooks/useTransactionData';
import useCartLogicData from '../../../../hooks/useCartLogicData';
import useProductLogicData from '../../../../hooks/useProductLogicData';
import ConvertStringToVND from '../../../../util/ConvertStringToVND';
import TYPE_TRANSACTION from '../../../../util/TypeDoDatHang';
const { TabPane } = Tabs;

function DonDatHang() {
	const { transaction, getListTransaction, putTransaction } = useTransactionData();
	const { carts, getListCart } = useCartLogicData();
	const { product, getListProduct } = useProductLogicData();

	// state
	const [type, setType] = React.useState(TYPE_TRANSACTION.ALL);

	const handleImage = (cartId) => {
		return carts[cartId] && carts[cartId].product_id
			? product[carts[cartId].product_id].image
			: 'https://blackmantkd.com/wp-content/uploads/2017/04/default-image.jpg';
	};

	const callback = (key) => {
		setType(key);
	};

	const updateStatus = (item) => {
		switch (item['status_transaction']) {
			case TYPE_TRANSACTION.CHO_XAC_NHAN:
				item['status_transaction'] = TYPE_TRANSACTION.CHO_LAY_HANG;
				break;
			case TYPE_TRANSACTION.CHO_LAY_HANG:
				item['status_transaction'] = TYPE_TRANSACTION.DANG_GIAO;
				break;
			case TYPE_TRANSACTION.DANG_GIAO:
				item['status_transaction'] = TYPE_TRANSACTION.DA_GIAO;
				break;
			case TYPE_TRANSACTION.DA_HUY:
				item['status_transaction'] = TYPE_TRANSACTION.CHO_XAC_NHAN;
				break;
			default:
				item['status_transaction'] = TYPE_TRANSACTION.CHO_XAC_NHAN;
				break;
		}
		console.log('item', item); // MongLV log fix bug
		putTransaction(item);
	};

	const transactionFilter = () => {
		let arr = [...Object.values(transaction)];
		if (type !== 'Tất cả') {
			arr = Object.values(transaction).filter((item) => item.status_transaction === type);
		}
		return arr;
	};

	useEffect(() => {
		getListTransaction({}, true);
		getListCart();
		getListProduct();
	}, []);

	// JSX
	const ListComponent = (item) => (
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
					<div className={style.footer_list_left}>
						{item['status_transaction'] !== TYPE_TRANSACTION.DA_GIAO ? (
							<>
								<div>
									<Button
										type="primary"
										disabled={type === TYPE_TRANSACTION.ALL}
										onClick={() => updateStatus(item)}
									>
										Xác nhận
									</Button>
								</div>
								<div>
									<Button danger type="primary" disabled={type === TYPE_TRANSACTION.ALL}>
										Hủy đơn
									</Button>
								</div>
							</>
						) : (
							<div></div>
						)}

						<div>
							<div>
								Họ và tên : <span style={{ marginLeft: 30 }}>Thanh Mai Dao</span>
							</div>
							<div>
								Số điện thoại : <span style={{ marginLeft: 5 }}>0966382406</span>
							</div>
						</div>
					</div>
					<div className={style.footer_list_ringth}>
						<div className={style.footer_list_one}>
							<div className={style.footer_logo}>
								<img src={logo} />
							</div>
							<span className={style.footer_tong_tien}>Tổng số tiền : </span>
							<span className={style.footer_tien}>{ConvertStringToVND(item.amount)}</span>
						</div>
						{/*<div className={style.footer_action}>*/}
						{/*	<Button className={style.btn_action}>Xem chi tiết đơn hàng</Button>*/}
						{/*</div>*/}
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
									product[carts[cartId].product_id].amount
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
							product[carts[cartId].product_id].name
						}
						description={`Số lượng: ${carts[cartId] && carts[cartId].amount}`}
					/>
				</List.Item>
			)}
		/>
	);
	return (
		<div className={style.purchase_list_page__tabs_container}>
			<div className={style.card_container}>
				<Tabs type="card" className={style.tab_ant} onChange={callback}>
					<TabPane tab={TYPE_TRANSACTION.ALL} key={TYPE_TRANSACTION.ALL}>
						<div style={{ marginBottom: 20, border: '1px solid red' }}>
							{transactionFilter().map((item) => ListComponent(item))}
						</div>
					</TabPane>
					<TabPane
						tab={TYPE_TRANSACTION.CHO_XAC_NHAN}
						key={TYPE_TRANSACTION.CHO_XAC_NHAN}
					>
						<div style={{ marginBottom: 20, border: '1px solid red' }}>
							{transactionFilter().map((item) => ListComponent(item))}
						</div>
					</TabPane>
					<TabPane
						tab={TYPE_TRANSACTION.CHO_LAY_HANG}
						key={TYPE_TRANSACTION.CHO_LAY_HANG}
					>
						<div style={{ marginBottom: 20, border: '1px solid red' }}>
							{transactionFilter().map((item) => ListComponent(item))}
						</div>
					</TabPane>
					<TabPane tab={TYPE_TRANSACTION.DANG_GIAO} key={TYPE_TRANSACTION.DANG_GIAO}>
						<div style={{ marginBottom: 20, border: '1px solid red' }}>
							{transactionFilter().map((item) => ListComponent(item))}
						</div>
					</TabPane>
					<TabPane tab={TYPE_TRANSACTION.DA_GIAO} key={TYPE_TRANSACTION.DA_GIAO}>
						<div style={{ marginBottom: 20, border: '1px solid red' }}>
							{transactionFilter().map((item) => ListComponent(item))}
						</div>
					</TabPane>
					<TabPane tab={TYPE_TRANSACTION.DA_HUY} key={TYPE_TRANSACTION.DA_HUY}>
						<div style={{ marginBottom: 20, border: '1px solid red' }}>
							{transactionFilter().map((item) => ListComponent(item))}
						</div>
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
}

DonDatHang.propTypes = {};

DonDatHang.defaultProps = {};

export default DonDatHang;
