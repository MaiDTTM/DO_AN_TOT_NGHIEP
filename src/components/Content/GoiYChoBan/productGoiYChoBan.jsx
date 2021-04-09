import React from 'react';
import { Card, Pagination } from 'antd';
//style
import './styleGoiY.css';
const { Meta } = Card;

ProductListGoiYChoBan.propTypes = {};

function ProductListGoiYChoBan(props) {
	return (
		<div className="list_hot">
			<div className="content_host">
				<div className="header_goi_y">
					<div
						style={{
							width: '30%',
							height: '100%',
							display: 'flex',
							justifyContent: 'space-around',
							marginTop: '15px',
						}}
					>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<div>
								<h1>GỢI Ý CHO BẠN</h1>
							</div>
							<div
								style={{
									width: '100%',
									height: '5px',
									backgroundColor: 'rgb(238, 77, 45)',
								}}
							/>
						</div>
						<div>
							<img
								src="https://cf.shopee.vn/file/3eee015cc8c039be3ebe8bb7b621ecf3"
								style={{ width: 'auto', height: '1.25rem' }}
							/>
						</div>
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
				<div className="content_host_item">
					<Card
						hoverable
						style={{ width: 240 }}
						cover={
							<img
								alt="Đồ chơi ô tô thả hình số đếm XE30a"
								src="https://media.shoptretho.com.vn/upload/image/product/20190510/do-choi-o-to-tha-hinh-so-1.png?mode=max&width=400&height=400"
							/>
						}
					>
						<Meta title="Đồ chơi ô tô thả hình số đếm XE30a" description="185.000 VND" />
					</Card>
					<Card
						hoverable
						style={{ width: 240 }}
						cover={
							<img
								alt="Đồ chơi ô tô thả hình đập chuột XE33b"
								src="https://media.shoptretho.com.vn/upload/image/product/20190510/do-choi-o-to-tha-hinh-dap-chuot-3.png?mode=max&width=400&height=400"
							/>
						}
					>
						<Meta
							title="Đồ chơi ô tô thả hình đập chuột XE33b"
							description="260.000 VND"
						/>
					</Card>
					<Card
						hoverable
						style={{ width: 240 }}
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
						style={{ width: 240 }}
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
						style={{ width: 240 }}
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
				<div className="content_host_item">
					<Card
						hoverable
						style={{ width: 240 }}
						cover={
							<img
								alt="Bảng số có núm gỗ - BA101"
								src="https://media.shoptretho.com.vn/upload/image/product/20170524/bang-so-co-num-ba101-1.jpg?mode=max&width=400&height=400"
							/>
						}
					>
						<Meta title="Bảng số có núm gỗ - BA101" description="185.000 VND" />
					</Card>
					<Card
						hoverable
						style={{ width: 240 }}
						cover={
							<img
								alt="Đồ chơi gỗ GCB - Đập bóng và đàn hình hổ DB01"
								src="https://media.shoptretho.com.vn/upload/image/product/20160111/bo-dan-va-ba-bi-ca605-1.jpg?mode=max&width=400&height=400"
							/>
						}
					>
						<Meta
							title="Đồ chơi gỗ GCB - Đập bóng và đàn hình hổ DB01"
							description="260.000 VND"
						/>
					</Card>
					<Card
						hoverable
						style={{ width: 240 }}
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
						style={{ width: 240 }}
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
						style={{ width: 240 }}
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
				<div className="content_host_item">
					<Card
						hoverable
						style={{ width: 240 }}
						cover={
							<img
								alt="Đồ chơi ô tô thả hình số đếm XE30a"
								src="https://media.shoptretho.com.vn/upload/image/product/20190510/do-choi-o-to-tha-hinh-so-1.png?mode=max&width=400&height=400"
							/>
						}
					>
						<Meta title="Đồ chơi ô tô thả hình số đếm XE30a" description="185.000 VND" />
					</Card>
					<Card
						hoverable
						style={{ width: 240 }}
						cover={
							<img
								alt="Đồ chơi ô tô thả hình đập chuột XE33b"
								src="https://media.shoptretho.com.vn/upload/image/product/20190510/do-choi-o-to-tha-hinh-dap-chuot-3.png?mode=max&width=400&height=400"
							/>
						}
					>
						<Meta
							title="Đồ chơi ô tô thả hình đập chuột XE33b"
							description="260.000 VND"
						/>
					</Card>
					<Card
						hoverable
						style={{ width: 240 }}
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
						style={{ width: 240 }}
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
						style={{ width: 240 }}
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
				<div className="paganation_page">
					<Pagination defaultCurrent={1} total={50} />
				</div>
			</div>
		</div>
	);
}

export default ProductListGoiYChoBan;
