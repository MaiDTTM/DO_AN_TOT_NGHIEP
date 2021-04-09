import React from 'react';
import { Card, Statistic } from 'antd';
// import PropTypes from 'prop-types';
import './Style.css';
const { Meta } = Card;
const style = {};
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 2 + 1000 * 30; // Moment is also OK
function FlashSale() {
	function onFinish() {
		console.log('finished!');
	}
	return (
		<div className="list_hot">
			<div className="content_host">
				<div className="header_hot">
					<div style={{ display: 'flex', width: '30%', height: '100%' }}>
						<div className="sale" />
						<div className="time_sale">
							<Countdown
								value={deadline}
								onFinish={onFinish}
								valueStyle={{ color: '#ffffff', fontSize: '25px' }}
							/>
						</div>
					</div>
				</div>
				<div className="content_host_item">
					<Card
						hoverable
						className="card_item"
						cover={
							<img
								alt="Bảng số có núm gỗ - BA101"
								src="https://media.shoptretho.com.vn/upload/image/product/20170524/bang-so-co-num-ba101-1.jpg?mode=max&width=400&height=400"
							/>
						}
					>
						<Meta title="Bảng số có núm gỗ - BA101" description="185.000 VND" />
						<div className="_2TDZGE">
							<div className="percent">15%</div>
							<div className="_17XqBU">giảm</div>
						</div>
					</Card>
					<Card
						hoverable
						className="card_item"
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
						<div className="_2TDZGE">
							<div className="percent">25%</div>
							<div className="_17XqBU">giảm</div>
						</div>
					</Card>
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
						<div className="_2TDZGE">
							<div className="percent">70%</div>
							<div className="_17XqBU">giảm</div>
						</div>
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
						<div className="_2TDZGE">
							<div className="percent">15%</div>
							<div className="_17XqBU">giảm</div>
						</div>
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
						<div className="_2TDZGE">
							<div className="percent">30%</div>
							<div className="_17XqBU">giảm</div>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}

FlashSale.propTypes = {};

FlashSale.defaultProps = {};

export default FlashSale;
