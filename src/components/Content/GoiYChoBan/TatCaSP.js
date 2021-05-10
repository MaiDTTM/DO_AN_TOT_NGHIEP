import React from 'react';
import Chung from '../../Header/Chung';
// import PropTypes from 'prop-types';
import style from './styleGoiY.module.css';
import { Card, Pagination } from 'antd';
import Footer from '../../Footer/footer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const { Meta } = Card;
function TatCaSP() {
	const product = useSelector((state) => state['product']);
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Chung />
			<div className={style.page_recommend_container}>
				<div className={style.label_page_header}>
					<h1 className={style.label_page_header_label}>Tất cả</h1>
					<hr className={style.label_page_header_dotted_line} />
				</div>
				<div className={style.page_row}>
					{Object.values(product)
						.concat(Object.values(product))
						.slice(0, 40)
						.map((item) => (
							<Link to={`/detail/${item._id}`}>
								<Card
									className={style.cart_tat_ca}
									hoverable
									cover={
										<img
											alt="Đồ chơi ô tô thả hình số đếm XE30a"
											src="https://picsum.photos/200"
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
								</Card>
							</Link>
						))}
				</div>
				<div className={style.content_page}>
					<Pagination defaultCurrent={6} total={500} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

TatCaSP.propTypes = {};

TatCaSP.defaultProps = {};

export default TatCaSP;
