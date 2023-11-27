import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
  console.log("hello")
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/showNtell">Show N Tell</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="profile">
            <div className="profile-icon">P</div>
            <ul className="dropdown-menu">
              <li><a href="#profile">Profile</a></li>
              <li><a href="#settings">Settings</a></li>
              <li><a href="#logout">Logout</a></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
