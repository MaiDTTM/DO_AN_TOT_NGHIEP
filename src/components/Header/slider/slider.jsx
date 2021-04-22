import React from 'react';
import { Carousel } from 'antd';
import {
	SmileTwoTone,
	MenuFoldOutlined,
	HomeOutlined,
	PhoneOutlined,
	QuestionCircleOutlined,
} from '@ant-design/icons';
//style
import hot from '../../../img/hot.gif';
//import slider
import slider1 from '../../../img/slider1.jpg';
import slider2 from '../../../img/giam-gia-do-choi-go.jpg';
import slider3 from '../../../img/slider3.jpg';
import slider4 from '../../../img/slider4.jpg';
import slider5 from '../../../img/slider6.jpg';
import { Link } from 'react-router-dom';
import Styles from './styleSlider.module.css';

const contentStyle = {
	width: '950px',
	height: '501px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
	objectFit: 'cover',
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
								<a>Top đầu tìm kiếm</a>
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
									<a>Xếp hình</a>
									<a>- Xe</a>
									<a>- Máy súc [Có quà]</a>
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
						<li style={{ paddingTop: '6px' }}>
							<Link to={'/'}>
								<i
									style={{
										width: '33px',
										height: '33px',
										marginLeft: '10px',
										marginRight: '10px',
									}}
								>
									<HomeOutlined style={{ color: '#d219e7', fontSize: '20px' }} />
								</i>
								Trang chủ
							</Link>
						</li>
						<li style={{ paddingTop: '6px' }}>
							<Link to={'/gioithieu'}>
								<i
									style={{
										width: '33px',
										height: '33px',
										marginLeft: '10px',
										marginRight: '10px',
									}}
								>
									<SmileTwoTone style={{ fontSize: '20px' }} />
								</i>
								Giới thiệu về GCB
							</Link>
						</li>
						<li style={{ paddingTop: '6px' }}>
							<a href="#">
								<i
									style={{
										width: '33px',
										height: '33px',
										marginRight: '10px',
									}}
								>
									<img src="https://shoptretho.com.vn/Content/images/khuyen-mai.png?mode=max&width=60&height=60" />
								</i>
								Khuyến mại lớn
							</a>
						</li>
						<li style={{ paddingTop: '6px' }}>
							<a href="#">
								<i
									style={{
										width: '33px',
										height: '33px',
										marginRight: '10px',
									}}
								>
									<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/do-choi-1.png?mode=max&width=60&height=60" />
								</i>
								Sản phẩm đồ chơi gỗ
							</a>
							<div className={Styles.menu_hover}>
								<ul>
									<div style={{ display: 'flex' }}>
										<div
											className={Styles.menu_hover_row}
											style={{ borderRight: '1px solid #e0e0e0' }}
										>
											<li className={Styles.menu_hover_row_item}>
												<a href="" className={Styles.menu_hover_link}>
													Bảng ghép chữ, số và hình các loại
												</a>
											</li>
											<li className={Styles.menu_hover_row_item}>
												<a href="" className={Styles.menu_hover_link}>
													Đồ chơi cỡ lớn
												</a>
											</li>
											<li className={Styles.menu_hover_row_item}>
												<a href="" className={Styles.menu_hover_link}>
													Bảng viết, giá vẽ, chữ, số nam châm
												</a>
											</li>
											<li className={Styles.menu_hover_row_item}>
												<a href="" className={Styles.menu_hover_link}>
													Rút gỗ, rubik, tangram trí uẩn
												</a>
											</li>
											<li className={Styles.menu_hover_row_item}>
												<a href="" className={Styles.menu_hover_link}>
													Bàn tính, đômino, que tính
												</a>
											</li>
											<li className={Styles.menu_hover_row_item}>
												<a href="" className={Styles.menu_hover_link}>
													Xếp và ghép hình trí tuệ
												</a>
											</li>
											<li className={Styles.menu_hover_row_item}>
												<a href="" className={Styles.menu_hover_link}>
													Luồn hạt, xâu vòng, đồng hồ
												</a>
											</li>
											<li className={Styles.menu_hover_row_item}>
												<a href="" className={Styles.menu_hover_link}>
													Xe ô tô, đoàn tàu
												</a>
											</li>
											<li className={Styles.menu_hover_row_item}>
												<a href="" className={Styles.menu_hover_link}>
													Nhạc cụ, âm thanh, đồ cho bé 1 tuổi
												</a>
											</li>
											<li className={Styles.menu_hover_row_item}>
												<a href="" className={Styles.menu_hover_link}>
													Câu cá, câu ếch, cắt củ quả
												</a>
											</li>
										</div>
										<div className={Styles.menu_hover_row}>
											<li className={Styles.menu_hover_row_item}>
												<a href="" className={Styles.menu_hover_link}>
													Xếp tháp, thả hình, luyện kỹ năng
												</a>
											</li>
											<li className={Styles.menu_hover_row_item}>
												<a href="" className={Styles.menu_hover_link}>
													Kỹ thuật, kéo đẩy, đập bóng, đập cọc
												</a>
											</li>
											<li className={Styles.menu_hover_row_item}>
												<a href="" className={Styles.menu_hover_link}>
													Xe tập đi, ngựa gỗ, ghế ăn bột
												</a>
											</li>
											<li className={Styles.menu_hover_row_item}>
												<a href="" className={Styles.menu_hover_link}>
													Lắp ghép thú 3D
												</a>
											</li>
										</div>
									</div>
								</ul>
							</div>
						</li>
						<li style={{ paddingTop: '6px' }}>
							<a href="#">
								<i
									style={{
										width: '33px',
										height: '33px',
										marginRight: '10px',
									}}
								>
									<img src="https://media.shoptretho.com.vn/upload/image/menu/20150803/qua-tang-1.png?mode=max&width=60&height=60" />
								</i>
								Quà tặng
							</a>
							<div className={Styles.menu_hover__qua_tang}>
								<div className={Styles.menu_hover_row}>
									<ul>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Quà sinh nhật cho bé
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Quà đầy tháng
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Quà tết thiếu nhi 1-6
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Quà tặng 8-3
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Quà tết trung thu
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Quà tặng Noel cho bé
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Quà tết cho bé
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Quà tặng cho bé
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a href="" className={Styles.menu_hover_link}>
												Album ảnh, khung ảnh, sách
											</a>
										</li>
										<li className={Styles.menu_hover_row_item}>
											<a
												href=""
												className={Styles.menu_hover_link}
												style={{ color: 'red' }}
											>
												Xem tất cả >>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li style={{ paddingTop: '6px' }}>
							<a href="#">
								<i
									style={{
										width: '33px',
										height: '33px',
										marginLeft: '10px',
										marginRight: '10px',
									}}
								>
									<QuestionCircleOutlined
										style={{ color: '#25e0ab', fontSize: '20px' }}
									/>
								</i>
								Hướng dẫn mua hàng
							</a>
						</li>
						<li style={{ paddingTop: '6px' }}>
							<Link to={'/lienhe'}>
								<i
									style={{
										width: '33px',
										height: '33px',
										marginLeft: '10px',
										marginRight: '10px',
									}}
								>
									<PhoneOutlined style={{ color: '#2bbe26', fontSize: '20px' }} />
								</i>
								Liên hệ chúng tôi
							</Link>
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
									style={{ width: '950px', height: '501px', objectFit: 'cover' }}
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
								<img
									src={slider5}
									alt="Uống sữa Friso nhận ngàn quà tặng MB"
									style={{ width: '950px', height: '501px', objectFit: 'fill' }}
								/>
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
