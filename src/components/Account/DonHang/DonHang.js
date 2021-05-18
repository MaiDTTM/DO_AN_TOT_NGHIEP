import React from 'react';
import logo from '../../../img/tong_tien.png';
// import PropTypes from 'prop-types';
import style from './styles.module.css';
import { Tabs, List, Avatar, Button, Image } from 'antd';
import useTransactionData from '../../../hooks/useTransactionData';
import useCartLogicData from '../../../hooks/useCartLogicData';
import useProductLogicData from '../../../hooks/useProductLogicData';
import ConvertStringToVND from '../../../util/ConvertStringToVND';
import TYPE_TRANSACTION from '../../../util/TypeDoDatHang';
const { TabPane } = Tabs;
const data = [
	{
		title: 'Ant Design Title 1',
	},
	{
		title: 'Ant Design Title 2',
	},
	{
		title: 'Ant Design Title 3',
	},
	{
		title: 'Ant Design Title 4',
	},
];
function DonHang() {
	const { getListTransaction, transaction } = useTransactionData();
	const { carts } = useCartLogicData();
	const { product } = useProductLogicData();

	// state
	const [type, setType] = React.useState(TYPE_TRANSACTION.ALL);

	const transactionFilter = () => {
		let arr = [...Object.values(transaction)];
		if (type !== 'Tất cả') {
			arr = Object.values(transaction).filter((item) => item.status_transaction === type);
		}
		return arr;
	};
	const handleImage = (cartId) => {
		return carts[cartId] && carts[cartId].product_id
			? product[carts[cartId].product_id].image
			: 'https://blackmantkd.com/wp-content/uploads/2017/04/default-image.jpg';
	};

	// funct
	const callback = (key) => {
		console.log('key', key); // MongLV log fix bug
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
				<div style={{ marginBottom: 20, border: '1px solid red' }}>
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
								{/*<div className={style.footer_action}>*/}
								{/*	<Button className={style.btn_action}>Xem chi tiết đơn hàng</Button>*/}
								{/*</div>*/}
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
				</div>
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
		</div>
	);
}

DonHang.propTypes = {};

DonHang.defaultProps = {};

export default DonHang;
