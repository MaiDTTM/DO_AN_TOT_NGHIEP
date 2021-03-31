import {
	Layout,
	Menu,
	Breadcrumb,
	Switch,
	Input,
	Avatar,
	Badge,
	Button,
	Popover,
} from 'antd';
import React, { useState } from 'react';
import {
	MailOutlined,
	WalletOutlined,
	BarsOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	NotificationOutlined,
	ContainerOutlined,
	DesktopOutlined,
	UserOutlined,
	FormOutlined,
	SnippetsOutlined,
} from '@ant-design/icons';
import logo from '../../img/faviconHeader.ico';
import logo2 from '../../img/logo.gif';
import './style.css';

//const
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const content = (
	<div>
		<p>
			<a style={{ color: 'black' }}>Thông tin cá nhân </a>
		</p>
		<p>
			<a style={{ color: 'black' }}>Cài đặt</a>
		</p>
		<p>
			<a style={{ color: 'black' }}>Đăng xuất </a>
		</p>
	</div>
);

// import PropTypes from 'prop-types';

function LayoutAdmin() {
	const [collapsed, setCollapsed] = useState(false);
	const [theme, setTheme] = React.useState('dark');
	const [current, setCurrent] = React.useState(1);
	const onSearch = (value) => console.log(value);
	const toggleCollapsed = () => {
		setCollapsed({
			collapsed: !collapsed.collapsed,
		});
	};
	const changeTheme = (value) => {
		setTheme({
			theme: value ? 'dark' : 'light',
		});
	};

	const handleClick = (e) => {
		console.log('click ', e);
		setCurrent({
			current: e.key,
		});
	};
	return (
		<div style={{ width: '100%', height: '100%' }}>
			<Header className="site-layout-background">
				<div className="header_admin">
					<div className="header_logo">
						{/*<img*/}
						{/*	src={logo}*/}
						{/*	style={{*/}
						{/*		width: '90%',*/}
						{/*		height: '100%',*/}
						{/*		display: 'flex',*/}
						{/*		justifyContent: 'center',*/}
						{/*		paddingLeft: '10px',*/}
						{/*	}}*/}
						{/*/>*/}
						<img src={logo} style={{ width: '15%', height: '50%', marginLeft: '5px' }} />
						<img src={logo2} style={{ width: '85%', height: '70%', marginLeft: '5px' }} />
					</div>
					<div className="header_filter">
						<Button
							type="primary"
							onClick={toggleCollapsed}
							style={{ margin: 'auto', marginLeft: '25px' }}
						>
							{React.createElement(
								collapsed.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
							)}
						</Button>
						<div
							style={{
								width: '100%',
								margin: 'auto',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<Search
								placeholder="input search text"
								onSearch={onSearch}
								enterButton
								style={{ width: '30%' }}
							/>
						</div>
					</div>
					<div className="header_logout">
						<div
							style={{
								width: '100%',
								height: '100%',
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<div
								style={{ width: '30%', display: 'flex', justifyContent: 'space-between' }}
							>
								<div style={{ width: '50%' }}>
									<Badge count={1}>
										<NotificationOutlined style={{ fontSize: '20px' }} />
									</Badge>
								</div>
								<div style={{ width: '50%' }}>
									<Badge dot>
										<MailOutlined style={{ fontSize: '20px' }} />
									</Badge>
								</div>
							</div>
							<div
								style={{
									width: '70%',
									height: '100%',
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Avatar
									src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
									style={{
										width: '15%',
										height: '65%',
										margin: 'auto',
										objectFit: 'contain',
									}}
								/>
								<Popover content={content}>
									<a style={{ width: '85%', paddingLeft: '10px', color: 'black' }}>
										Đào Thị Thanh Mai
									</a>
								</Popover>
							</div>
						</div>
					</div>
				</div>
			</Header>
			<Layout style={{ minHeight: '93%', display: 'flex', flexDirection: 'row' }}>
				<div style={{ width: '13.4%' }}>
					<Menu
						theme={theme.theme}
						inlineCollapsed={collapsed.collapsed}
						onClick={handleClick}
						style={{
							width: 256,
							height: '100%',
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
							style={{ marginLeft: '20px', paddingBottom: '20px' }}
						/>
						<br />
						<br />
						<Menu.Item key="1" icon={<UserOutlined />}>
							User
						</Menu.Item>
						<Menu.Item key="2" icon={<DesktopOutlined />}>
							Slider
						</Menu.Item>
						<Menu.Item key="3" icon={<ContainerOutlined />}>
							Danh mục
						</Menu.Item>
						<Menu.Item key="4" icon={<BarsOutlined />}>
							Sản phẩm
						</Menu.Item>
						<Menu.Item key="5" icon={<WalletOutlined />}>
							Đơn đặt hàng
						</Menu.Item>
						<Menu.Item key="6" icon={<FormOutlined />}>
							Hóa đơn nhập
						</Menu.Item>
						<Menu.Item key="7" icon={<SnippetsOutlined />}>
							Hóa đơn xuất
						</Menu.Item>
					</Menu>
				</div>
				<Layout className="site-layout">
					<Content style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<div
							className="site-layout-background"
							style={{ padding: 24, minHeight: 800 }}
						>
							Bill is a cat.
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2018 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		</div>
	);
}

LayoutAdmin.propTypes = {};

LayoutAdmin.defaultProps = {};

export default LayoutAdmin;
