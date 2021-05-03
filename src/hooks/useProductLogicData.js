import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import baseAPI from '../axios/baseAPI';
import { TypeApi } from '../util/TypeApi';
import { TYPE_ACTION } from '../actions/TypeAction';
import { message } from 'antd';
// import PropTypes from 'prop-types';

function useProductLogicData() {
	// hooks
	const dispatch = useDispatch();
	const myUser = useSelector((state) => state['myUser']);
	const product = useSelector((state) => state['product']);

	// handle func
	const getListProduct = async (obj = {}) => {
		const data = await baseAPI.getAll(TypeApi.product, obj);
		dispatch({ type: TYPE_ACTION.PRODUCT.GET_ALL_PRODUCT, payload: { data } });
	};
	return { product, getListProduct };
}

export default useProductLogicData;
