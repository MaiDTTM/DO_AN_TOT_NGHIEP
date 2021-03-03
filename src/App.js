import './App.css';
import 'antd/dist/antd.css';
import IndexHeader from './components/Header/index_header';

//style
const styleForm = {display: 'flex', flexDirection :'column'}

function App() {
    return (
        <div style={styleForm}>
            <div className='width-common'>
                    <IndexHeader/>
            </div>
            <div>Content</div>
            <div>Footer</div>
        </div>
    );
}

export default App;
