import React from 'react';
import { Input } from 'antd';
import {
	UserOutlined,
	HeartTwoTone,
	ShoppingCartOutlined,
	AppstoreOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './style.css';
import logo from '../../../img/logo-gcb.jpg';
import { Link } from 'react-router-dom';

//style
const stylIcon = { width: '90px', display: 'flex', justifyContent: 'space-evenly' };

function Menu() {
	const { Search } = Input;
	const onSearch = (value) => console.log(value);
	return (
		<div className="menu_header">
			<div className="logo" style={{ height: '100%' }}>
				<Link to={'/'}>
					<img src={logo} />
				</Link>
			</div>
			<div className="search">
				<Search placeholder="Bé muốn tìm đồ chơi gì ?" onSearch={onSearch} enterButton />
			</div>
			<div className="singIn_singOut">
				<div style={stylIcon}>
					<ShoppingCartOutlined />
					<a href="#">Giỏ hàng</a>
				</div>
				<div style={stylIcon}>
					<HeartTwoTone twoToneColor="#eb2f96" />
					<a href="#">Yêu thích</a>
				</div>
				<div style={stylIcon}>
					<UserOutlined />
					<Link to={'/login'}>Đăng nhập</Link>
				</div>
				<div style={stylIcon}>
					<UserOutlined />
					<Link to={'/register'}>Đăng ký</Link>
				</div>
			</div>
		</div>
	);
}

export default Menu;
