import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div>
             <div className='container'>
            <nav className='header'>
                <div>
                    <img src={logo} alt="ema-jhon" />
                </div>
                <div>
                    <ul className='menu-item' >
                        <li><a href="/shop">shop</a></li>
                        <li><a href="/orders">Orders</a></li>
                        <li><a href="/inventory">Manage inventory</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        </div>
    );
};

export default Header;