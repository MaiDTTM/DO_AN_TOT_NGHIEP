import { TYPE_ACTION } from '../actions/TypeAction';
const setLocalStore = (accountAdmin, name = '') => {
	accountAdmin &&
		Object.keys(accountAdmin).map((item) => {
			name.length > 0
				? localStorage.setItem(`${item}_${name}`, accountAdmin[item])
				: localStorage.setItem(item, accountAdmin[item]);
		});
};
const accountAdminReducer = (accountAdmin = {}, action) => {
	switch (action.type) {
		case TYPE_ACTION.ADMIN.LOGIN:
			setLocalStore(action.payload.data, 'admin');
			return action.payload.data;
		case TYPE_ACTION.ADMIN.LOGOUT:
			return {};
		case TYPE_ACTION.ADMIN.PUT:
			setLocalStore(action.payload.data);
			return action.payload.data;
		default:
			return accountAdmin;
	}
};
export default accountAdminReducer;
