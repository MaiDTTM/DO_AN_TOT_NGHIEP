/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 07/03/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
/* eslint-disable */
import React from 'react';
import IndexHeader from './Header/index_header';
import Content from './Content/Content';
import Footer from './Footer/footer';
import { useDispatch } from 'react-redux';
import baseAPI from '../axios/baseAPI';
import { TypeApi } from '../util/TypeApi';
import { TYPE_ACTION } from '../actions/TypeAction';
// import PropTypes from 'prop-types';

// const
const styleForm = {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	// height: '100%',
};

function MainLayout() {
	// hooks
	const dispatch = useDispatch();

	// handle func
	const handleGetList = async () => {
		const data = await baseAPI.getAll(TypeApi.product);
		dispatch({ type: TYPE_ACTION.PRODUCT.GET_ALL_PRODUCT, payload: { data } });
	};

	React.useEffect(() => {
		handleGetList().then();
	}, []);
	return (
		<div style={styleForm}>
			<div className="header">
				<IndexHeader />
			</div>
			<div className="content">
				<Content />
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

MainLayout.propTypes = {};

MainLayout.defaultProps = {};

export default React.memo(MainLayout);
