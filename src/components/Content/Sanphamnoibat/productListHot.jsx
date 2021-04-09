import React from 'react';
import { Button, Card, Carousel } from 'antd';
//style
import './styleHost.css';
const { Meta } = Card;
const contentStyle = {
	height: '100%',
	width: '30%',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
};
ProductListHot.propTypes = {};

function ProductListHot(props) {
	return (
		<div className="list_hot">
			<div className="content_noi_bat">
				<div className="header_noi_bat">
					<div className="title_noi_bat">SẢN PHẨM NỔI BẬT</div>
					<div className="_2Kl5gH">
						<div className="sQprQi">
							<div className="_2SCKPT mall_selling_points-vn-background mall_selling_points-vn-7_day_return-png" />
							7 ngày miễn phí trả hàng
						</div>
						<div className="sQprQi">
							<div className="_2SCKPT mall_selling_points-vn-background mall_selling_points-vn-authentic-png" />
							Hàng chính hãng 100%
						</div>
						<div className="sQprQi">
							<div className="_2SCKPT mall_selling_points-vn-background mall_selling_points-vn-free_shipping-png" />
							Miễn phí vận chuyển
						</div>
					</div>
				</div>
				<hr
					style={{
						height: '2px',
						borderWidth: '0',
						color: '#5deccf',
						backgroundColor: '#ec5dde',
					}}
				/>
				<div className="element_noi_bat">
					<div className="slideshow-container"></div>
					<div></div>
					<div className="item_cart_content">
						<Card
							hoverable
							className="card_item"
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
							className="card_item"
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
							className="card_item"
							cover={
								<img
									alt="Đập bóng lốc xoáy DB10"
									src="https://media.shoptretho.com.vn/upload/image/product/20170727/dap-bong-loc-xoay-5.jpg?mode=max&width=400&height=400"
								/>
							}
						>
							<Meta title="Đập bóng lốc xoáy DB10" description="180.000 VND" />
						</Card>
					</div>
					<div className="content_item-noi_bat">
						<Card
							hoverable
							className="card_item"
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
							className="card_item"
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
							className="card_item"
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
					</div>
					{/*	<div>*/}
					{/*		<div className="content_item-noi_bat">*/}
					{/*			<Card*/}
					{/*				hoverable*/}
					{/*				className="card_item"*/}
					{/*				cover={*/}
					{/*					<img*/}
					{/*						alt="Bảng số và phép tính BA127b (1-20 số)"*/}
					{/*						src="https://media.shoptretho.com.vn/upload/image/product/20190508/bang-so-va-phep-tinh-ba127b-2.png?mode=max&width=400&height=400"*/}
					{/*					/>*/}
					{/*				}*/}
					{/*			>*/}
					{/*				<Meta*/}
					{/*					title="Bảng số và phép tính BA127b (1-20 số)"*/}
					{/*					description="86.000 VND"*/}
					{/*				/>*/}
					{/*			</Card>*/}
					{/*			<Card*/}
					{/*				hoverable*/}
					{/*				className="card_item"*/}
					{/*				cover={*/}
					{/*					<img*/}
					{/*						alt="Đồ chơi ô tô thả hình số đàn nhạc đa năng XE33d"*/}
					{/*						src="https://media.shoptretho.com.vn/upload/image/product/20190508/do-choi-o-to-tha-hinh-so-da-nang-xe33d-1.jpg?mode=max&width=400&height=400"*/}
					{/*					/>*/}
					{/*				}*/}
					{/*			>*/}
					{/*				<Meta*/}
					{/*					title="Đồ chơi ô tô thả hình số đàn nhạc đa năng XE33d"*/}
					{/*					description="260.000 VND"*/}
					{/*				/>*/}
					{/*			</Card>*/}
					{/*			<Card*/}
					{/*				hoverable*/}
					{/*				className="card_item"*/}
					{/*				cover={*/}
					{/*					<img*/}
					{/*						alt="Đập bóng lốc xoáy DB10"*/}
					{/*						src="https://media.shoptretho.com.vn/upload/image/product/20170727/dap-bong-loc-xoay-5.jpg?mode=max&width=400&height=400"*/}
					{/*					/>*/}
					{/*				}*/}
					{/*			>*/}
					{/*				<Meta title="Đập bóng lốc xoáy DB10" description="180.000 VND" />*/}
					{/*			</Card>*/}
					{/*		</div>*/}
					{/*		<div className="content_item-noi_bat">*/}
					{/*			<Card*/}
					{/*				hoverable*/}
					{/*				className="card_item"*/}
					{/*				cover={*/}
					{/*					<img*/}
					{/*						alt="Đồ chơi gỗ GCB - Luồn hạt LH07 in hình voi"*/}
					{/*						src="https://media.shoptretho.com.vn/upload/image/product/20151013/do-choi-go-a-xau-chuoi-thong-minh-aws0026.jpg?mode=max&width=400&height=400"*/}
					{/*					/>*/}
					{/*				}*/}
					{/*			>*/}
					{/*				<Meta*/}
					{/*					title="Đồ chơi gỗ GCB - Luồn hạt LH07 in hình voi"*/}
					{/*					description="86.000 VND"*/}
					{/*				/>*/}
					{/*			</Card>*/}
					{/*			<Card*/}
					{/*				hoverable*/}
					{/*				className="card_item"*/}
					{/*				cover={*/}
					{/*					<img*/}
					{/*						alt="Đồ chơi gỗ GCB - Bảng ghép hình chú voi BA76"*/}
					{/*						src="https://media.shoptretho.com.vn/upload/image/product/20160613/bang-ghep-hinh-voi-ba76-1.jpg?mode=max&width=400&height=400"*/}
					{/*					/>*/}
					{/*				}*/}
					{/*			>*/}
					{/*				<Meta*/}
					{/*					title="Đồ chơi gỗ GCB - Bảng ghép hình chú voi BA76"*/}
					{/*					description="260.000 VND"*/}
					{/*				/>*/}
					{/*			</Card>*/}
					{/*			<Card*/}
					{/*				hoverable*/}
					{/*				className="card_item"*/}
					{/*				cover={*/}
					{/*					<img*/}
					{/*						alt="Đàn gõ Xylophone hình khủng long DA30b"*/}
					{/*						src="https://media.shoptretho.com.vn/upload/image/product/20191023/dan-khung-long-ngo-nghinh-8-phim-1.jpg?mode=max&width=400&height=400"*/}
					{/*					/>*/}
					{/*				}*/}
					{/*			>*/}
					{/*				<Meta*/}
					{/*					title="Đàn gõ Xylophone hình khủng long DA30b"*/}
					{/*					description="180.000 VND"*/}
					{/*				/>*/}
					{/*			</Card>*/}
					{/*		</div>*/}
					{/*	</div>*/}
				</div>
			</div>
		</div>
	);
}

export default ProductListHot;
