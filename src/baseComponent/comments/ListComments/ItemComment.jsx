import React from 'react';
// import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import style from '../index.module.scss';
import UserComment from './UserComment';

const dateString = (date) =>
	date.getDate() +
	'/' +
	(date.getMonth() + 1) +
	'/' +
	date.getFullYear() +
	' ' +
	date.getHours() +
	':' +
	date.getMinutes() +
	':' +
	date.getSeconds();

function ItemComment({ id_user, content = '', timestamp = new Date().getTime() }) {
	return (
		<div className={style.item_comment_row}>
			<div className={style.item_comment_column} style={{ width: '30%' }}>
				<UserComment id={id_user} />
			</div>
			<div className={style.item_comment_column} style={{ width: '70%' }}>
				<div>{content}</div>
				<div>{dateString(new Date(timestamp))}</div>
			</div>
		</div>
	);
}

ItemComment.propTypes = {};

export default ItemComment;
