/* eslint-disable */
import React, { useState } from 'react';
import { Button, Input, Layout, Avatar } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import MenuAdmin from './menu/MenuAdmin';
import './style.module.scss';
import ContentAdmin from './Content/ContentAdmin';
import useCategoryLogicData from '../../hooks/useCategoryLogicData';
import useProductLogicData from '../../hooks/useProductLogicData';
import useSliderLogicData from '../../hooks/useSliderLogicData';
import useCustomerLogicData from '../../hooks/useCustomerLogicData';
import useUserAdminLogicData from '../../hooks/useUserAdminLogicData';
import useCartLogicData from '../../hooks/useCartLogicData';
import useTransactionData from '../../hooks/useTransactionData';
import { useSelector } from 'react-redux';
import { BASE_URL_IMAGE } from '../../util/TypeApi';
import Style from './style.module.scss';
const { Header, Sider, Content } = Layout;

const objectKey = {
	TRANG_CHU: 'Trang chủ',
	DANH_MUC: 'Danh mục',
	SAN_PHAM: 'Sản phẩm',
	DON_HANG: 'Đơn hàng',
	SLIDER: 'Slider',
	KHACH_HANG: 'Khách hàng',
	NHAN_VIEN: 'Nhân viên',
	CAI_DAT: 'Cài đặt tài khoản',
	LOGOUT: 'Đăng xuất',
};
const { Search } = Input;
function LayoutAdmin() {
	// hooks
	const accountAdmin = useSelector((state) => state['accountAdmin']);
	const { getListCategory } = useCategoryLogicData();
	const { getListProduct } = useProductLogicData();
	const { getListSlider } = useSliderLogicData();
	const { getListCustomer } = useCustomerLogicData();
	const { getListAdmin } = useUserAdminLogicData();
	const { getListCart } = useCartLogicData();
	const { getListTransaction } = useTransactionData();
	// state
	const [collapsed, setCollapsed] = useState(false);
	const [checkKey, setCheckKey] = useState(objectKey.TRANG_CHU);
	const [sizeLayout, setSizeLayout] = useState(200);

	const toggle = () => {
		setCollapsed(!collapsed);
		collapsed === true ? setSizeLayout(200) : setSizeLayout(77);
		// setSizeLayout(77);
	};
	const onSearch = (value) => console.log(value);

	React.useEffect(() => {
		getListCategory();
		getListProduct();
		getListSlider();
		getListCustomer();
		getListAdmin();
		getListTransaction({}, true);
		getListCart();
	}, []);
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0,
				}}
				collapsible
				collapsed={collapsed}
				onCollapse={() => toggle()}
			>
				<div className={Style.logo} />
				<div className={Style.menu_admin}>
					<MenuAdmin objectKey={objectKey} setCheckKey={setCheckKey} />
				</div>
			</Sider>
			<Layout className={Style.site_layout} style={{ marginLeft: sizeLayout }}>
				<Header
					className={Style.site_layout_background}
					style={{ position: 'fixed', zIndex: 1, width: '89.5%' }}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ display: 'flex' }}>
							<div style={{ padding: '0 10px' }}>
								{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
									className: 'trigger',
									onClick: toggle,
								})}
							</div>
							<div>
								<h1 style={{ color: '#0bb122' }}>CÔNG TY GCB</h1>
							</div>
						</div>
						<Search
							placeholder="input search text"
							onSearch={onSearch}
							enterButton
							style={{ width: 350, marginTop: '15px' }}
						/>
						<div style={{ display: 'flex', marginRight: '30px' }}>
							<div style={{ marginRight: '10px' }}>
								<Avatar
									style={{ width: '30px', height: '30px' }}
									icon={<UserOutlined />}
									src={`${BASE_URL_IMAGE}${accountAdmin.avatar}`}
								/>
							</div>
							<div>{accountAdmin.name}</div>
						</div>
					</div>
				</Header>
				<Content
					className={Style.site_layout_background}
					style={{
						margin: '80px 24px 24px 24px',
						padding: 24,
						minHeight: 280,
					}}
				>
					<ContentAdmin checkKey={checkKey} objectKey={objectKey} />
				</Content>
			</Layout>
		</Layout>
	);
}

LayoutAdmin.propTypes = {};

LayoutAdmin.defaultProps = {};

export default LayoutAdmin;
