import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Internships from './Internships/Internships';
import Home from './Home/Home';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>                
          <Route exact path="/internships" element={<Internships/>}></Route>            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
