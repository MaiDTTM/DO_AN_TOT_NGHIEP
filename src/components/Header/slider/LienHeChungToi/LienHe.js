import React from 'react';
import Advertisement from '../../advertisement/advertisement';
import MenuHome from '../../menuHeader/MenuHome';
import Styles from './styles.module.css';
// import PropTypes from 'prop-types';
const Style = {
	width: '100%',
	height: '60px',
	display: 'flex',
	justifyContent: 'center',
	backgroundColor: '#ea2190',
	float: 'left',
};
function LienHe() {
	return (
		<div>
			<div className={Styles.header_home}>
				<div className="top_header width-common" style={Style}>
					<Advertisement />
				</div>
				<div className="from_menu_header">
					<MenuHome />
				</div>
			</div>
		</div>
	);
}

LienHe.propTypes = {};

LienHe.defaultProps = {};

export default LienHe;
