import React from 'react';
import PropTypes from 'prop-types';
//import css
import './styleListPicture.css';
//import img banner
import banner1 from '../../../img/banner1.png';
import banner2 from '../../../img/banner2.png';
import banner3 from '../../../img/banner3.jpg';

ListPicture.propTypes = {

};

function ListPicture(props) {
    return (
        <div className='list_banner'>
            <div className='item_banner'>
                <div className='img_banner'>
                    <a href='#'>
                        <img src={banner1} alt=''/>
                    </a>
                </div>
            </div>
            <div className='item_banner'>
                <div className='img_banner'>
                    <a href='#'>
                        <img src={banner2} alt=''/>
                    </a>
                </div>
            </div>
            <div className='item_banner'>
                <div className='img_banner'>
                    <a href='#'>
                        <img src={banner3} alt=''/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ListPicture;