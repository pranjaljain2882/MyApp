import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
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
          </ul>
        </div>
      </nav>
      
      <div id="Vision" className="page-section">
        <h1>About Us</h1>
        <div className="content">
          <p>
            At AppName We Post Daily updates on internships and job postings!
            Our vision is to empower the youth of our nation and make them Atmanirbhar (Self-dependent).
            By providing them with all kinds of opportunities from various sectors, sharing knowledge, and making them competent enough so that they could excel in any field.
          </p>
          <p>
            If you have any query regarding the site, advertisements, and any other issues, please feel free to contact us at abcd@gmail.com.
          </p>
        </div>
      </div>
      
      <div id="contact" className="page-section">
        <h1>Contact Us</h1>
        <p>This is the Contact Us page content.</p>
      </div>
    </div>
  );
}

export default App;
