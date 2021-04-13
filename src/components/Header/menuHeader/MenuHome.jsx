import React from 'react';
import { Button, Input, Dropdown, Menu } from 'antd';
import {
	UserOutlined,
	HeartTwoTone,
	ShoppingCartOutlined,
	AppstoreOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import Styles from './style.module.css';
import logo from '../../../img/logo-gcb.jpg';
import { Link } from 'react-router-dom';
import img from '../../../img/banner1.png';
//style
const stylIcon = { width: '90px', display: 'flex', justifyContent: 'space-evenly' };
function MenuHome() {
	const { Search } = Input;
	const onSearch = (value) => console.log(value);
	const menu = (
		<Menu style={{ width: '500px', backgroundColor: '#ece3e3' }}>
			<span
				style={{
					color: '#be1b1b',
					marginLeft: '20px',
					fontSize: '16px',
				}}
			>
				{' '}
				SẢN PHẨM MỚI THÊM
			</span>
			<hr
				style={{
					height: '2px',
					borderWidth: '0',
					color: '#5deccf',
					backgroundColor: '#d06e6e',
				}}
			/>
			<Menu.Item key="0" style={{ marginTop: '20px' }}>
				<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
					<div className={Styles.hover_cart}>
						<div className={Styles.img_hover_cart}>
							<img src={img} className={Styles.img_hover_cart} />
						</div>
						<div className={Styles.span_hover_cart}>1nd menu item</div>
						<div className={Styles.gia_hover_cart}>48.000đ</div>
					</div>
				</a>
			</Menu.Item>
			<Menu.Item key="1">
				<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
					<div className={Styles.hover_cart}>
						<div className={Styles.img_hover_cart}>
							<img src={img} className={Styles.img_hover_cart} />
						</div>
						<div className={Styles.span_hover_cart}>1nd menu item</div>
						<div className={Styles.gia_hover_cart}>48.000đ</div>
					</div>
				</a>
			</Menu.Item>
			<Menu.Item key="3">
				<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
					<div className={Styles.hover_cart}>
						<div className={Styles.img_hover_cart}>
							<img src={img} className={Styles.img_hover_cart} />
						</div>
						<div className={Styles.span_hover_cart}>1nd menu item</div>
						<div className={Styles.gia_hover_cart}>48.000đ</div>
					</div>
				</a>
			</Menu.Item>
			<Menu.Item key="3">
				<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
					<div className={Styles.hover_cart}>
						<div className={Styles.img_hover_cart}>
							<img src={img} className={Styles.img_hover_cart} />
						</div>
						<div className={Styles.span_hover_cart}>1nd menu item</div>
						<div className={Styles.gia_hover_cart}>48.000đ</div>
					</div>
				</a>
			</Menu.Item>
			<Menu.Item key="3">
				<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
					<div className={Styles.hover_cart}>
						<div className={Styles.img_hover_cart}>
							<img src={img} className={Styles.img_hover_cart} />
						</div>
						<div className={Styles.span_hover_cart}>1nd menu item</div>
						<div className={Styles.gia_hover_cart}>48.000đ</div>
					</div>
				</a>
			</Menu.Item>
			<hr
				style={{
					height: '2px',
					borderWidth: '0',
					color: '#5deccf',
					backgroundColor: '#d06e6e',
				}}
			/>
			<Menu.Item key="4">
				<div
					style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}
				>
					<div>Trong giỏ hàng hiện đang có : 82 sản phẩm</div>
					<div>
						<Button
							style={{
								backgroundColor: '#f53d2d',
								height: '40px',
								color: '#ffffff',
								boxShadow:
									'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
							}}
						>
							Xem giỏ hàng
						</Button>
					</div>
				</div>
			</Menu.Item>
		</Menu>
	);
	return (
		<div className={Styles.menu_header}>
			<div className={Styles.logo} style={{ height: '100%' }}>
				<Link to={'/'}>
					<img src={logo} />
				</Link>
			</div>
			<div className={Styles.search}>
				<Search placeholder="Bé muốn tìm đồ chơi gì ?" onSearch={onSearch} enterButton />
			</div>
			<div className={Styles.singIn_singOut}>
				<div style={stylIcon}>
					<Dropdown overlay={menu}>
						<Link to={'/cart'}>
							<Button
								icon={<ShoppingCartOutlined style={{ color: '#ca1c1c' }} />}
								type="text"
								style={{ color: '#ca1c1c' }}
							>
								Giỏ hàng
							</Button>
						</Link>
					</Dropdown>
				</div>
				<div style={stylIcon}>
					<Button
						icon={<HeartTwoTone twoToneColor="#eb2f96" />}
						style={{ color: '#eb2f96' }}
						type="text"
					>
						Yêu thích
					</Button>
				</div>
				<div style={stylIcon}>
					<Link to={'/login'}>
						<Button
							icon={<UserOutlined style={{ color: '#2febc5' }} />}
							type="text"
							style={{ color: '#40ac22' }}
						>
							Đăng nhập
						</Button>
					</Link>
				</div>
				<div style={stylIcon}>
					<Link to={'/register'}>
						<Button icon={<UserOutlined />} type="text">
							Đăng ký
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default MenuHome;
