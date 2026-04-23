import React from "react";

const Holding = () => {
  return (
    <div className="holding-hero">
      <div className="holding-content">
        <h1>Discover Your Next Favorite Thing</h1>
        <p>Premium products curated just for you. Shop the latest trends with exclusive discounts.</p>
        <button className="cta-btn" onClick={() => window.scrollTo(0, 500)}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Holding;