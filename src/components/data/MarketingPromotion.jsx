import React from 'react';
import '../../App.css';

const MarketingPromotion = () => {

  return (
    <div className="marketing-promotion-container">
      <h2 className="marketing-promotion-title">Our Promotions. Come first come serve</h2>
      <div className="marketing-promotion-content">
      <div className="promotion-item">
          <img src="" alt="Promotion 2" />
          <h3>Tech tools</h3>
          <p>Buy 2, Get 1 Free on selected items!</p>
        </div>
        <div className="promotion-item">
          <img src="" alt="Promotion 1" />
          <h3>Home Products</h3>
          <p>Get 20% off on all products!</p>
        </div>
        <div className="promotion-item">
          <img src="" alt="Promotion 2" />
          <h3>Tech tools</h3>
          <p>Buy 2, Get 1 Free on selected items!</p>
        </div>
        <div className="promotion-item">
          <img src="" alt="Promotion 1" />
          <h3>Home Products</h3>
          <p>Get 20% off on all products!</p>
        </div>
      </div>
    </div>
  );
};

export default MarketingPromotion;