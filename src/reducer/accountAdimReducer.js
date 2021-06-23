import { TYPE_ACTION } from '../actions/TypeAction';
import setLocalStore from '../util/setLocalStore';

const accountAdminReducer = (accountAdmin = {}, action) => {
	switch (action.type) {
		case TYPE_ACTION.ADMIN.LOGIN:
			debugger; // MongLV
			setLocalStore(action.payload.data, 'admin');
			debugger; // Todo by MongLV
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
