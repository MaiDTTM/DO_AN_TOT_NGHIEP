import React from 'react';
// import PropTypes from 'prop-types';
import styles from './index.module.scss';
import EditorComment from './EditorComment';

function Comments() {
	return (
		<div className={styles.container}>
			<EditorComment />
		</div>
	);
}

Comments.propTypes = {};

Comments.defaultProps = {};

export default Comments;
