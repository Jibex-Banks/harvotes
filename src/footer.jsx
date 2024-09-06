import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import './footer.css';

function Footer(){
    return (
        <div>
        <footer>
        <div className="footertop">
          <div className="info">
            <h3>Hartoves Technology</h3>
            <p>A place to be for all your quality babies and toy. Your uncommon wears, laces, shoes and bags are still available at d Prestige store.</p>
          </div>
          <div className="footernav">
            <h3>CUSTOMER Service</h3>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/orders">Orders</Link></li>
              <li><Link to="/FAQ">FAQ</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
            </ul>
          </div>
          <div className="reach">
    <h3>REACH US</h3>
    <p>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=22+Lagos+road+behind+brt+terminal+ikorodu+Lagos" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          22 Lagos road behind BRT terminal, Ikorodu, Lagos
        </a>
    </p>
    <p>
        <a href="mailto:hartovestechnology@gmail.com">hartovestechnology@gmail.com</a>
    </p>
    <p>
        <a href="tel:+2349061573526">+234 906 157 3526</a>
    </p>
</div>

          <div className='social'>
          <h3>Join Hartoves Technology Community</h3>
        <div class="social-media">
            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-telegram"></i></a>
        </div> 
          </div>
        </div>
        <div className="footerBottom">
          <h5>Copyright &copy; 2024 Hartoves Technology</h5>
        </div>
      </footer>
      </div>
      );
}
export default Footer;