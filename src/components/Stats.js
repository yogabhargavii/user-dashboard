// Stats.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTruck, faTimes, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import '../styles/Stats.css';

const Stats = () => (
  <div className="stats">
    <div className="stat-item">
      <FontAwesomeIcon icon={faShoppingCart} />
      <div>
        <h3>Total Orders</h3>
        <p>75 <span className="increase">+2%</span></p>
      </div>
    </div>
    <div className="stat-item">
      <FontAwesomeIcon icon={faTruck} />
      <div>
        <h3>Total Delivered</h3>
        <p>70 <span className="decrease">-3%</span></p>
      </div>
    </div>
    <div className="stat-item">
      <FontAwesomeIcon icon={faTimes} />
      <div>
        <h3>Total Cancelled</h3>
        <p>5 <span className="increase">+1%</span></p>
      </div>
    </div>
    <div className="stat-item">
      <FontAwesomeIcon icon={faDollarSign} />
      <div>
        <h3>Total Revenue</h3>
        <p>$12k <span className="increase">+5%</span></p>
      </div>
    </div>
  </div>
);

export default Stats;
