import React, { useState } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import './CameraPackages.css';

const CameraPackages = ({ onClose, onAddToCart }) => {
  const [activePackage, setActivePackage] = useState('skyline');

  const packages = {
    skyline: {
      name: 'Skyline Series',
      standard: {
        price: 481500,
        items: ['8 Cameras', '8 CH DVR', 'Cable', 'HDD (1TB)', 'Power Supply', 'Accessories']
      },
      deluxe: {
        price: 537500,
        items: ['8 Audio Cameras', '8 CH DVR', 'Cable', 'HDD (1TB)', 'Power Supply', 'Accessories']
      }
    },
    eliteGuard: {
      name: 'Elite Guard',
      standard: {
        price: 472500,
        items: ['8 Cameras', '8 CH DVR', 'Cable', 'HDD (1TB)', 'Power Supply', 'Accessories']
      },
      deluxe: {
        price: 528500,
        items: ['8 Audio Cameras', '8 CH DVR', 'Cable', 'HDD (1TB)', 'Power Supply', 'Accessories']
      }
    },
    cityGuardian: {
      name: 'City Guardian',
      standard: {
        price: 316000,
        items: ['4 Cameras', '4 CH DVR', 'Cable', 'HDD (500GB)', 'Power Supply', 'Accessories']
      },
      deluxe: {
        price: 437500,
        items: ['4 Audio Cameras', '4 CH DVR', 'Cable', 'HDD (500GB)', 'Power Supply', 'Accessories']
      }
    },
    secureHaven: {
      name: 'Secure Haven',
      standard: {
        price: 272000,
        items: ['4 Cameras', '4 CH DVR', 'Cable', 'HDD (500GB)', 'Power Supply', 'Accessories']
      },
      deluxe: {
        price: 310000,
        items: ['4 Audio Cameras', '4 CH DVR', 'Cable', 'HDD (500GB)', 'Power Supply', 'Accessories']
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Camera Packages</h2>
          <button onClick={onClose} className="close-button">
            <X size={24} />
          </button>
        </div>
        
        <div className="package-buttons">
          {Object.keys(packages).map((pkg) => (
            <button
              key={pkg}
              onClick={() => setActivePackage(pkg)}
              className={`package-button ${activePackage === pkg ? 'active' : ''}`}
            >
              {packages[pkg].name}
            </button>
          ))}
        </div>
        
        <div className="package-tiers">
          {['standard', 'deluxe'].map((tier) => (
            <div key={tier} className="package-tier">
              <h3 className="tier-title">{tier}</h3>
              <ul className="tier-items">
                {packages[activePackage][tier].items.map((item, index) => (
                  <li key={index} className="tier-item">
                    <span className="item-bullet">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="tier-footer">
                <p className="tier-price">
                  ₦{packages[activePackage][tier].price.toLocaleString()}
                </p>
                <button
                  onClick={() => onAddToCart(packages[activePackage].name, tier, packages[activePackage][tier].price)}
                  className="add-to-cart-button"
                >
                  <ShoppingCart size={18} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="modal-footer">
          <p className="contact-info">
            For inquiries: 09061573526 | harttech01@outlook.com
          </p>
          <a
            href="https://www.instagram.com/harttech_africa"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            @harttech_africa
          </a>
        </div>
      </div>
    </div>
  );
};

export default CameraPackages;