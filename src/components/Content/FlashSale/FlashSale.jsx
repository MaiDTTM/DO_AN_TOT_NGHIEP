import React from 'react';
import { Button, Card, Statistic } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Styles from './Style.module.css';
import { Link } from 'react-router-dom';
const { Meta } = Card;
const style = {};
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 2 + 1000 * 30; // Moment is also OK

function FlashSale({ product }) {
	// state
	const [numberStart, setNumberStart] = React.useState(0);
	const [numberEnd, setNumberEnd] = React.useState(6);

	// const
	const arraySale = Object.values(product).filter((item) => item['price_seo'].length > 0);

	// handle func
	const onFinish = () => {
		console.log('finished!');
	};
	const handleNext = () => {
		if (arraySale.length !== numberEnd - 1) {
			setNumberStart(numberStart + 6);
			setNumberEnd(numberEnd + 6);
		}
	};
	const handleDown = () => {
		if (numberStart !== 0) {
			setNumberStart(numberStart - 6);
			setNumberEnd(numberEnd - 6);
		}
	};
	return (
		<div className={Styles.list_hot}>
			<div className={Styles.content_host}>
				<div className={Styles.header_hot}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							width: '30%',
							height: '100%',
						}}
					>
						<div className={Styles.sale} />
						<div className={Styles.time_sale}>
							<Countdown
								value={deadline}
								onFinish={onFinish}
								valueStyle={{ color: '#ffffff', fontSize: '18px' }}
							/>
						</div>
					</div>
					<div className={Styles.xem_tat_ca}>
						<a>Xem tất cả</a>
						<Button type="text" icon={<RightOutlined />} className={Styles.btn_xem} />
					</div>
				</div>
				<div className={Styles.content_host_item}>
					<Button
						onClick={handleDown}
						className={Styles.btn_giam}
						type="primary"
						shape="circle"
						icon={<LeftOutlined />}
					/>
					<div
						style={{
							width: '95%',
							height: '100%',
							display: 'flex',
							justifyContent: 'space-around',
							position: 'relative',
						}}
					>
						{arraySale.slice(numberStart, numberEnd).map((item) => (
							<Link to={`/detail/${item._id}`}>
								<Card
									hoverable
									className={Styles.card_item}
									cover={
										<img
											alt="Bảng số có núm gỗ - BA101"
											src="https://media.shoptretho.com.vn/upload/image/product/20170524/bang-so-co-num-ba101-1.jpg?mode=max&width=400&height=400"
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
									<div className={Styles._2TDZGE}>
										<div className={Styles.percent}>{item['price_seo']}</div>
										<div className={Styles._17XqBU}>giảm</div>
									</div>
								</Card>
							</Link>
						))}
					</div>
					<Button
						type="primary"
						shape="circle"
						onClick={handleNext}
						className={Styles.btn_tang}
						icon={<RightOutlined />}
					/>
				</div>
			</div>
		</div>
	);
}

FlashSale.propTypes = {
	product: PropTypes.object,
};

FlashSale.defaultProps = {
	product: {},
};

export default FlashSale;
