const TypeApi = {
	user: '/user',
	product: '/product',
	cart: '/cart',
	admin: '/admin',
	catalog: '/catalog',
	slider: '/slider',
	transaction: '/transaction',
	adminuser: '/user/admin',
};

const TYPE_STORE = {
	user: 'user',
	myUser: 'myUser',
	product: 'product',
	carts: 'carts',
	category: 'category',
	slider: 'slider',
	transaction: 'transaction',
};
const BASE_URL = 'http://localhost:1999/api';
const BASE_URL_IMAGE = `${BASE_URL}/file/`;
export { TypeApi, BASE_URL, BASE_URL_IMAGE, TYPE_STORE };
