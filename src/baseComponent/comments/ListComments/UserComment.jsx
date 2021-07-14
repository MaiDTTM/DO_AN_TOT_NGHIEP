import React from 'react';
import useCustomerLogicData from '../../../hooks/useCustomerLogicData';
import { Avatar } from 'antd';
import { BASE_URL_IMAGE } from '../../../util/TypeApi';
// import PropTypes from 'prop-types';

function UserComment({ id }) {
	const { getDateFlowId } = useCustomerLogicData();
	const [user, setUser] = React.useState(null);
	console.log('user', user); // MongLV log fix bug
	React.useEffect(() => {
		getDateFlowId(id)
			.then((data) => setUser(data))
			.catch((e) => console.log(e));
	}, []);
	if (!user) return null;
	return (
		<>
			<Avatar size={50} src={BASE_URL_IMAGE + user.image}>
				USER
			</Avatar>
			<div>{user.name}</div>
		</>
	);
}

UserComment.propTypes = {};

UserComment.defaultProps = {};

export default UserComment;
