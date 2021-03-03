import React from 'react';
import { Input, Space, Badge } from 'antd';
import { AudioOutlined, UserOutlined, HeartTwoTone, ShoppingCartOutlined, ClockCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import './style.css';

import logo from '../../../img/logotet2019.png';
function Menu() {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    return (
        <div className='menu_header' >
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='search'>
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </div>
            <div className='singIn_singOut'>
                <div>
                    <UserOutlined />
                    <a href='#'>Đăng nhập / Đăng ký</a>
                </div>
                <div>
                    <HeartTwoTone twoToneColor='#eb2f96' />
                    <a href='#'>Yêu thích</a>
                </div>
                <div>
                    <ShoppingCartOutlined />
                    <a href='#'>Giỏ hàng</a>
                </div>
            </div>
        </div>
    );
}

export default Menu;
