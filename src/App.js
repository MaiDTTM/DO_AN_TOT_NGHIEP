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

//style

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<Route path="/demo" exact component={TestAPI} />
				<Route path="/" exact component={MainLayout} />
				<Route path="/Admin" exact component={LayoutAdmin} />
				<Route path="/detail" exact component={DetailProduct} />
				<Route path="/gioithieu" exact component={IntroduceProduct} />
				<Route path="/buyproduct" exact component={BuyProduct} />
				<Route path="/cart" exact component={CartProduct} />
				<Route path="/account" exact component={AccountMe} />
				<Route path="/lienhe" exact component={LienHe} />
			</Switch>
		</Router>
	);
}

export default App;
