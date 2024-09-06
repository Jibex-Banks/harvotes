import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';
import Home from './home';
import Shop from './Shop';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav>
        <div className="logo-container">
          <div className="icon">
          </div>
          <Link to="/home" className="logo">Hartoves Technology</Link>
        </div>
        <div className="nav-right">
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link><i className="fa-solid fa-magnifying-glass"></i></Link>
              <Link to="/shop"><i class="fa-solid fa-shop"></i></Link>
              <Link><i className="fa-regular fa-user"></i></Link>
              <Link><i className="fa-solid fa-cart-shopping"></i></Link>
            </li>
          </ul>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
        </div>
      </nav>
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop/>} />
      {/* <Route path="/account" element={<Account/>} /> */}
      </Routes>
    </div>
  );
}

export default Navbar;
