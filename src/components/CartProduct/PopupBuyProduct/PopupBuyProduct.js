import React from 'react';
import { Avatar, Button, Modal, Popconfirm, Table } from 'antd';
import Styles from '../style.module.css';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const columnXemTatCa = [
	{
		title: 'STT',
		dataIndex: 'stt',
		width: '80px',
	},
	{
		title: 'Tên sản phẩm',
		dataIndex: 'name',
		width: '450px',
	},
	{
		title: 'Giá 1 sản phẩm',
		dataIndex: 'price',
		width: '100px',
	},
	{
		title: 'Số lượng',
		dataIndex: 'number',
		width: '100px',
	},
	{
		title: 'Tổng tiền',
		dataIndex: 'total',
		width: '100px',
	},
];
const data = [];
for (let i = 1; i < 11; i++) {
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
	});
}
function PopupBuyProduct(props) {
	const { setModal2Visible } = props;
	console.log('setModal2Visible', setModal2Visible);
	const handleHuy = () => {
		setModal2Visible(false);
	};
	return (
		<div>
			<Table
				columns={columnXemTatCa}
				dataSource={data}
				pagination={false}
				scroll={{ y: 240 }}
			/>
			<div style={{ marginTop: '50px', display: 'flex' }}>
				<div style={{ marginLeft: '320px' }}>
					<b>Số sản phẩm đã chọn :</b>{' '}
					<span style={{ color: 'red', fontSize: '18px' }}>10</span>
					<span> sản phẩm</span>
				</div>
				<div style={{ marginLeft: '100px' }}>
					<b>Tổng số tiền :</b>{' '}
					<span style={{ color: 'red', fontSize: '18px' }}>150.000</span>
					<span> nghìn đồng</span>
				</div>
			</div>
			<div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
				<Button
					style={{
						width: '100px',
						backgroundColor: '#f05d40',
						color: '#fff',
						boxShadow: '2px 5px 8px red',
						border: '1px solid',
						borderRadius: '25px',
						marginRight: '40px',
					}}
					onClick={handleHuy}
				>
					Hủy
				</Button>
				<Link to={'/buyproduct'}>
					<Button
						style={{
							width: '100px',
							backgroundColor: '#f05d40',
							color: '#fff',
							boxShadow: '2px 5px 8px red',
							border: '1px solid',
							borderRadius: '25px',
						}}
					>
						Đặt mua
					</Button>
				</Link>
			</div>
		</div>
	);
}

PopupBuyProduct.propTypes = {};

PopupBuyProduct.defaultProps = {};

export default PopupBuyProduct;
