/* eslint-disable */
import React, { useState } from 'react';
import Chung from '../Header/Chung';
import style from './styles.module.css';
import { UnorderedListOutlined } from '@ant-design/icons';
import queryString from 'query-string';
import { Link, useHistory } from 'react-router-dom';
import { Card } from 'antd';
import Footer from '../Footer/footer';
import useCategoryLogicData from '../../hooks/useCategoryLogicData';
import useProductLogicData from '../../hooks/useProductLogicData';
import { BASE_URL_IMAGE } from '../../util/TypeApi';
import Styles from '../Content/GoiYChoBan/styleGoiY.module.css';
// import PropTypes from 'prop-types';
const { Meta } = Card;

function WatchCatagory() {
	// hooks
	const { product } = useProductLogicData();
	const { category, getListCategory } = useCategoryLogicData();
	const history = useHistory();

	// ref
	const idOld = React.useRef();

	// state
	const [categoryId, setCategoryId] = useState('');

	// const
	const parsed = queryString.parse(history.location.search);
	const id = parsed['_id'];
	const title =
		categoryId && category[categoryId] ? category[categoryId].name : 'Tất cả sản phẩm';
	const arrProduct = categoryId
		? Object.values(product).filter((item) => item['catalog_id'] === categoryId)
		: Object.values(product);

	// func handle
	const isActive = (_id) => {
		if (categoryId === _id) return '#b9c6f3';
		return '#ffffff';
	};
	const onClickCategory = (id) => {
		console.log('idOld.current', idOld.current);
		console.log('id', id);
		if (`${idOld.current}` === `${id}`) {
			categoryId ? setCategoryId('') : setCategoryId(id);
		} else {
			setCategoryId(id);
			idOld.current = id;
		}
	};

	// Vòng đời
	React.useEffect(() => {
		getListCategory();
	}, []);
	React.useEffect(() => {
		setCategoryId(id);
	}, [id]);
	return (
		<div>
			<Chung />
			<div className={style.wrap}>
				<div className={style.width_common}>
					<div className={style.title_danh_muc}>
						<div className={style.cate_home}>
							<UnorderedListOutlined style={{ margin: '0 15px' }} />
							Danh mục
						</div>
						<div className={style.label_page_header}>
							<h1 className={style.label_page_header_label}>{title}</h1>
							<hr className={style.hr_btn} />
						</div>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<div className={style.menu_item}>
							<ul>
								{Object.values(category).map(
									(item) =>
										item.name !== 'Đồ chơi gỗ khác' && (
											<li
												style={{ cursor: 'pointer', backgroundColor: isActive(item._id) }}
												onClick={() => onClickCategory(item._id)}
											>
												{/*<i style={{ marginRight: 10 }}>*/}
												{/*	<img*/}
												{/*		src={BASE_URL_IMAGE + item.icon}*/}
												{/*		style={{ width: 20, height: 20 }}*/}
												{/*	/>*/}
												{/*</i>*/}
												{item.name}
											</li>
										)
								)}
							</ul>
						</div>
						<div className={style.page_row}>
							{arrProduct.slice(0, 40).map((item) => (
								<Link to={`/detail/${item._id}`}>
									{item['price_seo'] !== '0 %' ? (
										<Card
											hoverable
											className={Styles.card_item_goi_y}
											cover={
												<img
													alt={item.image}
													src={BASE_URL_IMAGE + item.image}
													style={{ width: 178, height: 150 }}
												/>
											}
										>
											<Meta
												title={item.name}
												description={
													<div
														style={{
															color: '#ff6b00',
															fontSize: 14,
															fontWeight: 'bold',
														}}
													>
														<div>
															{(
																(
																	item.price -
																	(item.price * item.price_seo.split(' ')[0]) / 100
																).toFixed(2) * 1000
															)
																.toString()
																.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' đ'}
														</div>
														<span className={Styles.old_price}>
															{(item.price * 1000)
																.toString()
																.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' đ'}
														</span>
													</div>
												}
											/>
											<div className={Styles._2TDZGE}>
												<div className={Styles.percent}>{item['price_seo']}</div>
												<div className={Styles._17XqBU}>giảm</div>
											</div>
										</Card>
									) : (
										<Card
											hoverable
											className={Styles.card_item_goi_y}
											cover={
												<img
													alt="Đồ chơi ô tô thả hình số đếm XE30a"
													src={BASE_URL_IMAGE + item.image}
													style={{ width: 178, height: 150 }}
												/>
											}
										>
											<Meta
												title={item.name}
												description={
													<div
														style={{ color: '#ff6b00', fontSize: 14, fontWeight: 'bold' }}
													>
														{(item.price * 1000)
															.toString()
															.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' VNĐ'}
													</div>
												}
											/>
										</Card>
									)}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

WatchCatagory.propTypes = {};

WatchCatagory.defaultProps = {};

export default React.memo(WatchCatagory);
