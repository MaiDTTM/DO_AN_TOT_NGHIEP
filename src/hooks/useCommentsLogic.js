import React from 'react';
import baseAPI from '../axios/baseAPI';
import { TypeApi } from '../util/TypeApi';
import { TYPE_ACTION } from '../actions/TypeAction';
import { message as messageAnt } from 'antd';

// import PropTypes from 'prop-types';

function useCommentsLogic() {
	const getListComment = async (data) => {
		return await baseAPI.getAll(TypeApi.comments, data);
	};
	const postComment = async (obj, callback = () => null) => {
		const { message, data } = await baseAPI.add(TypeApi.comments, obj);
		if (message === 'SUCCESS') {
			callback(data);
		} else {
			messageAnt.warn(message);
		}
	};
	const deleteComments = async(id, callback = () => null, data) => {
		const { message } = await baseAPI.delete(TypeApi.comments, id);
		if (message === 'SUCCESS') {
			delete data[id];
			callback({...data});
			messageAnt.success('Xóa thành công');
		} else {
			messageAnt.warn(message);
		}
	}
	return [getListComment, postComment, deleteComments];
}

export default useCommentsLogic;
