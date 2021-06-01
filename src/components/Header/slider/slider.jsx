import React from 'react';
import { Carousel } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
//style
import hot from '../../../img/hot.gif';
import { Link } from 'react-router-dom';
import Styles from './styleSlider.module.css';
import useCategoryLogicData from '../../../hooks/useCategoryLogicData';
import { BASE_URL_IMAGE } from '../../../util/TypeApi';
import useSliderLogicData from '../../../hooks/useSliderLogicData';

const contentStyle = {
	width: '666px',
	height: '350px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
	objectFit: 'cover',
};
/* eslint-disable */

function Slider() {
	// hooks
	const { getListCategory, category } = useCategoryLogicData();
	const { getListSlider, slider } = useSliderLogicData();

	// const
	const listCategory = Object.values(category);
	const categoryOther = listCategory.length > 7 ? listCategory[6] : null;

	// Vong dong
	React.useEffect(() => {
		getListCategory().then().catch();
		getListSlider().then().catch();
	}, []);
	return (
		<div className={Styles.slider_center}>
			{/*khong dong*/}
			<div className={Styles.menu_slider}>
				<ul className={Styles.hot_sale}>
					<div className={Styles.menu_danhmuc}>
						<li className={Styles.danhmuc}>
							<MenuFoldOutlined className={Styles.icon__category} />
							<h2>DANH MỤC</h2>
						</li>
					</div>
					<div className={Styles.menu_hotsale}>
						<div className={Styles.dososinh}>
							<li className={Styles.hot_sale_one}>
								<i>
									<img src={hot} />
								</i>
								<p>Top đầu tìm kiếm</p>
								<i>
									s
									<img src={hot} />
								</i>
							</li>
						</div>
						<div className={Styles.suabot_ta_bim}>
							<li className={Styles.hot_sale_tow}>
								<div>
									<i>
										<img src={hot} />
									</i>
								</div>
								<div>
									<p>Xếp hình</p>
									<p>- Xe</p>
									<p>- Máy súc [Có quà]</p>
								</div>
								<div>
									<i>
										<img src={hot} />
									</i>
								</div>
							</li>
						</div>
						<div className={Styles.khuyenmai_hangmoi}>
							<li className={Styles.hot_sale_fire}>
								<div>
									<i>
										<img src={hot} />
									</i>
								</div>
								<div>
									<p>Khuyến mại</p>
									<p>- Hàng mới về</p>
								</div>
								<div>
									<i>
										<img src={hot} />
									</i>
								</div>
							</li>
						</div>
					</div>
				</ul>
			</div>
			{/*khong dong*/}
			<div className={Styles.slider}>
				<div className={Styles.left_slider}>
					<ul className={Styles.content_category_list}>
						{listCategory.slice(0, 6).map((item) => (
							<li style={{ paddingTop: '6px' }}>
								<Link to={`/xemtheomenu?_id=${item._id}`}>
									<i
										style={{
											width: '33px',
											height: '33px',
											marginLeft: '10px',
											marginRight: '10px',
										}}
									>
										<img
											src={BASE_URL_IMAGE + item.icon}
											style={{ color: '#d219e7', fontSize: '20px' }}
										/>
									</i>
									{item.name}
								</Link>
							</li>
						))}
						{categoryOther && (
							<li style={{ paddingTop: '6px' }}>
								<Link to={`/xemtheomenu?_id=${categoryOther._id}`}>
									<i
										style={{
											width: '33px',
											height: '33px',
											marginLeft: '10px',
											marginRight: '10px',
										}}
									>
										<img
											src={BASE_URL_IMAGE + categoryOther.icon}
											style={{ color: '#d219e7', fontSize: '20px' }}
										/>
									</i>
									{categoryOther.name}
								</Link>
								<div className={Styles.menu_hover}>
									<ul>
										<div style={{ display: 'flex' }}>
											<div
												className={Styles.menu_hover_row}
												style={{ borderRight: '1px solid #e0e0e0' }}
											>
												{listCategory.slice(7, 14).map((item) => (
													<li className={Styles.menu_hover_row_item}>
														<Link
															to={`/xemtheomenu?_id=${item._id}`}
															className={Styles.menu_hover_link}
														>
															{item.name}
														</Link>
													</li>
												))}
											</div>
											<div className={Styles.menu_hover_row}>
												{listCategory.slice(14, 20).map((item) => (
													<li className={Styles.menu_hover_row_item}>
														<Link
															to={`/xemtheomenu?_id=${item._id}`}
															className={Styles.menu_hover_link}
														>
															{item.name}
														</Link>
													</li>
												))}
												{listCategory.length > 19 && (
													<li className={Styles.menu_hover_row_item}>
														<Link to={`/xemtheomenu`} className={Styles.menu_hover_link}>
															Xem tất cả >>
														</Link>
													</li>
												)}
											</div>
										</div>
									</ul>
								</div>
							</li>
						)}
					</ul>
				</div>
				<div className={Styles.center_slider}>
					<Carousel autoplay className={Styles.picture_slider}>
						{Object.values(slider)
							.sort((item1, item2) => item1.index - item2.index)
							.slice(0, 6)
							.map((item) => (
								<div>
									<h3 style={contentStyle}>
										<img
											style={{ width: '666px', height: '350px' }}
											src={BASE_URL_IMAGE + item.image_link}
											alt={item.name}
										/>
									</h3>
								</div>
							))}
					</Carousel>
				</div>
				<div className={Styles.right_slider}>
					<img
						style={{ width: '100%', height: '175px' }}
						src="https://media.shoptretho.com.vn/upload/image/banner/20210301/quet-vnpay-giam-15k-190-x-204.png"
						alt="Quét VNPay giảm 15k"
					/>
					<img
						style={{ width: '100%', height: '175px' }}
						src="https://media.shoptretho.com.vn/upload/image/banner/20210301/chuc-mung-8-3-uu-dai-cho-me-qua-tang-cho-be-190-x-204-1.png"
						alt="Chúc mừng 8/3 - Ưu đãi cho mẹ - Qùa tặng cho bé"
					/>
				</div>
			</div>
		</div>
	);
}

export default Slider;
