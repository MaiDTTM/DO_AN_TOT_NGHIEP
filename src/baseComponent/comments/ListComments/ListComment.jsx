import React from 'react';
import ItemComment from './ItemComment';
import style from '../index.module.scss';
// import PropTypes from 'prop-types';

function ListComment({ data, deleteComment = () => null }) {
	const listComments = Object.values(data)
		.sort((a, b) => a.created - b.created)
		.filter((item) => item.id_comment === '-1');
	return (
		<div
			className={`${style.item_comment_column} ${style.item_comment_container}`}
			style={{ height: listComments && listComments.length > 5 ? 300 : 'auto' }}
		>
			{listComments.map((item, index) => (
				<ItemComment key={index} content={item.destination} id_user={item.id_user} id={item._id} deleteComment={deleteComment} />
			))}
		</div>
	);
}

ListComment.propTypes = {};

ListComment.defaultProps = {};

export default ListComment;
