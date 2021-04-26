import React from 'react';
import Advertisement from '../advertisement/advertisement';
import MenuHome from '../menuHeader/MenuHome';
// import PropTypes from 'prop-types';
import './styles.css';

const Style = {
	width: '1200px',
	height: '60px',
	display: 'flex',
	float: 'left',
};
function Chung() {
	return (
		<div className="header_home">
			<div className="top_header">
				<div style={Style}>
					<Advertisement />
				</div>
			</div>
			<div className="from_menu_header">
				<div style={{ display: 'flex', height: '100px', width: '1200px' }}>
					<MenuHome />
				</div>
			</div>
		</div>
	);
}

Chung.propTypes = {};

Chung.defaultProps = {};

export default Chung;
