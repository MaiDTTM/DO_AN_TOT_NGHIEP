import React from 'react';
import { Carousel } from 'antd';
import { SmileTwoTone, MenuFoldOutlined } from '@ant-design/icons';
//style
import hot from '../../../img/hot.gif';
//import slider
import slider1 from '../../../img/slider1.jpg';
import slider2 from '../../../img/slider2.jpg';
import slider3 from '../../../img/slider3.jpg';
import slider4 from '../../../img/slider4.jpg';
import slider5 from '../../../img/slider5.png';
import HoverMenu from './hoverMenu';
import { Link } from 'react-router-dom';
import Styles from './styleSlider.module.css';

const contentStyle = {
	width: '950px',
	height: '501px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
};

function Slider() {
	return (
		<div className={Styles.slider_center}>
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
								<a>Đồ sơ sinh</a>
								<i>
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
									<a>Sữa bột</a>
									<a>- Tã bỉm</a>
									<a>- Máy hút sữa [Có quà]</a>
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
									<a>Khuyến mại</a>
									<a>- Hàng mới về</a>
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
			<div className={Styles.slider}>
				<div className={Styles.left_slider}>
					<ul className={Styles.content_category_list}>
						<li>
							<Link to={'/gioithieu'}>
								<i
									style={{
										width: '33px',
										height: '33px',
										marginLeft: '10px',
										marginRight: '10px',
									}}
								>
									<SmileTwoTone />
								</i>
								Giới thiệu về GCB
							</Link>
						</li>
						<li>
							<a href="#">
								<i>
									<img src="https://shoptretho.com.vn/Content/images/khuyen-mai.png?mode=max&width=60&height=60" />
								</i>
								Khuyến mại lớn
							</a>
							<div className={Styles.menu_hover}>
								<div className={Styles.menu_hover_row}>
									<ul>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Tất cả ngoại ngữ
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Tiếng hàn
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Tiếng anh
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Tiếng đức
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Tiếng trung
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="#">
								<i>
									<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/be-an-1.png?mode=max&width=60&height=60" />
								</i>
								Cho bé ăn
							</a>
							<div className={Styles.menu_hover}>
								<div className={Styles.menu_hover_row}>
									<ul>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Hoan
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Thanh
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Slider
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="#">
								<i>
									<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/be-mac-1.png?mode=max&width=60&height=60" />
								</i>
								Cho bé mặc
							</a>
							<div className={Styles.menu_hover}>
								<div className={Styles.menu_hover_row}>
									<ul>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Hoan
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Thanh
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Slider
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="#">
								<i>
									<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/be-di-choi-1.png?mode=max&width=60&height=60" />
								</i>
								Cho bé đi chơi
							</a>
							<div className={Styles.menu_hover}>
								<div className={Styles.menu_hover_row}>
									<ul>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Hoan
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Thanh
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Slider
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="#">
								<i>
									<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/be-ngu-1.png?mode=max&width=60&height=60" />
								</i>
								Cho bé ngủ
							</a>
							<div className={Styles.menu_hover}>
								<div className={Styles.menu_hover_row}>
									<ul>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Hoan
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Thanh
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Slider
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="#">
								<i>
									<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/ve-sinh-cho-be-1.png?mode=max&width=60&height=60" />
								</i>
								Vệ sinh cho bé
							</a>
							<div className={Styles.menu_hover}>
								<div className={Styles.menu_hover_row}>
									<ul>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Hoan
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Thanh
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Slider
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="#">
								<i>
									<img src="https://media.shoptretho.com.vn/upload/image/menu/20151027/be-khoe-1.png?mode=max&width=60&height=60" />
								</i>
								Bé khỏe & an toàn
							</a>
							<div className={Styles.menu_hover}>
								<div className={Styles.menu_hover_row}>
									<ul>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Hoan
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Thanh
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Slider
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="#">
								<i>
									<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/do-choi-1.png?mode=max&width=60&height=60" />
								</i>
								Đồ chơi trẻ em
							</a>
							<div className={Styles.menu_hover}>
								<div className={Styles.menu_hover_row}>
									<ul>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Hoan
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Thanh
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Slider
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="#">
								<i>
									<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/qua-tang-1.png?mode=max&width=60&height=60" />
								</i>
								Quà tặng
							</a>
							<div className={Styles.menu_hover}>
								<div className={Styles.menu_hover_row}>
									<ul>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Hoan
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Thanh
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Slider
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="#">
								<i>
									<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/do-dung-cho-me-1.png?mode=max&width=60&height=60" />
								</i>
								Đồ dùng cho mẹ
							</a>
							<div className={Styles.menu_hover}>
								<div className={Styles.menu_hover_row}>
									<ul>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Hoan
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Thanh
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Slider
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="#">
								<i>
									<img src="https://media.shoptretho.com.vn/upload/image/menu/20151027/do-gia-dung-1.png?mode=max&width=60&height=60" />
								</i>
								Đồ dùng gia đình
							</a>
							<div className={Styles.menu_hover}>
								<div className={Styles.menu_hover_row}>
									<ul>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Hoan
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Thanh
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Slider
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Vui
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className={Styles.center_slider}>
					<Carousel autoplay className={Styles.picture_slider}>
						<div>
							<h3 style={contentStyle}>
								<img src={slider1} alt="Bỉm Moony" />
							</h3>
						</div>
						<div>
							<h3 style={contentStyle}>
								<img
									src={slider2}
									alt="Chúc mừng 8/3 - Ưu đãi cho mẹ - Qùa tặng cho bé"
								/>
							</h3>
						</div>
						<div>
							<h3 style={contentStyle}>
								<img src={slider3} alt="Joie giá tốt quà chất" />
							</h3>
						</div>
						<div>
							<h3 style={contentStyle}>
								<img src={slider4} alt="Quét VNPay giảm 15k" />
							</h3>
						</div>
						<div>
							<h3 style={contentStyle}>
								<img src={slider5} alt="Uống sữa Friso nhận ngàn quà tặng MB" />
							</h3>
						</div>
					</Carousel>
				</div>
				<div className={Styles.right_slider}>
					<img
						src="https://media.shoptretho.com.vn/upload/image/banner/20210301/quet-vnpay-giam-15k-190-x-204.png"
						alt="Quét VNPay giảm 15k"
					/>
					<img
						src="https://media.shoptretho.com.vn/upload/image/banner/20210301/chuc-mung-8-3-uu-dai-cho-me-qua-tang-cho-be-190-x-204-1.png"
						alt="Chúc mừng 8/3 - Ưu đãi cho mẹ - Qùa tặng cho bé"
					/>
				</div>
			</div>
		</div>
	);
}

export default Slider;
