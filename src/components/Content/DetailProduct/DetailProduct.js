import React from 'react';
import Advertisement from '../../Header/advertisement/advertisement';
import MenuHome from '../../Header/menuHeader/MenuHome';
import '../../Header/advertisement/style.scss';
import '../../Header/menuHeader/style.module.css';
import Styles from './Style.module.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Card, Rate, Pagination, message, Empty } from 'antd';
import { Link, useHistory, useParams } from 'react-router-dom';
import CommentProduct from './Comment/Comment';
import Footer from '../../Footer/footer';
import BuyProduct from './BuyProduct/BuyProduct';
import Chung from '../../Header/Chung';
import { useDispatch, useSelector } from 'react-redux';
import baseAPI from '../../../axios/baseAPI';
import { TypeApi } from '../../../util/TypeApi';
import { TYPE_ACTION } from '../../../actions/TypeAction';
import ReactImageMagnify from 'react-image-magnify';
const { Meta } = Card;
const key = 'updatable';
// import PropTypes from 'prop-types';
const Style = {
	width: '100%',
	height: '60px',
	display: 'flex',
	justifyContent: 'center',
	backgroundColor: '#ea2190',
	float: 'left',
};
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
		console.log('value', value);
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
		Object.values(objDetail).length > 0 &&
			getProduct({ catalog_id: objDetail.catalog_id }, setProductSuggest);
	}, [objDetail]);

	// const image
	const srcSet = () => {
		return images
			.map((image) => {
				return `${imageBaseUrl}${image.name} ${image.vw}`;
			})
			.join(', ');
	};
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
					{/*<div className={Styles.content_1}>*/}
					{/*	<div className={Styles.content_1_img}>*/}
					{/*		<div*/}
					{/*			className="w3_content"*/}
					{/*			style={{*/}
					{/*				width: '95%',*/}
					{/*				height: '92%',*/}
					{/*				display: 'flex',*/}
					{/*				flexDirection: 'column',*/}
					{/*				marginLeft: '15px',*/}
					{/*			}}*/}
					{/*		>*/}
					{/*			<img*/}
					{/*				className="mySlides"*/}
					{/*				src="https://media.shoptretho.com.vn/upload/image/product/20170524/bang-so-co-num-ba101-1.jpg?mode=max&width=400&height=400"*/}
					{/*				style={{*/}
					{/*					width: '100%',*/}
					{/*					height: '70%',*/}
					{/*					display: 'block',*/}
					{/*				}}*/}
					{/*			/>*/}
					{/*			<img*/}
					{/*				className="mySlides"*/}
					{/*				src="https://i.pinimg.com/originals/a0/dc/35/a0dc35e337a9c7bf922bf5edc022236d.jpg"*/}
					{/*				style={{ width: '100%', height: '70%', display: 'none' }}*/}
					{/*			/>*/}
					{/*			<img*/}
					{/*				className="mySlides"*/}
					{/*				src="https://i.pinimg.com/originals/a8/45/76/a84576a04c1874304735604d9f47d5a4.jpg"*/}
					{/*				style={{ width: '100%', height: '70%', display: 'none' }}*/}
					{/*			/>*/}
					{/*			<div*/}
					{/*				className="w3-row-padding w3-section"*/}
					{/*				style={{*/}
					{/*					width: '100%',*/}
					{/*					marginTop: '30px',*/}
					{/*					display: 'flex',*/}
					{/*					justifyContent: 'space-around',*/}
					{/*				}}*/}
					{/*			>*/}
					{/*				<div className="w3-col s4" style={{ width: '30%' }}>*/}
					{/*					<img*/}
					{/*						className="demo w3-opacity w3-hover-opacity-off"*/}
					{/*						src="https://media.shoptretho.com.vn/upload/image/product/20170524/bang-so-co-num-ba101-1.jpg?mode=max&width=400&height=400"*/}
					{/*						style={{ width: '100%', cursor: 'pointer', display: 'block' }}*/}
					{/*						onClick={() => currentDiv(1)}*/}
					{/*					/>*/}
					{/*				</div>*/}
					{/*				<div className="w3-col s4" style={{ width: '30%' }}>*/}
					{/*					<img*/}
					{/*						className="demo w3-opacity w3-hover-opacity-offf"*/}
					{/*						src="https://i.pinimg.com/originals/a0/dc/35/a0dc35e337a9c7bf922bf5edc022236d.jpg"*/}
					{/*						style={{ width: '100%', cursor: 'pointer', display: 'block' }}*/}
					{/*						onClick={() => currentDiv(2)}*/}
					{/*					/>*/}
					{/*				</div>*/}
					{/*				<div className="w3-col s4" style={{ width: '30%' }}>*/}
					{/*					<img*/}
					{/*						className="demo w3-opacity w3-hover-opacity-offff"*/}
					{/*						src="https://i.pinimg.com/originals/a8/45/76/a84576a04c1874304735604d9f47d5a4.jpg"*/}
					{/*						style={{ width: '100%', cursor: 'pointer', display: 'block' }}*/}
					{/*						onClick={() => currentDiv(3)}*/}
					{/*					/>*/}
					{/*				</div>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*	<div className={Styles.content_1_detail}>*/}
					{/*		<div*/}
					{/*			style={{*/}
					{/*				width: '100%',*/}
					{/*				height: '15%',*/}
					{/*				display: 'flex',*/}
					{/*				flexDirection: 'column',*/}
					{/*			}}*/}
					{/*		>*/}
					{/*			<div*/}
					{/*				style={{*/}
					{/*					fontSize: '14px',*/}
					{/*					fontFamily: 'inherit',*/}
					{/*					marginLeft: '50px',*/}
					{/*					paddingTop: '5px',*/}
					{/*				}}*/}
					{/*			>*/}
					{/*				<h1>{objDetail.name}</h1>*/}
					{/*			</div>*/}
					{/*			<div style={{ display: 'flex', marginLeft: '50px', marginTop: '15px' }}>*/}
					{/*				<div*/}
					{/*					style={{*/}
					{/*						borderRight: '2px solid #f1f1f1',*/}
					{/*						marginRight: '10px',*/}
					{/*						display: 'flex',*/}
					{/*						justifyContent: 'space-between',*/}
					{/*					}}*/}
					{/*				>*/}
					{/*					<Rate*/}
					{/*						allowHalf*/}
					{/*						defaultValue={2.5}*/}
					{/*						style={{ fontSize: '18px', marginRight: '20px' }}*/}
					{/*					/>*/}
					{/*					<div*/}
					{/*						style={{*/}
					{/*							fontSize: '20px',*/}
					{/*							marginRight: '15px',*/}
					{/*							fontFamily: '-moz-initial',*/}
					{/*							color: '#86dbd8',*/}
					{/*							cursor: 'pointer',*/}
					{/*						}}*/}
					{/*					>*/}
					{/*						Bình luận*/}
					{/*					</div>*/}
					{/*				</div>*/}
					{/*				<p*/}
					{/*					style={{*/}
					{/*						fontSize: '20px',*/}
					{/*						marginRight: '20px',*/}
					{/*						fontFamily: '-moz-initial',*/}
					{/*					}}*/}
					{/*				>*/}
					{/*					Thương hiệu : GCB Mã SP : DCG-69782*/}
					{/*				</p>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*		<hr*/}
					{/*			style={{*/}
					{/*				height: '2px',*/}
					{/*				borderWidth: '0',*/}
					{/*				color: '#5deccf',*/}
					{/*				backgroundColor: '#efdada',*/}
					{/*			}}*/}
					{/*		/>*/}
					{/*		<div*/}
					{/*			style={{*/}
					{/*				display: 'flex',*/}
					{/*				flexDirection: 'column',*/}
					{/*				width: '70%',*/}
					{/*				height: '75%',*/}
					{/*				marginLeft: '150px',*/}
					{/*				marginTop: '50px',*/}
					{/*			}}*/}
					{/*		>*/}
					{/*			<div style={{ display: 'flex', width: '80%' }}>*/}
					{/*				<div*/}
					{/*					style={{*/}
					{/*						fontSize: '20px',*/}
					{/*						fontFamily: '-moz-initial',*/}
					{/*						paddingTop: '30px',*/}
					{/*					}}*/}
					{/*				>*/}
					{/*					Giá :*/}
					{/*				</div>*/}
					{/*				<div*/}
					{/*					style={{*/}
					{/*						fontSize: '40px',*/}
					{/*						fontWeight: 'bold',*/}
					{/*						color: '#fd6a02',*/}
					{/*						marginLeft: '100px',*/}
					{/*					}}*/}
					{/*				>*/}
					{/*					{(objDetail.price * 1000)*/}
					{/*						.toString()*/}
					{/*						.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' VNĐ'}*/}
					{/*				</div>*/}
					{/*			</div>*/}
					{/*			<div style={{ display: 'flex', width: '80%' }}>*/}
					{/*				<div*/}
					{/*					style={{*/}
					{/*						fontSize: '20px',*/}
					{/*						fontFamily: '-moz-initial',*/}
					{/*						paddingTop: '10px',*/}
					{/*					}}*/}
					{/*				>*/}
					{/*					Tình trạng :*/}
					{/*				</div>*/}
					{/*				<div*/}
					{/*					style={{*/}
					{/*						color: '#5abb5c',*/}
					{/*						fontWeight: 'bold',*/}
					{/*						fontSize: '24px',*/}
					{/*						marginLeft: '50px',*/}
					{/*					}}*/}
					{/*				>*/}
					{/*					{objDetail.status}*/}
					{/*				</div>*/}
					{/*			</div>*/}
					{/*			<div style={{ display: 'flex', width: '80%' }}>*/}
					{/*				<div*/}
					{/*					style={{*/}
					{/*						fontSize: '20px',*/}
					{/*						fontFamily: '-moz-initial',*/}
					{/*						// paddingTop: '15px',*/}
					{/*					}}*/}
					{/*				>*/}
					{/*					Vận chuyển :*/}
					{/*				</div>*/}
					{/*				<div*/}
					{/*					style={{*/}
					{/*						fontFamily: '-moz-initial',*/}
					{/*						marginLeft: '80px',*/}
					{/*						marginTop: '10px',*/}
					{/*						fontSize: '18px',*/}
					{/*					}}*/}
					{/*				>*/}
					{/*					<b style={{ fontSize: '22px' }}>Miễn phí vận chuyển</b> cho đơn hàng*/}
					{/*					từ 100.000đ*/}
					{/*				</div>*/}
					{/*			</div>*/}
					{/*			<div*/}
					{/*				style={{*/}
					{/*					display: 'flex',*/}
					{/*					width: '80%',*/}
					{/*					marginBottom: '25px',*/}
					{/*					paddingTop: '15px',*/}
					{/*				}}*/}
					{/*			>*/}
					{/*				<div*/}
					{/*					style={{*/}
					{/*						marginLeft: '10%',*/}
					{/*						width: '100%',*/}
					{/*						display: 'flex',*/}
					{/*						justifyContent: 'flex-start',*/}
					{/*					}}*/}
					{/*				>*/}
					{/*					<Button*/}
					{/*						type="primary"*/}
					{/*						className={Styles.btn_detail}*/}
					{/*						onClick={handleBuyProduct}*/}
					{/*					>*/}
					{/*						Mua ngay*/}
					{/*					</Button>*/}
					{/*				</div>*/}
					{/*				<div style={{ width: '40%' }}>*/}
					{/*					<Button*/}
					{/*						className={Styles.btn_detail_them_vao_gio}*/}
					{/*						onClick={handleAddCart}*/}
					{/*						type="primary"*/}
					{/*					>*/}
					{/*						Thêm vào giỏ hàng*/}
					{/*					</Button>*/}
					{/*				</div>*/}
					{/*			</div>*/}
					{/*			<div>*/}
					{/*				Tổng đài mua hàng miễn cước 1800 6066 ( Từ 8h đến 21h30 hằng ngày )*/}
					{/*			</div>*/}
					{/*			<div className={Styles.box_icon}>*/}
					{/*				<div className={Styles.box_icon_item}>*/}
					{/*					<span className={Styles.box_icon_ic_icon_ship} />*/}
					{/*					<span>*/}
					{/*						Giao hàng <br /> toàn quốc*/}
					{/*					</span>*/}
					{/*				</div>*/}
					{/*				<div className={Styles.box_icon_item}>*/}
					{/*					<span className={Styles.box_icon_bg_icon_ship} />*/}
					{/*					<span>*/}
					{/*						Đổi hàng 15 <br />*/}
					{/*						ngày miễn phí*/}
					{/*					</span>*/}
					{/*				</div>*/}
					{/*				<div className={Styles.box_icon_item}>*/}
					{/*					<span className={Styles.box_icon_chinhhang} />*/}
					{/*					<span>*/}
					{/*						Đảm bảo hàng <br /> chính hãng*/}
					{/*					</span>*/}
					{/*				</div>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</div>*/}
					<div className={Styles.content_1}>
						<div className={Styles.perimeter}>
							<div className={Styles.image}>
								<ReactImageMagnify
									{...{
										smallImage: {
											alt: 'Wristwatch by Ted Baker London',
											isFluidWidth: true,
											src: `${imageBaseUrl}wristwatch_1033.jpg`,
											srcSet: { srcSet },
											sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw',
											className: 'mySlides',
										},
										largeImage: {
											alt: '',
											src: `${imageBaseUrl}wristwatch_1200.jpg`,
											width: 1200,
											height: 1800,
										},
										isHintEnabled: true,
									}}
								/>
							</div>
							<div className={Styles.copy}>
								<h3>Touch</h3>
								<p className={Styles.App_intro}>
									Press (long touch) image to magnify. Pan (drag) to traverse image.
								</p>
								<p className={Styles.App_intro}>
									Note the page can be scrolled when touch begins on image.
								</p>
								<h3>Mouse</h3>
								<p>Hover image to magnify</p>
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
						<div className={Styles._3wdEZ5}>
							<div className={Styles._2pGc2E}>CHI TIẾT SẢN PHẨM</div>
							<div className={Styles._1afiLm}>{objDetail.product_detail}</div>
						</div>
						<div className={Styles._3wdEZ5_2}>
							<div className={Styles._2pGc2E}>MÔ TẢ SẢN PHẨM</div>
							<div className={Styles._1afiLm_1}>
								<div className={Styles._3yZnxJ}>{objDetail.description}</div>
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
