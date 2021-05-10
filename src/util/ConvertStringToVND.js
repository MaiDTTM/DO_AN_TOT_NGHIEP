function ConvertStringToVND(number, type = ' VNĐ') {
	const money = (number * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + type;
	return money;
}

export default ConvertStringToVND;
