import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd'; // imports react components from antd llibrary
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/diamond.png'

const items = [
    {
      label: <Link to="/">Home</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
        label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
        key: 'cryprtocurrencies',
        icon: <FundOutlined />,
    },
    {
        label: <Link to="/exchanges">Exchanges</Link>,
        key: 'exchanges',
        icon: <MoneyCollectOutlined />,
    },
    {
        label: <Link to="/news">News</Link>,
        key: 'news',
        icon: <BulbOutlined />,
    },
]    
const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" /> {/* Use the Avatar Component to define and set the size of the icon*/}
            <Typography.Title level={2} className="logo"> {/* This line sets the "Diamond Link" on line 14 as an h2*/}
                <Link to="/">Diamond</Link>
            </Typography.Title>
            {/*<Button></Button>*/}
        </div>
        <Menu defaultSelectedKeys={['1']} theme="dark" items={items} /> {/* Highlight the "Home" item link by default and use the "dark theme" in the Menu Component and it's items */}
    </div>
  )
}

export default Navbar;
