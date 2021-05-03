import React from 'react';
import ListPicture from './HeaderContent/listPicture';
import ProductListHot from './Sanphamnoibat/productListHot';
import 'antd/dist/antd.css';
import ProductListGoiYChoBan from './GoiYChoBan/productGoiYChoBan';
import FlashSale from './FlashSale/FlashSale';
import ProductListXuHuong from './XuHuongTimKiem/XuHuoongTimKiem';
import { useSelector } from 'react-redux';

//style
const listBanner = {
	width: '1200px',
	height: '235px',
	paddingTop: '25px',
	display: 'flex',
	justifyContent: 'center',
};
const productHot = {
	width: '1200px',
	height: '550px',
	paddingTop: '25px',
	display: 'flex',
	justifyContent: 'center',
};
const flashSale = {
	width: '1200px',
	height: '350px',
	paddingTop: '25px',
	display: 'flex',
	justifyContent: 'center',
};
const productXuHuong = {
	width: '1200px',
	height: '240px',
	paddingTop: '25px',
	display: 'flex',
	justifyContent: 'center',
};
const productGoiY = {
	width: '1200px',
	height: '2700px',
	paddingTop: '25px',
	display: 'flex',
	justifyContent: 'center',
};

function Content(props) {
	// hooks
	const product = useSelector((state) => state['product']);
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<div style={listBanner}>
				<ListPicture />
			</div>
			<div style={flashSale}>
				<FlashSale product={product} />
			</div>
			<div style={productHot}>
				<ProductListHot />
			</div>
			<div style={productXuHuong}>
				<ProductListXuHuong />
			</div>
			<div style={productGoiY}>
				<ProductListGoiYChoBan product={product} />
			</div>
		</div>
	);
}

export default Content;
