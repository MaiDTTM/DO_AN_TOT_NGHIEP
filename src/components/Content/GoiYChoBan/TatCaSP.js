import React from 'react';
import Chung from '../../Header/Chung';
// import PropTypes from 'prop-types';
import style from './styleGoiY.module.css';
function TatCaSP() {
	return (
		<div>
			<div>
				<Chung />
			</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div className={style.content_AllProduct}>
					<div>
						<h1>TẤT CẢ SẢN PHẨM</h1>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
}

TatCaSP.propTypes = {};

TatCaSP.defaultProps = {};

export default TatCaSP;
