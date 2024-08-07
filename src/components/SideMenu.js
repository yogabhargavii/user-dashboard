// SideMenu.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faList, faUtensils, faUsers, faFileAlt, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/SideMenu.css';

const SideMenu = () => (
  <div className="side-menu">
    <div className="menu-item"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</div>
    <div className="menu-item"><FontAwesomeIcon icon={faList} /> Orders</div>
    <div className="menu-item"><FontAwesomeIcon icon={faUtensils} /> Menu</div>
    <div className="menu-item"><FontAwesomeIcon icon={faUsers} /> Customers</div>
    <div className="menu-item"><FontAwesomeIcon icon={faFileAlt} /> Reports</div>
    <div className="menu-item"><FontAwesomeIcon icon={faCogs} /> Settings</div>
    <div className="menu-item"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</div>
  </div>
);

export default SideMenu;
