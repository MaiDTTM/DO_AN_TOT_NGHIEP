import React from 'react';
import ListPicture from './HeaderContent/listPicture';
import ProductListHot from './Sanphamnoibat/productListHot';
import 'antd/dist/antd.css';
import ProductListBanChay from './SanPhamBanChay/producListBanChay';
import ProductListGoiYChoBan from './GoiYChoBan/productGoiYChoBan';

//style
const listBanner = { width: '100%', height: '235px', paddingTop: '25px', display: 'flex', justifyContent: 'center' };
const productHot = { width: '100%', height: '830px', paddingTop: '25px',display: 'flex', justifyContent: 'center'};
const productBanChay = { width: '100%', height: '830px', paddingTop: '25px',display: 'flex', justifyContent: 'center'};
const productGoiY = { width: '100%', height: '1650px', paddingTop: '25px',display: 'flex', justifyContent: 'center'};

function Content(props) {
    return (
        <div>
            <div style={listBanner}>
                <ListPicture />
            </div>
            <div style={productHot}>
                <ProductListHot />
            </div>
            <div style={productBanChay}>
                <ProductListBanChay/>
            </div>
            <div style={productGoiY}>
                <ProductListGoiYChoBan/>
            </div>
        </div>
    );
}

export default Content;
