import React from "react";
import reactLogo from "../assets/react.svg";
import "./css/Navbar.css";

const Navbar = (props) => {

    return (
        <>
            <nav className='navbar'>
                <div className="nav-left">
                    <img src={reactLogo} alt="Home" />
                </div>
                <ul className='nav-right' id="menu">
                    <a onClick={props.changeViewToHome}><li>Home</li></a>
                    <a onClick={props.changeViewToCart}><li>Cart</li></a>
                </ul>
                
            </nav>
        </>
    );
};

export default Navbar;