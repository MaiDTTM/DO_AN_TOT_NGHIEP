import { TYPE_ACTION } from '../actions/TypeAction';
const setLocalStore = (accountAdmin) => {
	accountAdmin &&
		Object.keys(accountAdmin).map((item) => {
			localStorage.setItem(item, accountAdmin[item]);
		});
};
const accountAdminReducer = (accountAdmin = {}, action) => {
	switch (action.type) {
		case TYPE_ACTION.ADMIN.LOGIN:
			setLocalStore(action.payload.data);
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
