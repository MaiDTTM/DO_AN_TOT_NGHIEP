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
import Chung from '../Header/Chung';
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
	const [disabled, setDisabled] = React.useState(true);
	React.useEffect(() => {
		document.getElementById('li_1').style.backgroundColor = '#93d4e5';
		document.getElementById('li_2').style.backgroundColor = '#ffffff';
		document.getElementById('chu_y').style.display = 'none';
	}, []);
	const currentDiv = (n) => {
		if (n === 1) {
			setDisabled(true);
			document.getElementById('li_1').style.backgroundColor = '#93d4e5';
			document.getElementById('li_2').style.backgroundColor = '#ffffff';
			document.getElementById('left_item_password_3').style.display = 'none';
			document.getElementById('left_item_password_1').style.display = 'none';
			document.getElementById('left_item_password_2').style.display = 'none';
			document.getElementById('left_item_password_4').style.display = 'none';
			document.getElementById('chu_y').style.display = 'none';
			showDivs((slideIndex = n));
		} else if (n === 2) {
			document.getElementById('li_2').style.backgroundColor = '#93d4e5';
			document.getElementById('li_1').style.backgroundColor = '#ffffff';
			showDivs((slideIndex = n));
		} else if (n === 5) {
			setDisabled(false);
			document.getElementById('li_1').style.backgroundColor = '#ffffff';
			document.getElementById('li_2').style.backgroundColor = '#ffffff';
			showDivs((slideIndex = n));
		}
	};
	console.log('disabled', disabled);
	const showDivs = (value) => {
		let i;
		const x = document.getElementsByClassName('content');
		for (i = 0; i < x.length; i++) {
			x[i].style.display = 'none';
		}
		if (value > x.length) {
			x[slideIndex - 5].style.display = 'block';
			document.getElementById('li_2').style.backgroundColor = '#ffffff';
			document.getElementById('li_2').style.backgroundColor = '#ffffff';
			document.getElementById('left_item_password_3').style.display = 'block';
			document.getElementById('left_item_password_2').style.display = 'block';
			document.getElementById('left_item_password_1').style.display = 'block';
			document.getElementById('left_item_password_4').style.display = 'block';
			document.getElementById('chu_y').style.display = 'block';
		} else if (value < 1) {
			slideIndex = x.length;
		} else {
			x[slideIndex - 1].style.display = 'block';
		}
	};
	return (
		<div className={Styles.header_home}>
			<Chung />
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
								<Button icon={<EditOutlined />} onClick={() => currentDiv(5)} value="3">
									Sửa hồ sơ
								</Button>
							</div>
						</div>
					</div>
					<div className={style.user_page_sidebar_menu}>
						<ul style={{ listStyle: 'none' }} defaultValue="1">
							<li onClick={() => currentDiv(1)} id="li_1" value="1">
								<SmileTwoTone style={{ marginRight: '10px' }} />
								Hồ sơ của bạn
							</li>
							<li onClick={() => currentDiv(2)} id="li_2" value="2">
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
								<HoSo disabled={disabled} />
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
