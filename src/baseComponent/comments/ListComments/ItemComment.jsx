import React from 'react';
// import PropTypes from 'prop-types';
import { Avatar, Button } from 'antd';
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

function ItemComment({
	user,
	id_user,
	vote,
	content = '',
	timestamp = new Date().getTime(),
	deleteComment = () => null,
	id,
}) {
	return (
		<div className={style.item_comment_row}>
			<UserComment id={id_user} vote={vote} />
			<div className={style.item_comment_column_2}>{content}</div>
			<div className={style.comment_item_meta}>
				<a onClick="openReply(this)" className={style.comment_item_reply} data-id="43971">
					Trả lời
				</a>
				<a
					className={style.comment_item_reply}
					data-url="/Product/AddCommentLike"
					data-id="43971"
					onClick=""
					id="like43971"
				>
					Thích (2)
				</a>
				{user === id_user && (
					<a className={style.comment_item_reply} onClick={() => deleteComment(id)}>
						Xóa
					</a>
				)}
				<span className={style.comment_item_time}>{dateString(new Date(timestamp))}</span>
			</div>
		</div>
	);
}

ItemComment.propTypes = {};

export default ItemComment;
