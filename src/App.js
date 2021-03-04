import './App.css';
import 'antd/dist/antd.css';
import IndexHeader from './components/Header/index_header';
import Content from './components/Content/Content';

//style
const styleForm = {display: 'flex', flexDirection :'column'}

function App() {
    return (
        <div style={styleForm}>
            <div className='width-common'>
                    <IndexHeader/>
            </div>
            <div className='content'>
                <Content/>
            </div>
            <div>Footer</div>
        </div>
    );
}

export default App;
