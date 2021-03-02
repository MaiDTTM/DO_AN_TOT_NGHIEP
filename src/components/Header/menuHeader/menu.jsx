import React from 'react';
import { Input, Space,Badge  } from 'antd';
import { AudioOutlined,UserOutlined,HeartTwoTone,ShoppingCartOutlined,ClockCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './style.css';

import logo from '../../../img/logotet2019.png';
function Menu() {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    return (
        <div className='menu_header'>
            <div>
                <img src={logo} />
            </div>
            <div>
                <Search placeholder='input search text' onSearch={onSearch} enterButton />
            </div>
            <div>
                <UserOutlined />
                <a href='#'>Đăng nhập / Đăng ký</a>
            </div>
            <div>
                    <HeartTwoTone twoToneColor="#eb2f96" />
                    <a href='#'>Yêu thích</a>
            </div>
            <div>
                <Badge count={5}>
                    <a href="#" className="head-example" />
                </Badge>
            </div>
        </div>
    );
}

export default Menu;
