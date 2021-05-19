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
	const title = categoryId ? category[categoryId].name : 'Tất cả sản phẩm';
	const arrProduct = categoryId
		? Object.values(product).filter((item) => item['catalog_id'] === categoryId)
		: Object.values(product);

	// func handle
	const isActive = (_id) => {
		if (categoryId === _id) return '#b9c6f3';
		return '#ffffff';
	};
	const onClickCategory = (id) => {
		console.log('idOld.current', idOld.current); // MongLV log fix bug
		console.log('id', id); // MongLV log fix bug
		console.log('idOld.current === id', idOld.current === id); // MongLV log fix bug
		`${idOld.current}` === `${id}` ? setCategoryId('') : setCategoryId(id);
		idOld.current = id;
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
												{item.name}
											</li>
										)
								)}
							</ul>
						</div>
						<div className={style.page_row}>
							{arrProduct.slice(0, 40).map((item) => (
								<Link to={`/detail/${item._id}`}>
									<Card
										className={style.cart_tat_ca}
										hoverable
										cover={
											<img
												alt="Đồ chơi ô tô thả hình số đếm XE30a"
												src={BASE_URL_IMAGE + item.image}
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
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

WatchCatagory.propTypes = {};

WatchCatagory.defaultProps = {};

export default WatchCatagory;
