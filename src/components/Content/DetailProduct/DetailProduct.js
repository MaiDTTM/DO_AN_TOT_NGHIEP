import React from 'react';
import Advertisement from '../../Header/advertisement/advertisement';
import MenuHome from '../../Header/menuHeader/MenuHome';
import '../../Header/advertisement/style.scss';
import '../../Header/menuHeader/style.module.css';
import Styles from './Style.module.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Card, Rate, Pagination, message } from 'antd';
import { Link } from 'react-router-dom';
import CommentProduct from './Comment/Comment';
import Footer from '../../Footer/footer';
import BuyProduct from './BuyProduct/BuyProduct';
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
function DetailProduct() {
	const handleBuyProduct = (e) => {
		return (
			<div>
				<BuyProduct />
			</div>
		);
	};
	const openMessage = () => {
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
		}, 2000);
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
	return (
		<div>
			<div className={Styles.header_home}>
				<div className="top_header width-common" style={Style}>
					<Advertisement />
				</div>
				<div className="from_menu_header">
					<MenuHome />
				</div>
			</div>
			<div className={Styles.content_detail}>
				<div className={Styles.content_1}>
					<div className={Styles.content_1_img}>
						<div
							className="w3_content"
							style={{
								width: '95%',
								height: '92%',
								display: 'flex',
								flexDirection: 'column',
								marginLeft: '15px',
								marginTop: '25px',
							}}
						>
							<img
								className="mySlides"
								src="https://media.shoptretho.com.vn/upload/image/product/20170524/bang-so-co-num-ba101-1.jpg?mode=max&width=400&height=400"
								style={{
									width: '100%',
									height: '70%',
									display: 'block',
								}}
							/>
							<img
								className="mySlides"
								src="https://i.pinimg.com/originals/a0/dc/35/a0dc35e337a9c7bf922bf5edc022236d.jpg"
								style={{ width: '100%', height: '70%', display: 'none' }}
							/>
							<img
								className="mySlides"
								src="https://i.pinimg.com/originals/a8/45/76/a84576a04c1874304735604d9f47d5a4.jpg"
								style={{ width: '100%', height: '70%', display: 'none' }}
							/>
							<div
								className="w3-row-padding w3-section"
								style={{
									width: '100%',
									marginTop: '30px',
									display: 'flex',
									justifyContent: 'space-around',
								}}
							>
								<div className="w3-col s4" style={{ width: '30%' }}>
									<img
										className="demo w3-opacity w3-hover-opacity-off"
										src="https://media.shoptretho.com.vn/upload/image/product/20170524/bang-so-co-num-ba101-1.jpg?mode=max&width=400&height=400"
										style={{ width: '100%', cursor: 'pointer', display: 'block' }}
										onClick={() => currentDiv(1)}
									/>
								</div>
								<div className="w3-col s4" style={{ width: '30%' }}>
									<img
										className="demo w3-opacity w3-hover-opacity-offf"
										src="https://i.pinimg.com/originals/a0/dc/35/a0dc35e337a9c7bf922bf5edc022236d.jpg"
										style={{ width: '100%', cursor: 'pointer', display: 'block' }}
										onClick={() => currentDiv(2)}
									/>
								</div>
								<div className="w3-col s4" style={{ width: '30%' }}>
									<img
										className="demo w3-opacity w3-hover-opacity-offff"
										src="https://i.pinimg.com/originals/a8/45/76/a84576a04c1874304735604d9f47d5a4.jpg"
										style={{ width: '100%', cursor: 'pointer', display: 'block' }}
										onClick={() => currentDiv(3)}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className={Styles.content_1_detail}>
						<div
							style={{
								width: '100%',
								height: '25%',
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<div
								style={{
									fontSize: '20px',
									fontFamily: 'inherit',
									marginLeft: '50px',
									marginTop: '40px',
								}}
							>
								<h1>Bảng số có núm gỗ - BA101</h1>
							</div>
							<div style={{ display: 'flex', marginLeft: '50px' }}>
								<div
									style={{
										borderRight: '2px solid #f1f1f1',
										marginRight: '10px',
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<Rate
										allowHalf
										defaultValue={2.5}
										style={{ fontSize: '25px', marginRight: '20px' }}
									/>
									<div
										style={{
											fontSize: '20px',
											marginRight: '15px',
											fontFamily: '-moz-initial',
											color: '#86dbd8',
											cursor: 'pointer',
										}}
									>
										Bình luận
									</div>
								</div>
								<p
									style={{
										fontSize: '20px',
										marginRight: '20px',
										fontFamily: '-moz-initial',
									}}
								>
									Thương hiệu : GCB Mã SP : DCG-69782
								</p>
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
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								width: '70%',
								height: '75%',
								marginLeft: '150px',
								marginTop: '50px',
							}}
						>
							<div style={{ display: 'flex', width: '80%' }}>
								<div
									style={{
										fontSize: '20px',
										fontFamily: '-moz-initial',
										paddingTop: '30px',
									}}
								>
									Giá :
								</div>
								<div
									style={{
										fontSize: '40px',
										fontWeight: 'bold',
										color: '#fd6a02',
										marginLeft: '100px',
									}}
								>
									48.000đ
								</div>
							</div>
							<div style={{ display: 'flex', width: '80%' }}>
								<div
									style={{
										fontSize: '20px',
										fontFamily: '-moz-initial',
										paddingTop: '10px',
									}}
								>
									Tình trạng :
								</div>
								<div
									style={{
										color: '#5abb5c',
										fontWeight: 'bold',
										fontSize: '24px',
										marginLeft: '50px',
									}}
								>
									Còn hàng
								</div>
							</div>
							<div style={{ display: 'flex', width: '80%' }}>
								<div
									style={{
										fontSize: '20px',
										fontFamily: '-moz-initial',
										paddingTop: '15px',
									}}
								>
									Vận chuyển :
								</div>
								<div
									style={{
										fontFamily: '-moz-initial',
										marginLeft: '40px',
										marginTop: '10px',
										fontSize: '18px',
									}}
								>
									<b style={{ fontSize: '22px' }}>Miễn phí vận chuyển</b> cho đơn hàng từ
									100.000đ
								</div>
							</div>
							<div
								style={{
									display: 'flex',
									width: '80%',
									marginTop: '50px',
									marginBottom: '50px',
								}}
							>
								<div
									style={{
										marginLeft: '10%',
										width: '100%',
										display: 'flex',
										justifyContent: 'flex-start',
									}}
								>
									<Link to={'/buyproduct'}>
										<Button
											type="primary"
											className={Styles.btn_detail}
											onClick={(e) => handleBuyProduct(e)}
										>
											Mua ngay
										</Button>
									</Link>
								</div>
								<div style={{ width: '40%' }}>
									<Button
										className={Styles.btn_detail_them_vao_gio}
										onClick={openMessage}
										type="primary"
									>
										Thêm vào giỏ hàng
									</Button>
								</div>
							</div>
							<div>
								Tổng đài mua hàng miễn cước 1800 6066 ( Từ 8h đến 21h30 hằng ngày )
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
								title="Bảng số và phép tính BA127b (1-20 số)"
								description="86.000 VND"
							/>
						</Card>
						<Card
							hoverable
							className={Styles.card_item_banthich}
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
							className={Styles.card_item_banthich}
							cover={
								<img
									alt="Đập bóng lốc xoáy DB10"
									src="https://media.shoptretho.com.vn/upload/image/product/20170727/dap-bong-loc-xoay-5.jpg?mode=max&width=400&height=400"
								/>
							}
						>
							<Meta title="Đập bóng lốc xoáy DB10" description="180.000 VND" />
						</Card>
						<Card
							hoverable
							className={Styles.card_item_banthich}
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
							className={Styles.card_item_banthich}
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
							className={Styles.card_item_banthich}
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
					</div>
				</div>
				<div className={Styles.content_3}>
					<div className={Styles._3wdEZ5}>
						<div className={Styles._2pGc2E}>CHI TIẾT SẢN PHẨM</div>
						<div className={Styles._1afiLm}>
							<ul className={Styles.ul_1}>
								<li>Kích thước: 29*22*0.6 cm</li>
								<li>Chất liệu: gỗ an toàn</li>
								<li>Xuất xứ: Trung Quốc</li>
							</ul>
							<ul className={Styles.ul_2}>
								<li>Dành cho bé trên 3 tuổi</li>
								<li>Gồm các số từ 0 đến 20</li>
								<li>Mỗi số có màu sắc khác nhau</li>
							</ul>
						</div>
					</div>
					<div className={Styles._3wdEZ5_2}>
						<div className={Styles._2pGc2E}>MÔ TẢ SẢN PHẨM</div>
						<div className={Styles._1afiLm_1}>
							<div className={Styles._3yZnxJ}>
								<span>
									<b>Bảng số có núm gỗ - BA101</b> sẽ là món đồ chơi giáo dục dành cho bé
									từ 3 tuổi trở lên. Sản phẩm gồm 20 số từ 0 đến 20 đươc làm từ chất liệu
									gỗ an toàn, mỗi số lại có màu sắc khác nhau, qua đó giúp bé nhận diện và
									biết cách đọc các số cơ bản cũng như nhận diện màu sắc.
									<br />
									<br />
									<h2>Đặc điểm nổi bật của bảng số có núm gỗ - BA101</h2>- Chất liệu: gỗ
									an toàn, mùi sơn an toàn cho bé, màu sắc đẹp và sáng <br />- Kích
									thước:29*22*0.6 cm
									<br />- Bảng số gỗ gồm các số từ 0-20 giúp bé tập nhận biết các số
									<br />- Sản phẩm có thể tháo rời để các bé có thể ghép hình lại với
									nhau.
									<br />
									- Mỗi số đều có núm cầm giúp bé dễ dàng nhấc các con số ra và sau đó thả
									vào đúng vị trí sẵn có.
									<br />- Bé không chỉ học được cách đọc số cơ bản mà còn giúp trẻ nhận
									diện được màu sắc, phát triển sự linh hoạt giữa tay và mắt ngay từ sớm
									<br />- Dành cho bé từ 3 tuổi trở lên
									<br />- Xuất xứ: Trung Quốc
								</span>
							</div>
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
			<div className={Styles.footer_detail}>
				<Footer />
			</div>
		</div>
	);
}

DetailProduct.propTypes = {};

DetailProduct.defaultProps = {};

export default DetailProduct;
