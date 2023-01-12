import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd'; // imports react components from antd llibrary
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/diamondlogo.png'


const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" /> {/* Use the Avatar Component to define and set the size of the icon*/}
            <Typography.Title level={2} className="logo"> {/* This line sets the "Diamond Link" on line 14 as an h2*/}
                <Link to="/">Diamond</Link>
            </Typography.Title>
            <Button></Button>
        </div>
    </div>
  )
}

export default Navbar;
