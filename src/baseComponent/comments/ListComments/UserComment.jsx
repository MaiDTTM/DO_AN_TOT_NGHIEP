import React from 'react';
import useCustomerLogicData from '../../../hooks/useCustomerLogicData';
import { Avatar } from 'antd';
import { BASE_URL_IMAGE } from '../../../util/TypeApi';
// import PropTypes from 'prop-types';

function UserComment({ id }) {
	const { getDateFlowId } = useCustomerLogicData();
	const [user, setUser] = React.useState(null);
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
			<h2>{user.name}</h2>
		</>
	);
}

UserComment.propTypes = {};

UserComment.defaultProps = {};

export default UserComment;
