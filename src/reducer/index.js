import { TYPE_STORE } from '../util/TypeApi';

import { combineReducers } from 'redux';
import userReducer from './userReducer';
import myUserReducer from './myUserReducer';
import productReducer from './producerReducer';
import cartsReducer from './cartsReducer';
import categoryReducer from './categoryReducer';

const store = {};
const listState = [
	{
		name: TYPE_STORE.user,
		value: userReducer,
	},
	{
		name: TYPE_STORE.myUser,
		value: myUserReducer,
	},
	{
		name: TYPE_STORE.product,
		value: productReducer,
	},
	{
		name: TYPE_STORE.carts,
		value: cartsReducer,
	},
	{
		name: TYPE_STORE.category,
		value: categoryReducer,
	},
];
listState.map((item) => (store[item.name] = item.value));
const rootReducer = combineReducers(store);
export default rootReducer;
