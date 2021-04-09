import React from 'react';
import { Card } from 'antd';
//style
import './styleXuHuong.css';

const { Meta } = Card;

ProductListXuHuong.propTypes = {};

function ProductListXuHuong(props) {
	return (
		<div className="list_hot">
			<div className="content_host_tim_kien">
				<div className="title_tim_kien">
					<span>XU HƯỚNG TÌM KIẾM</span>
				</div>
				<hr
					style={{
						height: '2px',
						borderWidth: '0',
						color: '#5deccf',
						backgroundColor: '#efdada',
					}}
				/>
				<div className="content_tim_kien">
					<div className="content_tim_kien_item">
						<div className="title">
							<div>Sandal Nữ</div>
							<div>409k+ sản phẩm</div>
						</div>
						<div className="img">
							<img src="https://dochoigovn.com/wp-content/uploads/2019/05/Vai-tr%C3%B2-c%E1%BB%A7a-%C4%91%E1%BB%93-ch%C6%A1i-g%E1%BB%97-tr%C3%AD-tu%E1%BB%87-%E1%BA%A3nh-h%C6%B0%E1%BB%9Fng-%C4%91%E1%BA%BFn-tr%E1%BA%BB-nh%E1%BB%8F.jpg" />
						</div>
					</div>
					<div className="content_tim_kien_item">
						<div className="title">
							<div>Váy Trắng</div>
							<div>74k+ sản phẩm</div>
						</div>
						<div className="img">
							<img src="https://cf.shopee.vn/file/b2ca659b0b32171695df84336560ffcc" />
						</div>
					</div>
					<div className="content_tim_kien_item">
						<div className="title">
							<div>Balo Nữ</div>
							<div>279k+ sản phẩm</div>
						</div>
						<div className="img">
							<img src="https://cf.shopee.vn/file/b2ca659b0b32171695df84336560ffcc" />
						</div>
					</div>
					<div className="content_tim_kien_item">
						<div className="title">
							<div>Balo Nữ</div>
							<div>279k+ sản phẩm</div>
						</div>
						<div className="img">
							<img src="https://cf.shopee.vn/file/b2ca659b0b32171695df84336560ffcc" />
						</div>
					</div>
					<div className="content_tim_kien_item">
						<div className="title">
							<div>Balo Nữ</div>
							<div>279k+ sản phẩm</div>
						</div>
						<div className="img">
							<img src="https://cf.shopee.vn/file/b2ca659b0b32171695df84336560ffcc" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductListXuHuong;
