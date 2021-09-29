import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Input, Rate } from 'antd';
import styles from './index.module.scss';

const { TextArea } = Input;

function EditorComment({ handleSend }) {
	// state
	const [content, setContent] = React.useState('');
	const [vote, setVote] = React.useState(0);

	const onChange = React.useCallback((e) => setContent(e.target.value), []);
	const handleChangeVote = (value) => {
		setVote(value);
	};
	const onSend = React.useCallback(() => {
		handleSend('-1', { content, vote });
		setContent('');
		setVote(0);
	}, [content, vote]);
	return (
		<div className={styles.editor}>
			<TextArea
				value={content}
				placeholder={'Bình luận của bạn'}
				allowClear={false}
				onChange={onChange}
				rows={3}
			/>
			<div className={styles.submit_comment}>
				<Rate
					style={{ fontSize: '16px' }}
					allowHalf
					value={vote}
					onChange={handleChangeVote}
				/>
				<Button type={'primary'} onClick={onSend} className={styles.button_comment}>
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
