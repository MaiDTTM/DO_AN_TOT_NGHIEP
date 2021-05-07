import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import baseAPI from '../axios/baseAPI';
import { TYPE_STORE, TypeApi } from '../util/TypeApi';
import { TYPE_ACTION } from '../actions/TypeAction';
import { message as messageAnt } from 'antd';
// import PropTypes from 'prop-types';

function useProductLogicData() {
	// hooks
	const dispatch = useDispatch();
	const myUser = useSelector((state) => state[TYPE_STORE.myUser]);
	const product = useSelector((state) => state[TYPE_STORE.product]);

	// handle func
	const getListProduct = async (obj = {}) => {
		const data = await baseAPI.getAll(TypeApi.product, obj);
		dispatch({ type: TYPE_ACTION.PRODUCT.GET_ALL_PRODUCT, payload: { data } });
	};
	const postProduct = async (obj) => {
		const {message, id} = await baseAPI.add(TypeApi.product, obj);
		if(message === "Thêm sản phẩm thành công!") {
			obj['_id'] = id;
			product[id] = obj;
			dispatch({ type: TYPE_ACTION.PRODUCT.GET_ALL_PRODUCT, payload: { data: {...product} } });
			messageAnt.success(message);
		} else messageAnt.warn(message);
	}
	return { product, getListProduct, myUser, postProduct };
}

export default useProductLogicData;
