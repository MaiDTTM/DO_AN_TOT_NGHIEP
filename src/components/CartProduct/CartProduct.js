import React from 'react';
import { Input } from 'antd';
// import PropTypes from 'prop-types';
import Styles from './style.module.css';
import logo from '../../img/logotet2019.png';
const { Search } = Input;

function CartProduct() {
	const onSearch = (value) => console.log(value);
	return (
		<div className={Styles.form_cart}>
			<div className={Styles.header_cart}>
				<div className={Styles.container_wrapper}>
					<div className={Styles.container}>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<div className={Styles.img_header_cart}>
								<img src={logo} />
								<div className={Styles.gio_hang}>Giỏ hàng</div>
							</div>
							<div className={Styles.search_header_cart}>
								<Search
									placeholder="input search text"
									allowClear
									enterButton="Search"
									size="large"
									onSearch={onSearch}
									style={{ backgroundColor: '#f05d40' }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={Styles.content_cart}></div>
		</div>
	);
}

CartProduct.propTypes = {};

CartProduct.defaultProps = {};

export default CartProduct;
