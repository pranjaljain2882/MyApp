import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <div>
        <div className="laa">
        <nav className="navbar">
            <div className="collapse">
                <a href="/" className="nav-head">AppName</a>
              <ul className="navbar-nav">
                <ul className="nav-item">
                  <a href="/" className="nav-link">Home</a>
                </ul>
                <ul className="nav-item">
                  <a href="#Vision" className="nav-link">About Us</a>
                </ul>
                <ul className="nav-item">
                  <a href="#contact" className="nav-link">Contact Us</a>
                </ul>
                <ul className="nav-item">
                  <a href="/internships" className="nav-link">Internships</a>
                </ul>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  };
  
  export default Navbar;