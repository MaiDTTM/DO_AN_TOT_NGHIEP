import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import EditorComment from './EditorComment';
import ListComment from './ListComments/ListComment';

function Comments({
	id_product,
	postComment,
	id_user,
	avatarUrl,
	data,
	deleteComment,
	maxIndex,
	minIndex,
}) {
	const handleSend = (id_comment = '-1', content) =>
		postComment({
			id_product,
			id_comment: id_comment,
			destination: content.content,
			vote: content.vote,
			id_user,
		});
	return (
		<div className={styles.container}>
			<ListComment
				data={data}
				deleteComment={deleteComment}
				maxIndex={maxIndex}
				minIndex={minIndex}
			/>
			<EditorComment avatarUrl={avatarUrl} handleSend={handleSend} />
		</div>
	);
}

Comments.propTypes = {
	id_product: PropTypes.string.isRequired,
	postComment: PropTypes.func,
	deleteComment: PropTypes.func,
	avatarUrl: PropTypes.string,
	id_user: PropTypes.string,
};

Comments.defaultProps = {
	postComment: () => null,
	deleteComment: () => null,
};

export default React.memo(Comments);
