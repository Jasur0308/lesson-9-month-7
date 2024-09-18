import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbBrandGravatar } from "react-icons/tb";
import { Menu, Dropdown, Button, Input } from 'antd';
import { UserOutlined, SearchOutlined, MenuOutlined } from '@ant-design/icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (e) => {
    console.log('click', e);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="bg-gradient-to-r from-yellow-600 to-red-400 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        {/* Mobile Menu Button */}
        <Button
          className="block lg:hidden"
          icon={<MenuOutlined />}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-4">
          <div className="flex items-center bg-white p-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-3xl text-green-600">S</span>
            <div className="flex flex-col items-center ml-2">
              <span className="font-bold text-sm text-yellow-500">B</span>
              <TbBrandGravatar className="text-yellow-500 text-3xl" />
            </div>
            <span className="font-bold text-3xl text-lime-700 ml-2">M</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className={`flex space-x-8 text-white text-lg font-semibold ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
          <li>
            <Link to="/" className="hover:text-yellow-300 hover:underline transition ease-in-out duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="auth/signUp" className="hover:text-yellow-300 hover:underline transition ease-in-out duration-200">
              Register
            </Link>
          </li>
          <li>
            <Link to="auth/login" className="hover:text-yellow-300 hover:underline transition ease-in-out duration-200">
              Login
            </Link>
          </li>
          <li>
            <Dropdown overlay={menu} trigger={['click']} className="cursor-pointer">
              <Button icon={<UserOutlined />} className="hover:text-yellow-300 transition ease-in-out duration-200">
                User
              </Button>
            </Dropdown>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center">
          <Input 
            placeholder="Search..." 
            prefix={<SearchOutlined />} 
            className="w-64" 
          />
        </div>

        {/* Mobile Menu Items */}
        <div className={`absolute top-full left-0 w-full bg-blue-600 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-4 text-white text-lg font-semibold p-4">
            <li>
              <Link to="/" className="block hover:text-yellow-300 hover:underline transition ease-in-out duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="auth/signUp" className="block hover:text-yellow-300 hover:underline transition ease-in-out duration-200">
                Register
              </Link>
            </li>
            <li>
              <Link to="auth/login" className="block hover:text-yellow-300 hover:underline transition ease-in-out duration-200">
                Login
              </Link>
            </li>
            <li>
              <Dropdown overlay={menu} trigger={['click']} className="cursor-pointer">
                <Button icon={<UserOutlined />} className="w-full text-white">
                  User
                </Button>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;