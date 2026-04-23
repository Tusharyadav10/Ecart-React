import React from "react";

const Card = ({ idNo, productList, changeView }) => {
  const product = productList[idNo];

  return (
    <div className="product-card" onClick={changeView}>
      <div className="card-image-wrapper">
        <img src={product.src} alt={product.title} className="card-image" />
        {product.discount > 0 && (
          <span className="badge-discount">-{product.discount}%</span>
        )}
      </div>
      <div className="card-details">
        <h3 className="card-title">{product.title}</h3>
        <div className="card-rating">⭐ {product.rating.toFixed(1)}</div>
        <div className="card-price-row">
          <span className="card-price">₹{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;