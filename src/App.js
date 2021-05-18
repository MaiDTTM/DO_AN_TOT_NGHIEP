import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Login from './components/Login';

//import react router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Register/register';
import MainLayout from './components/MainLayout';
import TestAPI from './components/Demo/testMaiDao';
import LayoutAdmin from './components/Admin';
import DetailProduct from './components/Content/DetailProduct/DetailProduct';
import IntroduceProduct from './components/Header/slider/introduceProduct/introduceProduct';
import BuyProduct from './components/Content/DetailProduct/BuyProduct/BuyProduct';
import CartProduct from './components/CartProduct/CartProduct';
import AccountMe from './components/Account/AccountMe';
import LienHe from './components/Header/slider/LienHeChungToi/LienHe';
import { useDispatch } from 'react-redux';
import { LoginUser } from './actions/userAction';
import { ContextApp } from './context/contextApp';
import LoginAdmin from './components/Admin/Login/LoginAdmin';
import TatCaSP from './components/Content/GoiYChoBan/TatCaSP';
import WatchCatagory from './components/AllProduct/WatchCatagory';
import AllFlashSale from './components/Content/FlashSale/AllFlashSale/AllFlashSale';
import AllNoiBat from './components/Content/Sanphamnoibat/AllNoiBat/AllNoiBat';

//style

function App() {
	// hooks
	const dispatch = useDispatch();

	// state
	const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);

	// Vòng đời
	React.useEffect(() => {
		localStorage && dispatch(LoginUser(localStorage));
	}, []);
	return (
		<ContextApp.Provider value={{ selectedRowKeys, setSelectedRowKeys }}>
			<Router>
				<Switch>
					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
					<Route path="/demo" exact component={TestAPI} />
					<Route path="/" exact component={MainLayout} />
					<Route path="/admin" exact component={LayoutAdmin} />
					<Route path="/login-admin" exact component={LoginAdmin} />
					<Route path="/detail/:id" exact component={DetailProduct} />
					<Route path="/gioithieu" exact component={IntroduceProduct} />
					<Route path="/buyproduct" exact component={BuyProduct} />
					<Route path="/cart" exact component={CartProduct} />
					<Route path="/account" exact component={AccountMe} />
					<Route path="/lienhe" exact component={LienHe} />
					<Route path="/tatca" exact component={TatCaSP} />
					<Route path="/xemtheomenu" exact component={WatchCatagory} />
					<Route path="/flashsale" exact component={AllFlashSale} />
					<Route path="/allnoibat" exact component={AllNoiBat} />
				</Switch>
			</Router>
		</ContextApp.Provider>
	);
}

export default App;
