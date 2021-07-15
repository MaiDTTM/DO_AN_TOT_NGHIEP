import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Input } from 'antd';
import styles from './index.module.scss';

const { TextArea } = Input;

function EditorComment({ avatarUrl, handleSend }) {
	// state
	const [content, setContent] = React.useState('');

	const onChange = React.useCallback((e) => setContent(e.target.value), []);
	const onSend = React.useCallback(() => {
		handleSend('-1', content);
		setContent('');
	}, [content]);
	return (
		<div className={styles.editor}>
			{/*<Avatar size={50} src={avatarUrl}>*/}
			{/*	USER*/}
			{/*</Avatar>*/}
			<TextArea
				value={content}
				placeholder={'Bình luận của bạn'}
				allowClear={false}
				onChange={onChange}
			/>
			<div style={{ marginLeft: 5 }}>
				<Button type={'primary'} onClick={onSend} style={{ borderRadius: 10 }}>
					Gửi
				</Button>
			</div>
		</div>
	);
}

EditorComment.propTypes = {
	handleText: PropTypes.func,
	handleSend: PropTypes.func,

	avatarUrl: PropTypes.string,
};

EditorComment.defaultProps = {
	handleText: () => null,
	handleSend: () => null,
};

export default React.memo(EditorComment);
