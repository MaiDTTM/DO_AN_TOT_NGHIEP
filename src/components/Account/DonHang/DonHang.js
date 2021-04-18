import React from 'react';
// import PropTypes from 'prop-types';
import style from './styles.module.css';
import { Tabs, List, Avatar, Button } from 'antd';
const { TabPane } = Tabs;

const dataAll = [
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
const dataXacNhan = [
	{
		title: 'Ant Design Title 1',
	},
	{
		title: 'Ant Design Title 2',
	},
];
function DonHang() {
	return (
		<div className={style.purchase_list_page__tabs_container}>
			<div className={style.card_container}>
				<Tabs type="card">
					<TabPane tab="Tất cả" key="1">
						<List
							itemLayout="horizontal"
							dataSource={dataAll}
							renderItem={(item) => (
								<List.Item
									actions={[
										<div>
											<div>
												<h4>Tổng tiền đơn hàng</h4>
											</div>
											<div>100.000</div>
											<div>
												<Button
													style={{
														marginRight: '10px',
														width: '100px',
														backgroundColor: '#ee4d2d',
														color: '#ffffff',
													}}
												>
													Mua lại
												</Button>
												<Button>xem chi tiết</Button>
											</div>
										</div>,
									]}
								>
									<List.Item.Meta
										avatar={
											<Avatar
												src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
												style={{ width: '50px', height: '50px' }}
											/>
										}
										title={<a href="https://ant.design">{item.title}</a>}
										description="Ant Design, a design language for background applications, is refined by Ant UED Team"
									/>
								</List.Item>
							)}
						/>
					</TabPane>
					<TabPane tab="Chờ xác nhận" key="2">
						<List
							itemLayout="horizontal"
							dataSource={dataXacNhan}
							renderItem={(item) => (
								<List.Item
									actions={[
										<div>
											<div>
												<h4>Tổng tiền đơn hàng</h4>
											</div>
											<div>100.000</div>
											<div>
												<Button
													style={{
														marginRight: '10px',
														width: '100px',
														backgroundColor: '#ee4d2d',
														color: '#ffffff',
													}}
												>
													Mua lại
												</Button>
												<Button>xem chi tiết</Button>
											</div>
										</div>,
									]}
								>
									<List.Item.Meta
										avatar={
											<Avatar
												src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
												style={{ width: '50px', height: '50px' }}
											/>
										}
										title={<a href="https://ant.design">{item.title}</a>}
										description="Ant Design, a design language for background applications, is refined by Ant UED Team"
									/>
								</List.Item>
							)}
						/>
					</TabPane>
					<TabPane tab="Chờ lấy hàng" key="3">
						<List
							itemLayout="horizontal"
							// dataSource={dataAll}
							renderItem={(item) => (
								<List.Item
									actions={[
										<div>
											<div>
												<h4>Tổng tiền đơn hàng</h4>
											</div>
											<div>100.000</div>
											<div>
												<Button
													style={{
														marginRight: '10px',
														width: '100px',
														backgroundColor: '#ee4d2d',
														color: '#ffffff',
													}}
												>
													Mua lại
												</Button>
												<Button>xem chi tiết</Button>
											</div>
										</div>,
									]}
								>
									<List.Item.Meta
										avatar={
											<Avatar
												src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
												style={{ width: '50px', height: '50px' }}
											/>
										}
										title={<a href="https://ant.design">{item.title}</a>}
										description="Ant Design, a design language for background applications, is refined by Ant UED Team"
									/>
								</List.Item>
							)}
						/>
					</TabPane>
					<TabPane tab="Đang giao" key="4">
						<List
							itemLayout="horizontal"
							// dataSource={dataAll}
							renderItem={(item) => (
								<List.Item
									actions={[
										<div>
											<div>
												<h4>Tổng tiền đơn hàng</h4>
											</div>
											<div>100.000</div>
											<div>
												<Button
													style={{
														marginRight: '10px',
														width: '100px',
														backgroundColor: '#ee4d2d',
														color: '#ffffff',
													}}
												>
													Mua lại
												</Button>
												<Button>xem chi tiết</Button>
											</div>
										</div>,
									]}
								>
									<List.Item.Meta
										avatar={
											<Avatar
												src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
												style={{ width: '50px', height: '50px' }}
											/>
										}
										title={<a href="https://ant.design">{item.title}</a>}
										description="Ant Design, a design language for background applications, is refined by Ant UED Team"
									/>
								</List.Item>
							)}
						/>
					</TabPane>
					<TabPane tab="Đã giao" key="5">
						<List
							itemLayout="horizontal"
							// dataSource={dataAll}
							renderItem={(item) => (
								<List.Item
									actions={[
										<div>
											<div>
												<h4>Tổng tiền đơn hàng</h4>
											</div>
											<div>100.000</div>
											<div>
												<Button
													style={{
														marginRight: '10px',
														width: '100px',
														backgroundColor: '#ee4d2d',
														color: '#ffffff',
													}}
												>
													Mua lại
												</Button>
												<Button>xem chi tiết</Button>
											</div>
										</div>,
									]}
								>
									<List.Item.Meta
										avatar={
											<Avatar
												src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
												style={{ width: '50px', height: '50px' }}
											/>
										}
										title={<a href="https://ant.design">{item.title}</a>}
										description="Ant Design, a design language for background applications, is refined by Ant UED Team"
									/>
								</List.Item>
							)}
						/>
					</TabPane>
					<TabPane tab="Đã hủy" key="6">
						<List
							itemLayout="horizontal"
							// dataSource={dataAll}
							renderItem={(item) => (
								<List.Item
									actions={[
										<div>
											<div>
												<h4>Tổng tiền đơn hàng</h4>
											</div>
											<div>100.000</div>
											<div>
												<Button
													style={{
														marginRight: '10px',
														width: '100px',
														backgroundColor: '#ee4d2d',
														color: '#ffffff',
													}}
												>
													Mua lại
												</Button>
												<Button>xem chi tiết</Button>
											</div>
										</div>,
									]}
								>
									<List.Item.Meta
										avatar={
											<Avatar
												src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
												style={{ width: '50px', height: '50px' }}
											/>
										}
										title={<a href="https://ant.design">{item.title}</a>}
										description="Ant Design, a design language for background applications, is refined by Ant UED Team"
									/>
								</List.Item>
							)}
						/>
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
}

DonHang.propTypes = {};

DonHang.defaultProps = {};

export default DonHang;
