import React from 'react';
import '../../Header/advertisement/style.scss';
import '../../Header/menuHeader/style.module.css';
import Styles from './Style.module.scss';
import { Button, Card, Rate, Pagination, message, Empty } from 'antd';
import { Link, useHistory, useParams } from 'react-router-dom';
import CommentProduct from './Comment/Comment';
import Footer from '../../Footer/footer';
import Chung from '../../Header/Chung';
import { useDispatch, useSelector } from 'react-redux';
import baseAPI from '../../../axios/baseAPI';
import { BASE_URL_IMAGE, TypeApi } from '../../../util/TypeApi';
import { TYPE_ACTION } from '../../../actions/TypeAction';
import ReactImageMagnify from 'react-image-magnify';
const { Meta } = Card;
const key = 'updatable';
// import PropTypes from 'prop-types';

const imageBaseUrl = 'https://s3-us-west-1.amazonaws.com/react-package-assets/images/';
const images = [
	{ name: 'wristwatch_355.jpg', vw: '355w' },
	{ name: 'wristwatch_481.jpg', vw: '481w' },
	{ name: 'wristwatch_584.jpg', vw: '584w' },
	{ name: 'wristwatch_687.jpg', vw: '687w' },
	{ name: 'wristwatch_770.jpg', vw: '770w' },
	{ name: 'wristwatch_861.jpg', vw: '861w' },
	{ name: 'wristwatch_955.jpg', vw: '955w' },
	{ name: 'wristwatch_1033.jpg', vw: '1033w' },
	{ name: 'wristwatch_1112.jpg', vw: '1112w' },
	{ name: 'wristwatch_1192.jpg', vw: '1192w' },
	{ name: 'wristwatch_1200.jpg', vw: '1200w' },
];
function DetailProduct() {
	// hooks
	const { id } = useParams();
	const product = useSelector((state) => state['product']);
	const myUser = useSelector((state) => state['myUser']);
	const carts = useSelector((state) => state['carts']);
	const history = useHistory();
	const dispatch = useDispatch();

	// filter
	const arrayProduct = Object.values(product).filter((item) => item._id === id);

	// state
	const [objDetail, setObjDetail] = React.useState({});
	const [productSuggest, setProductSuggest] = React.useState([]);
	const [imageActive, setImageActive] = React.useState('');
	const handleBuyProduct = () => {
		myUser.email
			? history.push('/buyproduct')
			: message.warn('Bạn cần đăng nhập để thực hiện chức năng này');
	};
	const handleAddCart = async () => {
		const dataCart = {
			product_id: id,
			status: false,
			user_id: myUser._id,
			amount: 1,
		};
		const { message: messageAPI, cart } = await baseAPI.add(TypeApi.cart, dataCart);
		if (messageAPI === 'SUCCESS') {
			carts[cart._id] = cart;
			await dispatch({
				type: TYPE_ACTION.CART.ADD_CART,
				payload: { data: { ...carts } },
			});
			message.loading({
				className: 'message_success',
				content: 'Đang thêm vào giỏ của bạn!',
				key,
			});
			setTimeout(() => {
				message.success({
					className: 'message_success',
					content: 'Thêm vào giỏ hàng thành công!',
					key,
					duration: 2,
				});
			}, 1000);
		} else {
			message.warn(messageAPI);
		}
	};
	let slideIndex;
	const currentDiv = (n) => {
		showDivs((slideIndex = n));
	};
	const showDivs = (value) => {
		let i;
		const x = document.getElementsByClassName('mySlides');
		const dots = document.getElementsByClassName('demo');
		if (value > x.length) {
			slideIndex = 1;
		}
		if (value < 1) {
			slideIndex = x.length;
		}
		for (i = 0; i < x.length; i++) {
			x[i].style.display = 'none';
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(' w3-opacity-off', '');
		}
		x[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].className += ' w3-opacity-off';
	};

	const getProduct = async (objParams, handleFunc, type) => {
		const data = await baseAPI.getAll(TypeApi.product, objParams);
		const arr = Object.values(data);
		arr.length > 0 && type === 'getId' ? handleFunc(arr[0]) : handleFunc(arr);
	};
	React.useEffect(() => {
		window.scrollTo(0, 0);
		arrayProduct.length > 0
			? setObjDetail(arrayProduct[0])
			: getProduct({ _id: id }, setObjDetail, 'getId');
	}, [id]);
	React.useEffect(() => {
		if (Object.values(objDetail).length > 0) {
			getProduct({ catalog_id: objDetail.catalog_id }, setProductSuggest);
			setImageActive(objDetail.image_destination[0]);
		}
	}, [objDetail]);

	// const image
	// const srcSet = () => {
	// 	return images
	// 		.map((image) => {
	// 			return `${imageBaseUrl}${image.name} ${image.vw}`;
	// 		})
	// 		.join(', ');
	// };
	return (
		<div>
			<Chung />
			{Object.values(objDetail).length === 0 ? (
				<div className={Styles.content_detail}>
					<div
						style={{
							color: 'red',
							fontSize: 50,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Empty description={'Không tìm thấy sản phẩm cần tìm'} />
						<span>404</span>
					</div>
				</div>
			) : (
				<div className={Styles.content_detail}>
					<div className={Styles.perimeter}>
						<div className={Styles.image}>
							<ReactImageMagnify
								{...{
									smallImage: {
										alt: 'Wristwatch by Ted Baker London',
										isFluidWidth: true,
										src: `${BASE_URL_IMAGE}${imageActive}`,
										// srcSet: srcSet,
										sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw',
										className: 'mySlides',
									},
									largeImage: {
										alt: '',
										src: `${BASE_URL_IMAGE}${imageActive}`,
										width: 1200,
										height: 1200,
									},
									enlargedImageContainerStyle: {
										zIndex: '1500',
									},
									enlargedImageContainerDimensions: {
										width: '90%',
										height: '70%',
									},
									isHintEnabled: true,
								}}
							/>
							<div
								className={'flex_row'}
								style={{ marginTop: 10, justifyContent: 'center' }}
							>
								{objDetail.image_destination &&
									objDetail.image_destination.map((name) => (
										<img
											src={BASE_URL_IMAGE + name}
											style={{
												width: 65,
												height: 65,
												cursor: 'pointer',
												border: imageActive === name ? '1px solid red' : '1px solid #fff',
												objectFit: 'cover',
												marginLeft: 5,
											}}
											onClick={() => setImageActive(name)}
										/>
									))}
							</div>
						</div>
						<div className={Styles.copy}>
							<div className={Styles.copy_header_detail}>
								<h1>{objDetail.name}</h1>
								<div className={Styles.action_header_detail}>
									<div className={Styles.action_header_detail_item}>
										<Rate allowHalf defaultValue={2.5} style={{ fontSize: '18px' }} />
										<div className={Styles.action_binh_luan} style={{ marginLeft: 10 }}>
											Bình luận
										</div>
										<div className={Styles.action_thuong_hieu}>Thương hiệu : GCB</div>
										<div className={Styles.action_thuong_hieu}>
											Mã SP : <span>DCG-69782</span>
										</div>
									</div>
								</div>
							</div>
							<div className={Styles.copy_content_detail}>
								<div className={Styles.copy_content_detail_item}>
									<div className={Styles.copy_content_detail_title}>Giá :</div>
									<div className={Styles.copy_content_detail_values}>
										{(objDetail.price * 1000)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' VNĐ'}
									</div>
								</div>
								<div className={Styles.copy_content_detail_item}>
									<div className={Styles.copy_content_detail_title}>Tình trạng :</div>
									<div className={Styles.copy_content_detail_tinh_trang}>
										{objDetail.amount - objDetail['sold'] > 0 ? 'Còn hàng' : 'Hết hàng'}
									</div>
								</div>
								<div className={Styles.copy_content_detail_item}>
									<div className={Styles.copy_content_detail_title}>Vận chuyển :</div>
									<div className={Styles.copy_content_detail_van_chuyen}>
										<span>
											<strong>Miễn phí vận chuyển </strong>
											cho đơn hàng 100.000đ
										</span>
									</div>
								</div>
								<div className={Styles.copy_action_detail}>
									<div className={Styles.copy_action_mua}>
										<Button
											type="primary"
											className={Styles.btn_detail}
											onClick={handleBuyProduct}
										>
											Mua ngay
										</Button>
									</div>
									<div className={Styles.copy_action_gio}>
										<Button
											className={Styles.btn_detail_them_vao_gio}
											onClick={handleAddCart}
											type="primary"
										>
											Thêm vào giỏ hàng
										</Button>
									</div>
								</div>
								<div>
									Tổng đài mua hàng miễn cước{' '}
									<span style={{ color: '#ff3600', fontWeight: 'bold' }}>1800 6066</span>{' '}
									( Từ 8h đến 21h30 hằng ngày )
								</div>
								<div className={Styles.box_icon}>
									<div className={Styles.box_icon_item}>
										<span className={Styles.box_icon_ic_icon_ship} />
										<span>
											Giao hàng <br /> toàn quốc
										</span>
									</div>
									<div className={Styles.box_icon_item}>
										<span className={Styles.box_icon_bg_icon_ship} />
										<span>
											Đổi hàng 15 <br />
											ngày miễn phí
										</span>
									</div>
									<div className={Styles.box_icon_item}>
										<span className={Styles.box_icon_chinhhang} />
										<span>
											Đảm bảo hàng <br /> chính hãng
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={Styles.content_2}>
						<div className={Styles.title_banthich}>Có thể bạn thích</div>
						<div className={Styles.content_banthich}>
							{productSuggest.slice(0, 6).map((item) => (
								<Link to={`/detail/${item._id}`}>
									<Card
										hoverable
										className={Styles.card_item_banthich}
										cover={
											<img
												alt="Bảng số và phép tính BA127b (1-20 số)"
												src="https://media.shoptretho.com.vn/upload/image/product/20190508/bang-so-va-phep-tinh-ba127b-2.png?mode=max&width=400&height=400"
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
					<div className={Styles.content_3}>
						{/*<div className={Styles._3wdEZ5}>*/}
						{/*	<div className={Styles._2pGc2E}>CHI TIẾT SẢN PHẨM</div>*/}
						{/*	<div className={Styles._1afiLm}>{objDetail.product_detail}</div>*/}
						{/*</div>*/}
						<div className={Styles._3wdEZ5_2}>
							<div className={Styles._2pGc2E}>MÔ TẢ SẢN PHẨM</div>
							<div className={Styles._1afiLm_1}>
								<div dangerouslySetInnerHTML={{ __html: objDetail.description }} />
							</div>
						</div>
					</div>
					<div className={Styles.content_4}>
						<div className={Styles.product_ratings__header}>BÌNH LUẬN VỀ SẢN PHẨM</div>
						<div className={Styles.item_binh_luan}>
							<div className={Styles.comment}>
								<CommentProduct />
							</div>
							<div className={Styles.pagination}>
								<Pagination size="small" total={50} className={Styles.pa} />
							</div>
						</div>
					</div>
				</div>
			)}
			<div className={Styles.footer_detail}>
				<Footer />
			</div>
		</div>
	);
}

DetailProduct.propTypes = {};

DetailProduct.defaultProps = {};

export default DetailProduct;
