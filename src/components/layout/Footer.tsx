import React from 'react';
import './styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/src/assets/logo.png" alt="ShopLogo" />
            </div>
            <p className="footer-description">
              We have products that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon" aria-label="Twitter">
               <FaTwitter />

              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
               <FaFacebook/>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />

              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h4 className="footer-title">Customer Service</h4>
            <ul className="footer-links">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns & Exchanges</Link></li>
              <li><Link to="/track-order">Track Order</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4 className="footer-title">Newsletter</h4>
            <p className="footer-newsletter-text">
              Subscribe to get special offers, free giveaways, and once-in-a-deal updates.
            </p>
            <div className="footer-newsletter">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} ZineShop. All rights reserved</p>
          <div className="payment-methods">
            <span>Payment Methods:</span>
            <div className="payment-icons">
              <div className="payment-card">VISA</div>
              <div className="payment-card">MC</div>
              <div className="payment-card">PP</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
