import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';
import Home from './home';
import Shop from './Shop';
import Login from './Login';
import Cart from './Cart';

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
              <Link to="login"><i className="fa-solid fa-magnifying-glass"></i></Link>
              <Link to="/shop"><i className="fa-solid fa-shop"></i></Link>
              <Link to="/account"><i className="fa-regular fa-user"></i></Link>
              <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
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
      <Route path="/login" element={<Login/>} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default Navbar;
