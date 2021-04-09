import React from 'react';
import { Carousel } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
//style
import './styleSlider.css';
import hot from '../../../img/hot.gif';
//import slider
import slider1 from '../../../img/slider1.jpg';
import slider2 from '../../../img/slider2.jpg';
import slider3 from '../../../img/slider3.jpg';
import slider4 from '../../../img/slider4.jpg';
import slider5 from '../../../img/slider5.png';
import HoverMenu from './hoverMenu';

const contentStyle = {
	width: '950px',
	height: '518px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
};

function Slider() {
	return (
		<div className="slider_center">
			<div className="menu_slider">
				<ul className="hot_sale">
					<div className="menu_danhmuc">
						<li className="danhmuc">
							<MenuFoldOutlined className={'icon__category'} />
							<h2>DANH MỤC</h2>
						</li>
					</div>
					<div className="menu_hotsale">
						<div className="dososinh">
							<li className="hot_sale_one">
								<i>
									<img src={hot} />
								</i>
								<a>Đồ sơ sinh</a>
								<i>
									<img src={hot} />
								</i>
							</li>
						</div>
						<div className="suabot_ta_bim">
							<li className="hot_sale_tow">
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
						<div className="khuyenmai_hangmoi">
							<li className="hot_sale_fire">
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
			<div className="slider">
				<div className="left_slider" id="menu_slider">
					<ul style={{ listStyle: 'none', width: '100%', height: '100%' }}>
						<li>
							<i>
								<img src="https://shoptretho.com.vn/Content/images/khuyen-mai.png?mode=max&width=60&height=60" />
							</i>
							<a href="#">Khuyến mại lớn</a>
							<HoverMenu />
						</li>
						<li>
							<i>
								<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/be-an-1.png?mode=max&width=60&height=60" />
							</i>
							<a href="#">Cho bé ăn</a>
						</li>
						<li>
							<i>
								<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/be-mac-1.png?mode=max&width=60&height=60" />
							</i>
							<a href="#">Cho bé mặc</a>
						</li>
						<li>
							<i>
								<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/be-di-choi-1.png?mode=max&width=60&height=60" />
							</i>
							<a href="#">Cho bé đi chơi</a>
						</li>
						<li>
							<i>
								<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/be-ngu-1.png?mode=max&width=60&height=60" />
							</i>
							<a href="#">Cho bé ngủ</a>
						</li>
						<li>
							<i>
								<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/ve-sinh-cho-be-1.png?mode=max&width=60&height=60" />
							</i>
							<a href="#">Vệ sinh cho bé</a>
						</li>
						<li>
							<i>
								<img src="https://media.shoptretho.com.vn/upload/image/menu/20151027/be-khoe-1.png?mode=max&width=60&height=60" />
							</i>
							<a href="#">Bé khỏe & an toàn</a>
						</li>
						<li>
							<i>
								<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/do-choi-1.png?mode=max&width=60&height=60" />
							</i>
							<a href="#">Đồ chơi trẻ em</a>
						</li>
						<li>
							<i>
								<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/qua-tang-1.png?mode=max&width=60&height=60" />
							</i>
							<a href="#">Quà tặng</a>
						</li>
						<li>
							<i>
								<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/do-dung-cho-me-1.png?mode=max&width=60&height=60" />
							</i>
							<a href="#">Đồ dùng cho mẹ</a>
						</li>
						<li>
							<i>
								<img src="https://media.shoptretho.com.vn/upload/image/menu/20151027/do-gia-dung-1.png?mode=max&width=60&height=60" />
							</i>
							<a href="#">Đồ dùng gia đình</a>
						</li>
					</ul>
				</div>
				<div className="center_slider">
					<Carousel autoplay className="picture_slider">
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
				<div className="right_slider">
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
