import React from "react";

const Shoppingcart = ({ cart, removeProduct, placeOrder, productList }) => {
  const cartItems = Object.keys(cart).filter((key) => cart[key] > 0);
  
  const totalAmount = cartItems.reduce((acc, key) => {
    return acc + (productList[key].price * cart[key]);
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🛍️</h2>
        <p>Looks like you haven't added anything yet.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-list">
        {cartItems.map((key) => (
          <div className="cart-item" key={key}>
            <img src={productList[key].src} alt={productList[key].title} className="cart-item-img" />
            <div className="cart-item-details">
              <h4>{productList[key].title}</h4>
              <p>Qty: {cart[key]}</p>
              <p className="cart-item-price">₹{productList[key].price * cart[key]}</p>
            </div>
            <button className="remove-btn" onClick={() => removeProduct(key)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ₹{totalAmount}</h3>
        <button 
          className="checkout-btn" 
          onClick={() => {
            placeOrder();
            alert("Order placed successfully! 🎉");
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Shoppingcart;