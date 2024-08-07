// TopNavBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import '../styles/TopNavBar.css';

const TopNavBar = () => (
  <div className="top-nav-bar">
    <input type="text" placeholder="Search..." className="search-bar" />
    <div className="icons">
      <FontAwesomeIcon icon={faBell} />
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faCog} />
      <FontAwesomeIcon icon={faUser} />
    </div>
  </div>
);

export default TopNavBar;
