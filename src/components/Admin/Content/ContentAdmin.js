import React from 'react';
// import PropTypes from 'prop-types';
import './styles.css';
import Home from './Home/Home';
import User from './User/User';
import Slider from './Slider/Slider';
import DanhMuc from './DanhMuc/DanhMuc';
import SanPham from './SanPham/SanPham';
import DonDatHang from './DonDatHang/DonDatHang';
import HoaDonNhap from './HoaDonNhap/HoaDonNhap';
import HoaDonXuat from './HoaDonXuat/HoaDonXuat';
function ContentAdmin(props) {
	const { checkKey, objectKey } = props;
	let componentContent;
	switch (checkKey) {
		case objectKey.HOME:
			componentContent = <Home />;
			break;
		case objectKey.USER:
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
		case objectKey.DON_DAT_HANG:
			componentContent = <DonDatHang />;
			break;
		case objectKey.HOA_DON_NHAP:
			componentContent = <HoaDonNhap />;
			break;
		case objectKey.HOA_DON_XUAT:
			componentContent = <HoaDonXuat />;
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
