import React from 'react';
import Advertisement from './advertisement/advertisement';
import Menu from './menuHeader/menu.jsx';
import SliderHeader from './slider/slider';

//import style
import './styleForm.css';
//style
const Style = { display: 'flex', justifyContent: 'center', backgroundColor: '#ea2190', float: 'left' };
const styleHeader = {display: 'flex', flexDirection :'column'};

function IndexHeader() {
    return (
        <div style={styleHeader}>
            <div className='top_header width-common' style={Style}>
                <Advertisement />
            </div>
            <div className='from_menu_header'>
                <Menu />
            </div>
            <div className='form_slider'>
                <SliderHeader />
            </div>
        </div>
    );
}

export default IndexHeader;
