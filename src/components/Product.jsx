import React from "react";

const Product = ({ product_info, setViewMode, addProduct }) => {
  return (
    <div className="product-detail-view">
      <button className="back-btn" onClick={() => setViewMode(0)}>
        ← Back to Products
      </button>
      <div className="product-detail-grid">
        <div className="product-detail-image-container">
          <img src={product_info.src} alt={product_info.title} />
        </div>
        <div className="product-detail-info">
          <h2>{product_info.title}</h2>
          <div className="rating">⭐ {product_info.rating.toFixed(1)}</div>
          <div className="price-container">
            <span className="price">₹{product_info.price}</span>
            {product_info.discount > 0 && (
              <span className="discount-tag">{product_info.discount}% OFF</span>
            )}
          </div>
          <p className="description">{product_info.desc}</p>
          <button 
            className="add-to-cart-btn" 
            onClick={addProduct}
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;