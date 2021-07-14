import React from 'react';
import ItemComment from './ItemComment';
import style from '../index.module.scss';
// import PropTypes from 'prop-types';

function ListComment({ data }) {
	const listComments = Object.values(data)
		.sort((a, b) => a.created - b.created)
		.filter((item) => item.id_comment === '-1');
	return (
		<div className={`${style.item_comment_column} ${style.item_comment_container}`}>
			{listComments.map((item) => (
				<ItemComment content={item.destination} id_user={item.id_user} />
			))}
		</div>
	);
}

ListComment.propTypes = {};

ListComment.defaultProps = {};

export default ListComment;
