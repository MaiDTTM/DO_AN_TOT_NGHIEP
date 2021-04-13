import React from 'react';
import Advertisement from './advertisement/advertisement';
import SliderHeader from './slider/slider';

//import style
import './styleForm.css';
import MenuHome from './menuHeader/MenuHome';
//style
const Style = {
	width: '100%',
	height: '60px',
	display: 'flex',
	justifyContent: 'center',
	backgroundColor: '#ea2190',
	float: 'left',
};
const styleHeader = {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	float: 'left',
};

function IndexHeader() {
	return (
		<div style={styleHeader}>
			<div className="header_home">
				<div className="top_header width-common" style={Style}>
					<Advertisement />
				</div>
				<div className="from_menu_header">
					<MenuHome />
				</div>
			</div>
			<div className="form_slider">
				<SliderHeader />
			</div>
		</div>
	);
}

export default IndexHeader;
