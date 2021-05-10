import React from 'react';
import logo from '../../../img/tong_tien.png';
// import PropTypes from 'prop-types';
import style from './styles.module.css';
import { Tabs, List, Avatar, Button } from 'antd';
import useTransactionData from '../../../hooks/useTransactionData';
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

	// state
	const [type, setType] = React.useState('Tất cả');
	// funct
	const callback = (key) => {
		console.log('key', key); // MongLV log fix bug
		setType(key);
	};
	React.useEffect(() => {
		const data = { status_transaction: type };
		type === 'Tất cả' ? getListTransaction() : getListTransaction(data);
	}, [type]);

	// JSX
	const ListComponent = (
		<React.Fragment>
			{
				<div style={{ marginBottom: 20, border: '1px solid red' }}>
					<List
						size="small"
						header={
							<div className={style.header_list}>
								<div className={style.header_don_hang}>Đơn hàng số 1</div>
								<div className={style.header_trang_thai}>ĐÃ XÁC NHẬN</div>
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
										30.000<sup>đ</sup>
									</span>
								</div>
								<div className={style.footer_action}>
									<Button className={style.btn_action}>Xem chi tiết đơn hàng</Button>
								</div>
							</div>
						}
						bordered
						dataSource={data}
						renderItem={(item) => (
							<List.Item
								actions={[
									<div style={{ textDecoration: 'line-through' }}>
										115.000<sup>đ</sup>
									</div>,
									<div style={{ color: ' #f05d40' }}>
										59.000<sup>đ</sup>
									</div>,
								]}
							>
								<List.Item.Meta
									avatar={
										<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
									}
									title={<a href="https://ant.design">{item.title}</a>}
									description={<div>x 1</div>}
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
					<TabPane tab="Tất cả" key="Tất cả">
						{ListComponent}
					</TabPane>
					<TabPane tab="Chờ xác nhận" key="Chờ xác nhận">
						{ListComponent}
					</TabPane>
					<TabPane tab="Chờ lấy hàng" key="Chờ lấy hàng">
						{ListComponent}
					</TabPane>
					<TabPane tab="Đang giao" key="Đang giao">
						{ListComponent}
					</TabPane>
					<TabPane tab="Đã giao" key="Đã giao">
						{ListComponent}
					</TabPane>
					<TabPane tab="Đã hủy" key="Đã hủy">
						{ListComponent}
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
}

DonHang.propTypes = {};

DonHang.defaultProps = {};

export default DonHang;
