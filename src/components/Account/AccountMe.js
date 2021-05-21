import React from 'react';
import style from './styles.module.css';
import { Avatar, Button, Menu } from 'antd';
import {
	UserOutlined,
	EditOutlined,
	MailOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import HoSo from './HoSo/HoSo';
import DonHang from './DonHang/DonHang';
import Chung from '../Header/Chung';
import { useSelector } from 'react-redux';
import { BASE_URL_IMAGE } from '../../util/TypeApi';
import useQuery from '../../hooks/useQuery';
import { useHistory } from 'react-router-dom';
import NewPassword from './Password/NewPassword';
import NewAddress from './Address/NewAdress';
// import PropTypes from 'prop-types';
const { SubMenu } = Menu;
function AccountMe() {
	var slideIndex;
	// hooks
	const query = useQuery();
	const history = useHistory();
	const dataMyUser = useSelector((state) => state.myUser);

	// state
	const [disabled, setDisabled] = React.useState(true);

	React.useEffect(() => {
		document.getElementById('chu_y').style.display = 'none';
	}, []);
	React.useEffect(() => {
		query.get('show') && currentDiv(Number(query.get('show')));
	}, [query]);
	const currentDiv = (n) => {
		if (n === 1) {
			setDisabled(true);
			document.getElementById('left_item_password_3').style.display = 'none';
			document.getElementById('left_item_password_1').style.display = 'none';
			document.getElementById('left_item_password_2').style.display = 'none';
			document.getElementById('left_item_password_4').style.display = 'none';
			document.getElementById('chu_y').style.display = 'none';
			showDivs((slideIndex = n));
		} else if (n === 2) {
			showDivs((slideIndex = n));
		} else if (n === 3) {
			showDivs((slideIndex = n));
		} else if (n === 4) {
			showDivs((slideIndex = n));
		} else if (n === 5) {
			setDisabled(false);
			showDivs((slideIndex = n));
		}
	};
	const showDivs = (value) => {
		let i;
		const x = document.getElementsByClassName('content');
		for (i = 0; i < x.length; i++) {
			x[i].style.display = 'none';
		}
		if (value > x.length) {
			x[slideIndex - 5].style.display = 'block';
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
	const handleClickMenu = (key) => {
		history.push(`/account?show=${key.key}`);
	};
	return (
		<React.Fragment>
			<Chung />
			<div className={style.content_account}>
				<div className={style.user_page_sidebar}>
					<div className={style.user_page_brief}>
						<Avatar
							className={style.user_page_brief__avatar}
							size={64}
							icon={<UserOutlined />}
							src={`${BASE_URL_IMAGE}${dataMyUser.image}`}
						/>
						<div className={style.user_page_brief__right}>
							<div className={style.user_page_brief__username}>{dataMyUser.name}</div>
							<div>
								<Button
									icon={<EditOutlined />}
									onClick={() => history.push('/account?show=5')}
									value="5"
								>
									Sửa hồ sơ
								</Button>
							</div>
						</div>
					</div>
					<div className={style.user_page_sidebar_menu}>
						<Menu
							onClick={(key) => handleClickMenu(key)}
							style={{ width: 256 }}
							mode="inline"
						>
							<SubMenu key="sub1" icon={<MailOutlined />} title="Hồ sơ của bạn">
								<Menu.Item key="1">Tài khoản</Menu.Item>
								<Menu.Item key="3">Địa chỉ</Menu.Item>
								<Menu.Item key="4">Đổi mật khẩu</Menu.Item>
							</SubMenu>
							<Menu.Item icon={<SettingOutlined />} key="2">
								Đơn hàng
							</Menu.Item>
						</Menu>
					</div>
				</div>
				<div className={style._3D9BVC}>
					<div className={style.h4QDlo}>
						<div className={style.my_account_section}>
							{/*content 1*/}
							<div className="content" style={{ backgroundColor: '#ffffff' }}>
								<HoSo disabled={disabled} />
							</div>
							{/*content 2*/}
							<div
								className="content"
								style={{ display: 'none', backgroundColor: '#ffffff' }}
							>
								{/*<DonHang />*/}
							</div>
							{/*content 3*/}
							<div
								className="content"
								style={{ display: 'none', backgroundColor: '#ffffff' }}
							>
								<NewAddress />
							</div>
							{/*content 4*/}
							<div
								className="content"
								style={{ display: 'none', backgroundColor: '#ffffff' }}
							>
								<NewPassword />
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

AccountMe.propTypes = {};

AccountMe.defaultProps = {};

export default AccountMe;
