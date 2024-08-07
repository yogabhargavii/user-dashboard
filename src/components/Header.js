import React from 'react';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <input type="text" placeholder="Search..." className="search-bar" />
    <div className="icons">
      <i className="fa fa-envelope"></i>
      <i className="fa fa-bell"></i>
      <i className="fa fa-user-circle"></i>
    </div>
  </header>
);

export default Header;
