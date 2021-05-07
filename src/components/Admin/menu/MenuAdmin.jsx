import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import logo from '../../../img/logotet2019.png';
import { Menu, Switch } from 'antd';
import {
	BarsOutlined,
	ContainerOutlined,
	DesktopOutlined,
	FormOutlined,
	HomeOutlined,
	SnippetsOutlined,
	UserOutlined,
	WalletOutlined,
} from '@ant-design/icons';
function MenuAdmin(props) {
	const { setCheckKey, objectKey } = props;
	const handleClick = ({ key }) => {
		setCheckKey(key);
	};
	return (
		<Menu
			theme="dark"
			mode="inline"
			defaultSelectedKeys={objectKey.TRANG_CHU}
			onClick={handleClick}
		>
			<div className="logo" style={{ width: '100%', height: 63 }}>
				<img src={logo} style={{ width: '100%' }} />
			</div>
			<Menu.Item key={objectKey.TRANG_CHU} icon={<HomeOutlined />}>
				Trang chủ
			</Menu.Item>
			<Menu.Item key={objectKey.DANH_MUC} icon={<UserOutlined />}>
				Danh mục
			</Menu.Item>
			<Menu.Item key={objectKey.SAN_PHAM} icon={<DesktopOutlined />}>
				Sản phẩm
			</Menu.Item>
			<Menu.Item key={objectKey.DON_HANG} icon={<ContainerOutlined />}>
				Đơn hàng
			</Menu.Item>
			<Menu.Item key={objectKey.SLIDER} icon={<BarsOutlined />}>
				Slider
			</Menu.Item>
			<Menu.Item key={objectKey.KHACH_HANG} icon={<WalletOutlined />}>
				Khách hàng
			</Menu.Item>
			<Menu.Item key={objectKey.NHAN_VIEN} icon={<FormOutlined />}>
				Nhân viên
			</Menu.Item>
			<Menu.Item key={objectKey.CAI_DAT} icon={<SnippetsOutlined />}>
				Cài đặt tài khoản
			</Menu.Item>
			<Menu.Item icon={<SnippetsOutlined />}>Đăng xuất</Menu.Item>
		</Menu>
	);
}

MenuAdmin.propTypes = {
	objKeyMenu: PropTypes.object,
	setCheckKey: PropTypes.func,
};

MenuAdmin.defaultProps = {
	objKeyMenu: {
		TRANG_CHU: 'Trang chủ',
		DANH_MUC: 'Danh mục',
		SAN_PHAM: 'Sản phẩm',
		DON_HANG: 'Đơn hàng',
		SLIDER: 'Slider',
		KHACH_HANG: 'Khách hàng',
		NHAN_VIEN: 'Nhân viên',
		CAI_DAT: 'Cài đặt tài khoản',
	},
	setCheckKey: () => {},
};

export default MenuAdmin;
