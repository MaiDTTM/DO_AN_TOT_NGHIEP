import React from 'react';
// import PropTypes from 'prop-types';
import Styles from './style.module.css';
import logo from '../../../../img/logo-gcb.jpg';
import { Form, Input, Button, Select, Radio, Modal } from 'antd';
import { Link } from 'react-router-dom';
import {
	MinusOutlined,
	PlusOutlined,
	DeleteOutlined,
	ExclamationCircleOutlined,
} from '@ant-design/icons';
import axios from 'axios';
const { TextArea } = Input;
const { Option } = Select;
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const radioStyle = {
	display: 'block',
	height: '30px',
	lineHeight: '30px',
};

const styleInput = { width: '380px' };
function BuyProduct() {
	const [modal2Visible, setModal2Visible] = React.useState(false);
	const [LtsItem, setLtsItem] = React.useState({});
	console.log('dataObj', LtsItem);
	const onFinish = (values) => {
		// console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		// console.log('Failed:', errorInfo);
	};
	function setModalVisible(modal2Visible) {
		setModal2Visible({ modal2Visible });
	}
	const getAPI = async () => {
		await fetch('https://thongtindoanhnghiep.co/api/city')
			.then((res) => console.log('res.json()', res.json()))
			// .then((data) => {
			// 	setLtsItem(data.LtsItem);
			// })
			.catch(console.log);
	};
	React.useEffect(() => {
		getAPI();
	}, []);
	return (
		<div className={Styles.wrap_oder}>
			<div className={Styles.header_oder}>
				<div className={Styles.header_oder}>
					<div className={Styles.logo_oder}>
						<Button
							type="text"
							className={Styles.btn_logo}
							onClick={() => setModalVisible(true)}
						>
							<img src={logo} />
						</Button>
						<Modal
							centered
							visible={modal2Visible.modal2Visible}
							footer={null}
							closable={false}
						>
							<span style={{ color: '#6dc6bf', marginLeft: '110px', fontSize: '18px' }}>
								<ExclamationCircleOutlined
									style={{ color: 'green', marginRight: '10px' }}
								/>{' '}
								<b>Bạn muốn trở về trang chủ</b>
							</span>
							<div
								style={{
									width: '300px',
									marginTop: '20px',
									display: 'flex',
									justifyContent: 'space-around',
									marginLeft: '95px',
								}}
							>
								<Link to={'/'}>
									<Button
										style={{
											backgroundColor: '#f9f9f9',
											boxShadow:
												'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
										}}
									>
										Về trang chủ
									</Button>
								</Link>
								<Button
									style={{
										backgroundColor: '#ff6723',
										color: '#fff',
										boxShadow:
											'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
									}}
									onClick={() => setModalVisible(false)}
								>
									<b>Không, tôi ở lại</b>
								</Button>
							</div>
						</Modal>
						{/*<Link to={'/'}>*/}
						{/*	<img src={logo} />*/}
						{/*</Link>*/}
					</div>
					<div className={Styles.oder_header_icon}>
						<div className={Styles.box_icon_item_1}>
							<span className={Styles.box_icon_ic_icon_ship} />
							<span className={Styles.giao_hang}>Giao hàng toàn quốc</span>
						</div>
						<div className={Styles.box_icon_item_2}>
							<span className={Styles.box_icon_bg_icon_ship} />
							<span className={Styles.giao_hang}>Đổi hàng 15 ngày miễn phí</span>
						</div>
						<div className={Styles.box_icon_item_3}>
							<span className={Styles.box_icon_chinhhang} />
							<span className={Styles.giao_hang}>Đảm bảo hàng chính hãng</span>
						</div>
					</div>
				</div>
				<div className={Styles.login_oder}>
					<span>Hãy </span>
					<Link to={'/login'}>
						<b>Đăng nhập</b>
					</Link>
					<span> để mua hàng nhanh hơn! </span>
					<span style={{ float: 'right', margin: '0 5px 0 5px' }}>
						<Link>
							<i>Tiếp tục mua hàng >> </i>
						</Link>
					</span>
				</div>
			</div>
			<div className={Styles.main_order}>
				<div className={Styles.cart_error}>
					<span style={{ color: 'green' }}>
						{/*Để đảm bảo quyền lợi của khách hàng. Kể từ ngày 26/08/2018 Childrem Toy đã nâng cấp hệ thống để kiểm tra mỗi số ĐT tích điểm chỉ được sử dụng cho 1 tài khoản mua hàng duy nhất. Và Quý khách có thể dùng số ĐT để đăng nhập thay cho Email.<br/>Chân thành cảm ơn sự đồng hành của Quý khách hàng*/}
					</span>
				</div>
				<Form
					{...layout}
					name="basic"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					className={Styles.form_thanh_toan}
				>
					<div style={{ display: 'flex' }}>
						<div className={Styles.left_order}>
							<div className={Styles.thong_tin}>
								<span className={Styles.tieu_de}>Thông tin mua hàng</span>
								<Form.Item
									className={Styles.form_thanh_toan}
									name="username"
									rules={[{ required: true, message: 'Please input your username!' }]}
								>
									<Input placeholder="Username" style={styleInput} />
								</Form.Item>
								<Form.Item
									className={Styles.form_thanh_toan}
									name="password"
									rules={[{ required: true, message: 'Please input your password!' }]}
								>
									<Input.Password placeholder="Password" style={styleInput} />
								</Form.Item>
								<Form.Item>
									<div style={{ display: 'flex' }}>
										<span className={Styles.gt}>Giới tính : </span>
										<Radio.Group style={{ marginLeft: '10px', display: 'flex' }}>
											<Radio style={radioStyle} value={1}>
												Nam
											</Radio>
											<Radio style={radioStyle} value={2}>
												Nữ
											</Radio>
										</Radio.Group>
									</div>
								</Form.Item>
								<Form.Item
									name="phone"
									rules={[{ required: true, message: 'Please input your phone number!' }]}
								>
									<Input
										style={{ width: '100%' }}
										placeholder="Số điện thoại giao hàng"
										style={styleInput}
									/>
								</Form.Item>
								<Form.Item
									name="email"
									rules={[
										{
											type: 'email',
											message: 'The input is not valid E-mail!',
										},
										{
											required: true,
											message: 'Please input your E-mail!',
										},
									]}
								>
									<Input placeholder="Email" style={styleInput} />
								</Form.Item>
								<Form.Item name="diachi">
									<div style={{ width: '400px', display: 'flex' }}>
										<div style={{ width: '190px' }}>
											<Form.Item name="tinhthanhpho" rules={[{ required: true }]}>
												<Select
													placeholder="Select a option and change input text above"
													// onChange={this.onGenderChange}
													allowClear
													defaultValue="defaule"
												>
													<Option value="defaule">Tỉnh / Thành phố</Option>
													<Option value="HaNoi">Hà Nội</Option>
													<Option value="HungYen">Hưng Yên</Option>
													<Option value="HaiDuong">Hải Dương</Option>
												</Select>
											</Form.Item>
										</div>
										<div style={{ width: '190px' }}>
											<Form.Item name="quanhuyen" rules={[{ required: true }]}>
												<Select
													placeholder="Select a option and change input text above"
													// onChange={this.onGenderChange}
													allowClear
													defaultValue="defaule"
												>
													<Option value="defaule">Quận / Huyện </Option>
													<Option value="HaNoi">Hà Nội</Option>
													<Option value="HungYen">Hưng Yên</Option>
													<Option value="HaiDuong">Hải Dương</Option>
												</Select>
											</Form.Item>
										</div>
									</div>
								</Form.Item>
								<Form.Item name="sonha" rules={[{ required: true }]}>
									<Input
										placeholder="Số nhà, tòa nhà, đường, xã phường"
										style={styleInput}
									/>
								</Form.Item>
							</div>
							<div className={Styles.thanh_toan}>
								<span className={Styles.tieu_de}>Thời gian nhận hàng</span>
								<Form.Item>
									<Radio.Group style={{ marginLeft: '10px' }}>
										<Radio style={radioStyle} value={3}>
											Trong giờ hành chính
										</Radio>
										<Radio style={radioStyle} value={4}>
											Ngoài giờ hành chính
										</Radio>
									</Radio.Group>
								</Form.Item>
								<div className={Styles.tieu_de}>Hình thức thanh toán</div>
								<Form.Item>
									<Radio.Group style={{ marginLeft: '10px' }}>
										<Radio style={radioStyle} value={5}>
											Thanh toán khi nhận hàng(COD)
										</Radio>
										<Radio style={radioStyle} value={6}>
											Chuyển khoản qua ngân hàng
										</Radio>
									</Radio.Group>
								</Form.Item>
								<Form.Item>
									<div style={{ width: '320px' }}>
										<TextArea
											rows={4}
											placeholder="Viết ghi chú, yêu cầu đối với đơn hàng cho người giao hàng."
										/>
									</div>
								</Form.Item>
							</div>
						</div>
						<div className={Styles.right_order}>
							<div style={{ marginLeft: '20px', width: '380px', display: 'flex' }}>
								<span className={Styles.tieu_de}>
									{' '}
									Đơn hàng
									<span className={Styles.so_luong}> ( 1 sản phẩm )</span>
								</span>
							</div>
							<Form.Item>
								<div className={Styles.item_cart}>
									<div className={Styles.cart_img}>
										<img
											src="https://media.shoptretho.com.vn/upload/image/product/20170524/bang-so-co-num-ba101-1.jpg?mode=max&width=100&height=100"
											title="Bảng số có núm gỗ - BA101"
											alt="Bảng số có núm gỗ - BA101"
										/>
									</div>
									<div className={Styles.cart_name}>
										<div className={Styles.name_box}>
											<div className={Styles.name}>Bảng số có núm gỗ - BA101</div>
											<div className={Styles.gia}>
												<b>48.000đ</b>
											</div>
										</div>
									</div>
								</div>
							</Form.Item>
							<Form.Item>
								<div className={Styles.cart_sl}>
									<div style={{ display: 'flex', width: '380px' }}>
										<div style={{ marginLeft: '120px', marginRight: '25px' }}>
											Số lượng :
										</div>
										<div>
											<Button size="small">
												<MinusOutlined />
											</Button>
											<Button size="small">1</Button>
											<Button size="small">
												<PlusOutlined />
											</Button>
										</div>
										<div style={{ marginLeft: '45px' }}>
											<Button size="small" icon={<DeleteOutlined />} />
										</div>
									</div>
								</div>
							</Form.Item>
							<Form.Item>
								<div
									style={{
										width: '380px',
										display: 'flex',
										justifyContent: 'space-around',
										marginLeft: '50px',
										marginBottom: '20px',
									}}
								>
									<div>Tạm tính</div>
									<div>48.000đ</div>
								</div>
							</Form.Item>
							<Form.Item>
								<div className={Styles.line_order}>
									<span className={Styles.total_text}>Thành tiền</span>
									<span className={Styles.total_money}>48.000đ</span>
								</div>
							</Form.Item>
							<Form.Item>
								<div className={Styles.btn_finish}>
									<Button className={Styles.xong}>ĐẶT HÀNG</Button>
								</div>
							</Form.Item>
						</div>
					</div>
				</Form>
			</div>
			<div className={Styles.footer_order}>
				<div className={Styles.line_bottom}>
					Bạn cần hỗ trợ? Gọi hotline <b>1800 6066</b>
				</div>
				<div className={Styles.popup_home}>
					<div>
						<a>FAQ</a>
						<span>|</span>
						<a>Chính sách thanh toán</a>
						<span>|</span>
						<a>Điều khoản sử dụng</a>
						<br />
					</div>
					<div>
						<span>© 2021 childrenToy.com.vn - Thiên đường cho bé!</span>
					</div>
				</div>
			</div>
		</div>
	);
}

BuyProduct.propTypes = {};

BuyProduct.defaultProps = {};

export default BuyProduct;
