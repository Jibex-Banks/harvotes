import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartItemCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo-container">
        <div className="icon">
        </div>
        <Link to="/home" className="logo">Hartoves Technology</Link>
      </div>
      <div className="nav-right">
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link to="/home"><i className="fa-solid fa-house"></i></Link>
            <Link to=""><i className="fa-solid fa-magnifying-glass"></i></Link>
            <Link to="/shop"><i className="fa-solid fa-shop"></i></Link>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
              {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            </Link>
          </li>
        </ul>
        <div className="hamburger-icon" onClick={toggleMenu}>
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;