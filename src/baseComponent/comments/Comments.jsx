import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import EditorComment from './EditorComment';
import ListComment from './ListComments/ListComment';

function Comments({ id_product, postComment, id_user, avatarUrl, data }) {
	const handleSend = (id_comment = '-1', content) =>
		postComment({
			id_product,
			id_comment: id_comment,
			destination: content,
			id_user,
		});
	return (
		<div className={styles.container}>
			<ListComment data={data} />
			<EditorComment avatarUrl={avatarUrl} handleSend={handleSend} />
		</div>
	);
}

Comments.propTypes = {
	id_product: PropTypes.string.isRequired,
	postComment: PropTypes.func,
	avatarUrl: PropTypes.string,
	id_user: PropTypes.string,
};

Comments.defaultProps = {
	postComment: () => null,
};

export default React.memo(Comments);
