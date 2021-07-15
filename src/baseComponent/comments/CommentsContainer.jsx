/* eslint-disable */
import React from 'react';
import Comments from './Comments';
import useCommentsLogic from '../../hooks/useCommentsLogic';
import { useSelector } from 'react-redux';
import { BASE_URL_IMAGE, TYPE_STORE } from '../../util/TypeApi';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';

function CommentsContainer({ id_product }) {
	// hooks
	const [getList, postComment, deleteComments] = useCommentsLogic();
	const myUser = useSelector((state) => state[TYPE_STORE.myUser]);

	// state
	const [data, setDate] = React.useState({});

	// handle
	const updateData = (obj) => {
		const newData = { ...data };
		newData[obj._id] = obj;
		setDate(newData);
	};
	const deleteComment = (id) => {
		deleteComments(id, setDate, data)
	}
	const post = (obj) => postComment(obj, updateData);

	React.useEffect(() => {
		getList({ id_product })
			.then((data) => setDate(data))
			.catch((err) => console.log(err));
	}, [id_product]);
	return (
		<Comments
			data={data}
			id_product={id_product}
			postComment={post}
			id_user={myUser._id}
			deleteComment={deleteComment}
			avatarUrl={BASE_URL_IMAGE + myUser.avatar}
		/>
	);
}

CommentsContainer.propTypes = {
	id_product: PropTypes.string.isRequired,
};

CommentsContainer.defaultProps = {};

export default React.memo(CommentsContainer);
