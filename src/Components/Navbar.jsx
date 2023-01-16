import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd'; // imports react components from antd llibrary
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/diamond.png'


/* antd's "Menu Component" cannot contain children. 
The items array gets passed down as a prop/parameter to the Menu Component. This allows us to attach react-router links to the menu items.
*/
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
        label: <Link to="/news">News</Link>,
        key: 'news',
        icon: <BulbOutlined />,
    },
] 

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);
        handleResize();

        return() => window.removeEventListener('resize', handleResize)
    }, [screenSize]);

    useEffect(() => {
        if(screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize])

  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" /> {/* Use the Avatar Component to define and set the size of the icon*/}
            <Typography.Title level={2} className="logo"> {/* This line sets the "Diamond Link" on line 14 as an h2*/}
                <Link to="/">Diamond</Link>
            </Typography.Title>
            <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined />
            </Button>
        </div>
        {activeMenu && (
            <Menu theme="dark" items={items}/> 
        )}
    </div>
  )
}

export default Navbar;
