import React from 'react';
import { Button, Card } from 'antd';
//style
import Styles from './styleHost.module.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Slider from './SliderNoiBat/Slider';
import { Link } from 'react-router-dom';
const { Meta } = Card;
ProductListHot.propTypes = {};

function ProductListHot(props) {
	return (
		<div className={Styles.list_hot}>
			<div className={Styles.content_noi_bat}>
				<div className={Styles.header_noi_bat}>
					<div className={Styles.title_noi_bat}>SẢN PHẨM NỔI BẬT</div>
					<div className={Styles._2Kl5gH}>
						<div className={Styles.sQprQi}>
							<div className={Styles._2SCKPT_5} />7 ngày miễn phí trả hàng
						</div>
						<div className={Styles.sQprQi}>
							<div className={Styles._2SCKPT_6} />
							Hàng chính hãng 100%
						</div>
						<div className={Styles.sQprQi}>
							<div className={Styles._2SCKPT_7} />
							Miễn phí vận chuyển
						</div>
					</div>
					<div className={Styles.xem_tat_ca_noi_bat}>
						<Link to="/allnoibat">
							<Button type="text" className={Styles.btn_xem}>
								Xem tất cả >
							</Button>
						</Link>
					</div>
				</div>
				<hr
					style={{
						height: '2px',
						borderWidth: '0',
						color: '#5deccf',
						backgroundColor: '#efdada',
					}}
				/>
				<div className={Styles.elemtent_noibat}>
					<div className={Styles.slideshow_container}>
						<Slider />
					</div>
					<div className={Styles.item_cart_content}>
						<Button
							className={Styles.btn_giam_noi_bat}
							type="primary"
							shape="circle"
							icon={<LeftOutlined />}
						/>
						<div className={Styles.item_cart_content_i}>
							<Card
								hoverable
								className={Styles.card_noi_bat}
								cover={
									<img
										alt="Bảng số và phép tính BA127b (1-20 số)"
										src="https://media.shoptretho.com.vn/upload/image/product/20190508/bang-so-va-phep-tinh-ba127b-2.png?mode=max&width=400&height=400"
									/>
								}
							>
								<Meta
									title="Bảng số và phép tính BA127b (1-20 số)"
									description="86.000 VND"
								/>
							</Card>
							<Card
								hoverable
								className={Styles.card_noi_bat}
								cover={
									<img
										alt="Đồ chơi ô tô thả hình số đàn nhạc đa năng XE33d"
										src="https://media.shoptretho.com.vn/upload/image/product/20190508/do-choi-o-to-tha-hinh-so-da-nang-xe33d-1.jpg?mode=max&width=400&height=400"
									/>
								}
							>
								<Meta
									title="Đồ chơi ô tô thả hình số đàn nhạc đa năng XE33d"
									description="260.000 VND"
								/>
							</Card>
							<Card
								hoverable
								className={Styles.card_noi_bat}
								cover={
									<img
										alt="Đập bóng lốc xoáy DB10"
										src="https://media.shoptretho.com.vn/upload/image/product/20170727/dap-bong-loc-xoay-5.jpg?mode=max&width=400&height=400"
									/>
								}
							>
								<Meta title="Đập bóng lốc xoáy DB10" description="180.000 VND" />
							</Card>
							<Card
								hoverable
								className={Styles.card_noi_bat}
								cover={
									<img
										alt="Đồ chơi gỗ GCB - Luồn hạt LH07 in hình voi"
										src="https://media.shoptretho.com.vn/upload/image/product/20151013/do-choi-go-a-xau-chuoi-thong-minh-aws0026.jpg?mode=max&width=400&height=400"
									/>
								}
							>
								<Meta
									title="Đồ chơi gỗ GCB - Luồn hạt LH07 in hình voi"
									description="86.000 VND"
								/>
							</Card>
							<Card
								hoverable
								className={Styles.card_noi_bat}
								cover={
									<img
										alt="Đồ chơi gỗ GCB - Luồn hạt LH07 in hình voi"
										src="https://media.shoptretho.com.vn/upload/image/product/20151013/do-choi-go-a-xau-chuoi-thong-minh-aws0026.jpg?mode=max&width=400&height=400"
									/>
								}
							>
								<Meta
									title="Đồ chơi gỗ GCB - Luồn hạt LH07 in hình voi"
									description="86.000 VND"
								/>
							</Card>
							<Card
								hoverable
								className={Styles.card_noi_bat}
								cover={
									<img
										alt="Đồ chơi gỗ GCB - Bảng ghép hình chú voi BA76"
										src="https://media.shoptretho.com.vn/upload/image/product/20160613/bang-ghep-hinh-voi-ba76-1.jpg?mode=max&width=400&height=400"
									/>
								}
							>
								<Meta
									title="Đồ chơi gỗ GCB - Bảng ghép hình chú voi BA76"
									description="260.000 VND"
								/>
							</Card>
							<Card
								hoverable
								className={Styles.card_noi_bat}
								cover={
									<img
										alt="Đàn gõ Xylophone hình khủng long DA30b"
										src="https://media.shoptretho.com.vn/upload/image/product/20191023/dan-khung-long-ngo-nghinh-8-phim-1.jpg?mode=max&width=400&height=400"
									/>
								}
							>
								<Meta
									title="Đàn gõ Xylophone hình khủng long DA30b"
									description="180.000 VND"
								/>
							</Card>
							<Card
								hoverable
								className={Styles.card_noi_bat}
								cover={
									<img
										alt="Đồ chơi gỗ GCB - Luồn hạt LH07 in hình voi"
										src="https://media.shoptretho.com.vn/upload/image/product/20151013/do-choi-go-a-xau-chuoi-thong-minh-aws0026.jpg?mode=max&width=400&height=400"
									/>
								}
							>
								<Meta
									title="Đồ chơi gỗ GCB - Luồn hạt LH07 in hình voi"
									description="86.000 VND"
								/>
							</Card>
						</div>
					</div>
					<Button
						type="primary"
						shape="circle"
						className={Styles.btn_tang_noi_bat}
						icon={<RightOutlined />}
					/>
				</div>
			</div>
		</div>
	);
}

export default React.memo(ProductListHot);
