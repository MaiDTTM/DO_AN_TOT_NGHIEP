import { combineReducers } from 'redux';
import userReducer from './userReducer';
import myUserReducer from './myUserReducer';
import productReducer from './producerReducer';
import cartsReducer from './cartsReducer';

const rootReducer = combineReducers({
	user: userReducer,
	myUser: myUserReducer,
	product: productReducer,
	carts: cartsReducer,
});
export default rootReducer;
