import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './Navbar.css'

const Navbar2 = () => {
    const [menuFlag, setMenuFlag] = useState(0)

    return (
        <>
            <nav className='navbar'>
                <div className="nav-left">
                    <img src={reactLogo} alt="Home" />
                </div>
                {menuFlag? <ul className='nav-right'>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>:""}
                <div className="mobile-right">
                    <div className="cart">
                        cart
                    </div>
                    <div className="menu" onClick={() => {setMenuFlag(1-menuFlag)}}>
                        menu
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar2