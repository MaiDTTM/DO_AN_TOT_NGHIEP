import { Layout, Breadcrumb, Button } from 'antd';
import React, { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './style.css';
import MenuAdmin from './menu/MenuAdmin';
import HeaderAdmin from './Header/HeaderAdmin';
import ContentAdmin from './Content/ContentAdmin';
// import PropTypes from 'prop-types';

//const
const { Header, Content, Footer, Sider } = Layout;
const objectKey = {
	HOME: 'Trang chủ',
	USER: 'Tài khoản',
	SLIDER: 'Slider',
	DANH_MUC: 'Danh mục',
	SAN_PHAM: 'Sản phẩm',
	DON_DAT_HANG: 'Đơn đặt hàng',
	HOA_DON_NHAP: 'Hóa đơn nhập',
	HOA_DON_XUAT: 'Hóa đơn xuất',
};
function LayoutAdmin() {
	const [collapsed, setCollapsed] = useState(false);
	const [checkKey, setCheckKey] = React.useState(objectKey.HOME);
	const toggleCollapsed = () => {
		setCollapsed({
			collapsed: !collapsed.collapsed,
		});
	};
	return (
		<Layout>
			<Header>
				<HeaderAdmin />
			</Header>
			<Layout>
				<Sider trigger={null} collapsible collapsed={collapsed.collapsed}>
					<MenuAdmin objectKey={objectKey} setCheckKey={setCheckKey} />
				</Sider>
				<Content>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Button type="text" onClick={toggleCollapsed} style={{ marginRight: '25px' }}>
							{React.createElement(
								collapsed.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
								{
									className: 'trigger',
									onClick: toggleCollapsed,
								}
							)}
						</Button>
						<Breadcrumb.Item
							style={{ color: '#e7210d', fontFamily: "'Montserrat', sans-serif " }}
						>
							Admin
						</Breadcrumb.Item>
						<Breadcrumb.Item>{checkKey}</Breadcrumb.Item>
					</Breadcrumb>
					<div className="site-layout-background" style={{ padding: 24, minHeight: 800 }}>
						<ContentAdmin checkKey={checkKey} objectKey={objectKey} />
					</div>
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2018 Created by Ant UED
					</Footer>
				</Content>
			</Layout>
		</Layout>
	);
}

LayoutAdmin.propTypes = {};

LayoutAdmin.defaultProps = {};

export default LayoutAdmin;
