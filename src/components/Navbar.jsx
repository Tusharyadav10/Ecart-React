import React from "react";

const Navbar = ({ changeViewToHome, changeViewToCart, cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={changeViewToHome}>
        <span className="logo">🛒 ShopNova</span>
      </div>
      <div className="navbar-links">
        <button className="nav-btn" onClick={changeViewToHome}>Home</button>
        <button className="nav-btn primary cart-btn" onClick={changeViewToCart}>
          Cart
          {cartCount > 0 && <span className="cart-dot">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;