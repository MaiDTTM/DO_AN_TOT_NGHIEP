import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Tabs, List, Avatar, Button, message, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import style from './style.module.css';
import reqwest from 'reqwest';
import logo from '../../../../img/tong_tien.png';
const { TabPane } = Tabs;
const fakeDataUrl =
	'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
const datatest = [
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
function DonDatHang() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [hasMore, setHasMore] = useState(true);
	const fetchData = (callback) => {
		reqwest({
			url: fakeDataUrl,
			type: 'json',
			method: 'get',
			contentType: 'application/json',
			success: (res) => {
				callback(res);
			},
		});
	};
	const handleInfiniteOnLoad = () => {
		setLoading(true);
		if (data.length > 14) {
			message.warning('Infinite List loaded all');
			setHasMore(false);
			setLoading(false);
			return;
		}
		fetchData((res) => {
			const dataNew = data.concat(res.results);
			setData(dataNew);
			setLoading(false);
		});
	};
	useEffect(() => {
		fetchData((res) => {
			setData(res.results);
		});
	}, []);
	return (
		<div className={style.purchase_list_page__tabs_container}>
			<div className={style.card_container}>
				<Tabs type="card" className={style.tab_ant}>
					<TabPane tab="Tất cả" key="1">
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
								dataSource={datatest}
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
					</TabPane>
					<TabPane tab="Chờ xác nhận" key="2">
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
											<Button className={style.btn_action}>Xác nhận đơn hàng</Button>
											<Button>Xem chi tiết đơn hàng</Button>
										</div>
									</div>
								}
								bordered
								dataSource={datatest}
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
					</TabPane>
					<TabPane tab="Chờ lấy hàng" key="3">
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
											<Button className={style.btn_action}>Đã chuẩn bị xong hàng</Button>
											<Button>Xem chi tiết đơn hàng</Button>
										</div>
									</div>
								}
								bordered
								dataSource={datatest}
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
					</TabPane>
					<TabPane tab="Đang giao" key="4">
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
											<Button className={style.btn_action}>Đã gửi hàng</Button>
											<Button>Xem chi tiết đơn hàng</Button>
										</div>
									</div>
								}
								bordered
								dataSource={datatest}
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
					</TabPane>
					<TabPane tab="Đã giao" key="5">
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
											<Button className={style.btn_action}>
												Xác nhận giao hàng thành công
											</Button>
											<Button>Xem chi tiết đơn hàng</Button>
										</div>
									</div>
								}
								bordered
								dataSource={datatest}
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
					</TabPane>
					<TabPane tab="Đã hủy" key="6">
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
								dataSource={datatest}
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
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
}

DonDatHang.propTypes = {};

DonDatHang.defaultProps = {};

export default DonDatHang;
