import React from 'react';
import Chung from '../Header/Chung';
import style from './styles.module.css';
import { UnorderedListOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import Footer from '../Footer/footer';
// import PropTypes from 'prop-types';
const { Meta } = Card;
function WatchCatagory() {
	const product = useSelector((state) => state['product']);
	return (
		<div>
			<Chung />
			<div className={style.wrap}>
				<div className={style.width_common}>
					<div className={style.title_danh_muc}>
						<div className={style.cate_home}>
							<UnorderedListOutlined style={{ margin: '0 15px' }} />
							Danh mục
						</div>
						<div className={style.label_page_header}>
							<h1 className={style.label_page_header_label}>Sản phẩm đồ chơi gỗ</h1>
							<hr className={style.hr_btn} />
						</div>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<div className={style.menu_item}>
							<ul>
								<li>Đồ chơi rút gỗ</li>
								<li>Đồ chơi gỗ Etic</li>
								<li>Đồ chơi gỗ Mother Garden</li>
								<li>Đồ chơi gỗ Toptoys</li>
								<li>Đồ chơi gỗ Winwin Toys</li>
								<li>Đồ chơi gỗ khác</li>
							</ul>
						</div>
						<div className={style.page_row}>
							{Object.values(product)
								.concat(Object.values(product))
								.slice(0, 40)
								.map((item) => (
									<Link to={`/detail/${item._id}`}>
										<Card
											className={style.cart_tat_ca}
											hoverable
											cover={
												<img
													alt="Đồ chơi ô tô thả hình số đếm XE30a"
													src="https://picsum.photos/200"
												/>
											}
										>
											<Meta
												title={item.name}
												description={
													(item.price * 1000)
														.toString()
														.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' VNĐ'
												}
											/>
										</Card>
									</Link>
								))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

WatchCatagory.propTypes = {};

WatchCatagory.defaultProps = {};

export default WatchCatagory;
