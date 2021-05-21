import React, { useState } from 'react';
import { Button, Input, Layout, Avatar } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import MenuAdmin from './menu/MenuAdmin';
import './style.css';
import ContentAdmin from './Content/ContentAdmin';
import useCategoryLogicData from '../../hooks/useCategoryLogicData';
import useProductLogicData from '../../hooks/useProductLogicData';
import useSliderLogicData from '../../hooks/useSliderLogicData';
import useCustomerLogicData from '../../hooks/useCustomerLogicData';
import useUserAdminLogicData from '../../hooks/useUserAdminLogicData';
import useCartLogicData from '../../hooks/useCartLogicData';
import useTransactionData from '../../hooks/useTransactionData';
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
};
const { Search } = Input;
function LayoutAdmin() {
	// hooks
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

	const toggle = () => {
		setCollapsed(!collapsed);
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
		<Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo" />
				<MenuAdmin objectKey={objectKey} setCheckKey={setCheckKey} />
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }}>
					<div
						style={{
							display: 'flex',
							// marginTop: '25px',
							justifyContent: 'space-between',
						}}
					>
						{/*<Button type="text" style={{ border: 'none' }} />*/}
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
								<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
							</div>
							<div>ĐÀO THỊ THANH MAI</div>
						</div>
					</div>
				</Header>
				<Content
					className="site-layout-background"
					style={{
						margin: '24px 16px',
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
