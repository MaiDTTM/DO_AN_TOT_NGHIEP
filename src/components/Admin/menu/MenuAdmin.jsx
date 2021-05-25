import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import logo from '../../../img/logotet2019.png';
import { Menu } from 'antd';
import {
	BarsOutlined,
	ContactsOutlined,
	ContainerOutlined,
	DesktopOutlined,
	FormOutlined,
	HomeOutlined,
	LogoutOutlined,
	OrderedListOutlined,
	SettingOutlined,
	SlidersOutlined,
	SnippetsOutlined,
	UserOutlined,
	WalletOutlined,
} from '@ant-design/icons';
import { TYPE_ACTION } from '../../../actions/TypeAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
function MenuAdmin(props) {
	const dispatch = useDispatch();
	const history = useHistory();
	const { setCheckKey, objectKey } = props;
	const handleClick = ({ key }) => {
		setCheckKey(key);
		if (key === 'Đăng xuất') {
			localStorage.clear();
			dispatch({ type: TYPE_ACTION.ADMIN.LOGOUT });
			history.push('/admin');
		}
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
			<Menu.Item key={objectKey.DANH_MUC} icon={<OrderedListOutlined />}>
				Danh mục
			</Menu.Item>
			<Menu.Item key={objectKey.SAN_PHAM} icon={<DesktopOutlined />}>
				Sản phẩm
			</Menu.Item>
			<Menu.Item key={objectKey.DON_HANG} icon={<ContainerOutlined />}>
				Đơn hàng
			</Menu.Item>
			<Menu.Item key={objectKey.SLIDER} icon={<SlidersOutlined />}>
				Slider
			</Menu.Item>
			<Menu.Item key={objectKey.KHACH_HANG} icon={<ContactsOutlined />}>
				Khách hàng
			</Menu.Item>
			<Menu.Item key={objectKey.NHAN_VIEN} icon={<FormOutlined />}>
				Nhân viên
			</Menu.Item>
			<Menu.Item key={objectKey.CAI_DAT} icon={<SettingOutlined />}>
				Cài đặt tài khoản
			</Menu.Item>
			<Menu.Item icon={<LogoutOutlined />} key={objectKey.LOGOUT}>
				Đăng xuất
			</Menu.Item>
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
		LOGOUT: 'Đăng xuất',
	},
	setCheckKey: () => {},
};
export default MenuAdmin;
