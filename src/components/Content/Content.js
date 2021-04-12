import React from 'react';
import ListPicture from './HeaderContent/listPicture';
import ProductListHot from './Sanphamnoibat/productListHot';
import 'antd/dist/antd.css';
import ProductListGoiYChoBan from './GoiYChoBan/productGoiYChoBan';
import FlashSale from './FlashSale/FlashSale';
import ProductListXuHuong from './XuHuongTimKiem/XuHuoongTimKiem';

//style
const listBanner = {
	width: '100%',
	height: '235px',
	paddingTop: '25px',
	display: 'flex',
	justifyContent: 'center',
};
const productHot = {
	width: '100%',
	height: '850px',
	paddingTop: '25px',
	display: 'flex',
	justifyContent: 'center',
};
const flashSale = {
	width: '100%',
	height: '500px',
	paddingTop: '25px',
	display: 'flex',
	justifyContent: 'center',
};
const productXuHuong = {
	width: '100%',
	height: '240px',
	paddingTop: '25px',
	display: 'flex',
	justifyContent: 'center',
};
const productGoiY = {
	width: '100%',
	height: '2700px',
	paddingTop: '25px',
	display: 'flex',
	justifyContent: 'center',
};

function Content(props) {
	return (
		<div>
			<div style={listBanner}>
				<ListPicture />
			</div>
			<div style={flashSale}>
				<FlashSale />
			</div>
			<div style={productHot}>
				<ProductListHot />
			</div>
			<div style={productXuHuong}>
				<ProductListXuHuong />
			</div>
			<div style={productGoiY}>
				<ProductListGoiYChoBan />
			</div>
		</div>
	);
}

export default Content;
