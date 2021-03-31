import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Advertisement.propTypes = {
    
};

function Advertisement(props) {
    return (
        <div className='wrap'>
                <img src='https://media.shoptretho.com.vn/upload/image/banner/20210301/chuc-mung-8-3-uu-dai-cho-me-qua-tang-cho-be-1190-x-60.png'
                     alt='Chúc mừng 8/3 - Ưu đãi cho mẹ - Qùa tặng cho bé' />
        </div>
    );
}

export default Advertisement;
