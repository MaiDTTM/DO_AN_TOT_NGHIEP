import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
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
	const [collapsed, setCollapsed] = useState(false);
	const [theme, setTheme] = React.useState('dark');
	const [current, setCurrent] = React.useState('HOME');
	const changeTheme = (value) => {
		setTheme({
			theme: value ? 'dark' : 'light',
		});
	};
	const handleClick = ({ key }) => {
		setCheckKey(key);
	};
	return (
		<Menu
			theme={theme.theme}
			inlineCollapsed={collapsed.collapsed}
			onClick={handleClick}
			style={{
				paddingTop: '15px',
			}}
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['sub1']}
			selectedKeys={[current.current]}
			mode="inline"
		>
			<Switch
				checked={theme.theme === 'dark'}
				onChange={changeTheme}
				checkedChildren="Dark"
				unCheckedChildren="Light"
				style={{ marginLeft: '12px', paddingBottom: '20px' }}
			/>
			<br />
			<br />
			<Menu.Item key={objectKey.HOME} icon={<HomeOutlined />}>
				Home
			</Menu.Item>
			<Menu.Item key={objectKey.USER} icon={<UserOutlined />}>
				User
			</Menu.Item>
			<Menu.Item key={objectKey.SLIDER} icon={<DesktopOutlined />}>
				Slider
			</Menu.Item>
			<Menu.Item key={objectKey.DANH_MUC} icon={<ContainerOutlined />}>
				Danh mục
			</Menu.Item>
			<Menu.Item key={objectKey.SAN_PHAM} icon={<BarsOutlined />}>
				Sản phẩm
			</Menu.Item>
			<Menu.Item key={objectKey.DON_DAT_HANG} icon={<WalletOutlined />}>
				Đơn đặt hàng
			</Menu.Item>
			<Menu.Item key={objectKey.HOA_DON_NHAP} icon={<FormOutlined />}>
				Hóa đơn nhập
			</Menu.Item>
			<Menu.Item key={objectKey.HOA_DON_XUAT} icon={<SnippetsOutlined />}>
				Hóa đơn xuất
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
		HOME: 'Trang chủ',
		USER: 'Tài khoản',
		SLIDER: 'Slider',
		DANH_MUC: 'Danh mục',
		SAN_PHAM: 'Sản phẩm',
		DON_DAT_HANG: 'Đơn đặt hàng',
		HOA_DON_NHAP: 'Hóa đơn nhập',
		HOA_DON_XUAT: 'Hóa đơn xuất',
	},
	setCheckKey: () => {},
};

export default MenuAdmin;
