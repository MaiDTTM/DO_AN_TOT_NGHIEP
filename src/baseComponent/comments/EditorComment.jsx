import React from 'react';
// import PropTypes from 'prop-types';
import { Avatar, Button, Input } from 'antd';
import styles from './index.module.scss';

const { TextArea } = Input;

function EditorComment() {
	const onChange = (e) => {
		console.log(e);
	};
	return (
		<div className={styles.editor}>
			<Avatar size={40}>USER</Avatar>
			<TextArea placeholder={'Bình luận của bạn'} allowClear onChange={onChange} />
			<div>
				<Button>Gửi</Button>
			</div>
		</div>
	);
}

EditorComment.propTypes = {};

EditorComment.defaultProps = {};

export default EditorComment;
