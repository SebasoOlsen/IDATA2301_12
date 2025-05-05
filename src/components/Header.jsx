import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/global.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
            <img src="/pictures/StayFinder-logo.jpg" alt="Stay Finder Logo" className="logo-img" />
        </Link>
      </div>
      <div className="header-center">
        <span className="header-title">Stay Finder</span>
      </div>
      <div className="header-right">
        <Link to="/" className="discover-btn">
          <i className="fa-solid fa-earth-americas"></i>
        </Link>
        <Link id="userBtn" to="/login" className="sign-in">
            <img src="/pictures/user-icon.png" alt="User Icon" className="user-icon" />
        </Link>
      </div>
    </header>
  );
}
