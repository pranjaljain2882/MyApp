import React from 'react';
import './Home.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar';

function Home() {
  return (
    <div className="container">
          <Navbar/>
          
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

export default Home;
