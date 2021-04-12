import React from 'react';
// import PropTypes from 'prop-types';
import Styles from './style.module.css';
import logo from '../../../../img/logo-gcb.jpg';
import { Link } from 'react-router-dom';
function BuyProduct() {
	return (
		<div className={Styles.wrap_oder}>
			<div className={Styles.header_oder}>
				<div className={Styles.header_oder}>
					<div className={Styles.logo_oder}>
						<Link to={'/'}>
							<img src={logo} />
						</Link>
					</div>
					<div className={Styles.oder_header_icon}>
						<div className={Styles.box_icon_item_1}>
							<span className={Styles.box_icon_ic_icon_ship} />
							<span className={Styles.giao_hang}>Giao hàng toàn quốc</span>
						</div>
						<div className={Styles.box_icon_item_2}>
							<span className={Styles.box_icon_bg_icon_ship} />
							<span className={Styles.giao_hang}>Đổi hàng 15 ngày miễn phí</span>
						</div>
						<div className={Styles.box_icon_item_3}>
							<span className={Styles.box_icon_chinhhang} />
							<span className={Styles.giao_hang}>Đảm bảo hàng chính hãng</span>
						</div>
					</div>
				</div>
				<div className={Styles.login_oder}>
					<span>Hãy </span>
					<Link to={'/login'}>
						<b>Đăng nhập</b>
					</Link>
					<span> để mua hàng nhanh hơn! </span>
					<span style={{ float: 'right', margin: '0 5px 0 5px' }}>
						<Link>
							<i>Tiếp tục mua hàng >> </i>
						</Link>
					</span>
				</div>
				<div className={Styles.divLogin_oder}></div>
			</div>
			<div className={Styles.content_buy_product}></div>
			<div className={Styles.footer_buy_product}></div>
		</div>
	);
}

BuyProduct.propTypes = {};

BuyProduct.defaultProps = {};

export default BuyProduct;
