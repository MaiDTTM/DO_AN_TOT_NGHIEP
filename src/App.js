import './App.css';
import 'antd/dist/antd.css';
import Login from './components/Login';

//import react router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Register/register';
import MainLayout from './components/MainLayout';
import TestAPI from './components/Demo/testMaiDao';
import LayoutAdmin from './components/Admin';

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
			</Switch>
		</Router>
	);
}

export default App;
