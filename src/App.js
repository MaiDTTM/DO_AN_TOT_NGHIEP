import './App.css';
import 'antd/dist/antd.css';
import IndexHeader from './components/Header/index_header';
import Content from './components/Content/Content';
import Footer from './components/Footer/footer';
import Login from './components/Login';

//style
const styleForm = {display: 'flex', flexDirection :'column'}

function App() {
    return (
            // <div style={styleForm}>
            //     <div className='width-common'>
            //         <IndexHeader/>
            //     </div>
            //     <div className='content'>
            //         <Content/>
            //     </div>
            //     <div className='footer'>
            //         <Footer/>
            //     </div>
            // </div>
        <div>
            <Login/>
        </div>
    );
}

export default App;
