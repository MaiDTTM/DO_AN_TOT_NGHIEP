const setLocalStore = (accountAdmin, name = '') => {
	debugger; // Todo by MongLV
	accountAdmin &&
		Object.keys(accountAdmin).map((item) => {
			localStorage.setItem(
				name.length > 0 ? `${item}_${name}` : item,
				accountAdmin[item]
			);
			return null;
		});
};
export default setLocalStore;
