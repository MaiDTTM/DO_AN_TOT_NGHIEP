import React from 'react';
// import PropTypes from 'prop-types';
import './styles.css';
import Home from './Home/Home';
import User from './User/User';
import Slider from './Slider/Slider';
import DanhMuc from './DanhMuc/DanhMuc';
import SanPham from './SanPham/SanPham';
import DonDatHang from './DonDatHang/DonDatHang';
import KhachHang from './KhachHang/KhachHang';
import CaiDat from './CaiDatTaiKhoan/CaiDat';
function ContentAdmin(props) {
	const { checkKey, objectKey } = props;
	let componentContent;
	switch (checkKey) {
		case objectKey.TRANG_CHU:
			componentContent = <Home />;
			break;
		case objectKey.NHAN_VIEN:
			componentContent = <User />;
			break;
		case objectKey.SLIDER:
			componentContent = <Slider />;
			break;
		case objectKey.DANH_MUC:
			componentContent = <DanhMuc />;
			break;
		case objectKey.SAN_PHAM:
			componentContent = <SanPham />;
			break;
		case objectKey.DON_HANG:
			componentContent = <DonDatHang />;
			break;
		case objectKey.KHACH_HANG:
			componentContent = <KhachHang />;
			break;
		case objectKey.CAI_DAT:
			componentContent = <CaiDat />;
			break;
	}
	return (
		<div
			className="layout_content"
			style={{ padding: 24, minHeight: 360, borderRadius: '4%' }}
		>
			{componentContent}
		</div>
	);
}

ContentAdmin.propTypes = {};

ContentAdmin.defaultProps = {};

export default ContentAdmin;
