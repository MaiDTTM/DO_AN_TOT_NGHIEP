import React from 'react';
import Advertisement from '../Header/advertisement/advertisement';
import MenuHome from '../Header/menuHeader/MenuHome';
import Styles from '../Content/DetailProduct/Style.module.css';
import style from './styles.module.css';
import { Avatar, Button } from 'antd';
import {
	UserOutlined,
	EditOutlined,
	SmileTwoTone,
	CheckCircleTwoTone,
} from '@ant-design/icons';
import HoSo from './HoSo/HoSo';
import DonHang from './DonHang/DonHang';
// import PropTypes from 'prop-types';
const Style = {
	width: '100%',
	height: '60px',
	display: 'flex',
	justifyContent: 'center',
	backgroundColor: '#ea2190',
	float: 'left',
};
function AccountMe() {
	var slideIndex;
	const currentDiv = (n) => {
		showDivs((slideIndex = n));
	};
	const showDivs = (value) => {
		let i;
		const x = document.getElementsByClassName('content');
		if (value > x.length) {
			slideIndex = 1;
		}
		if (value < 1) {
			slideIndex = x.length;
		}
		for (i = 0; i < x.length; i++) {
			x[i].style.display = 'none';
		}
		x[slideIndex - 1].style.display = 'block';
	};
	return (
		<div className={Styles.header_home}>
			<div className="top_header width-common" style={Style}>
				<Advertisement />
			</div>
			<div className="from_menu_header">
				<MenuHome />
			</div>
			<div className={style.content_account}>
				<div className={style.user_page_sidebar}>
					<div className={style.user_page_brief}>
						<Avatar
							className={style.user_page_brief__avatar}
							size={64}
							icon={<UserOutlined />}
						/>
						<div className={style.user_page_brief__right}>
							<div className={style.user_page_brief__username}>maisumule</div>
							<div>
								<Button icon={<EditOutlined />}>Sửa hồ sơ</Button>
							</div>
						</div>
					</div>
					<div className={style.user_page_sidebar_menu}>
						<ul style={{ listStyle: 'none' }}>
							<li onClick={() => currentDiv(1)}>
								<SmileTwoTone style={{ marginRight: '10px' }} />
								Hồ sơ của bạn
							</li>
							<li onClick={() => currentDiv(2)}>
								<CheckCircleTwoTone
									twoToneColor="#52c41a"
									style={{ marginRight: '10px' }}
								/>
								Đơn hàng
							</li>
						</ul>
					</div>
				</div>
				<div className={style._3D9BVC}>
					<div className={style.h4QDlo}>
						<div className={style.my_account_section}>
							<div className="content" style={{ backgroundColor: '#ffffff' }}>
								<HoSo />
							</div>
							<div
								className="content"
								style={{ display: 'none', backgroundColor: '#ffffff' }}
							>
								<DonHang />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

AccountMe.propTypes = {};

AccountMe.defaultProps = {};

export default AccountMe;
