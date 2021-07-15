import React from 'react';
// import PropTypes from 'prop-types';
import {Avatar, Button} from 'antd';
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

function ItemComment({ id_user, content = '', timestamp = new Date().getTime(), deleteComment = () => null, id }) {
	return (
		<div className={style.item_comment_row}>
			<div className={style.item_comment_column_2} style={{ width: '15%' }}>
				<UserComment id={id_user} />
			</div>
			<div className={style.item_comment_column_2} style={{ width: '80%' }}>
				<h2 className={style.content_} >{content}</h2>
				<h4>Ngày bình luận: {dateString(new Date(timestamp))}</h4>
			</div>
			<Button type={'danger'} onClick={() => deleteComment(id)} style={{borderRadius: 500}}>X</Button>
		</div>
	);
}

ItemComment.propTypes = {};

export default ItemComment;
