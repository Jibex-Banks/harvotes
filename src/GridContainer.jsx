import React, { useState } from 'react';
import './GridContainer.css';
import CameraPackages from './CameraPackages'; // Make sure this path is correct

const GridContainer = () => {
    const [showPackages, setShowPackages] = useState(false);

    const handleAddToCart = (packageName, tier, price) => {
        // Implement your add to cart logic here
        console.log(`Added to cart: ${packageName} - ${tier} - $${price}`);
        // You might want to update a cart state or send this to a parent component
    };

    return (
        <>
            <div className="welcome item">
                <h2>Welcome to our shop!</h2>
            </div>
            <div className="grid-container">
                {[
                    {
                        title: "Tech Installations",
                        description: "Smart Home Systems, CCTV, Fire Alarm Installations",
                        image: "tech-installations.jpg",
                        hasPackages: false
                    },
                    {
                        title: "Cameras & Surveillance",
                        description: "CCTV, Smart Cameras, Security Cameras",
                        image: "cameras-surveillance.jpg",
                        hasPackages: true
                    },
                    {
                        title: "Smart Home Devices",
                        description: "Automatic Gate Controllers, Smart Doors, Fire Alarms",
                        image: "smart-home.jpg",
                        hasPackages: false
                    },
                    {
                        title: "Laptops & Tablets",
                        description: "Laptops, Tablets, Keyboards, and Accessories",
                        image: "laptops-tablets.jpg",
                        hasPackages: false
                    },
                    {
                        title: "Entertainment & Gaming",
                        description: "Game Consoles, Sound Bars, Gaming Controllers",
                        image: "entertainment-gaming.jpg",
                        hasPackages: false
                    },
                    {
                        title: "Smartphones & Accessories",
                        description: "Mobile Phones, Earbuds, Chargers, and Cases",
                        image: "smartphones.jpg",
                        hasPackages: false
                    }
                ].map((item, index) => (
                    <div key={index} className={`grid-item item${index + 1}`}>
                        <div className="content">
                            <h3 className="category">{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="button-container">
                                <a href="#" className="shop-button">Shop</a>
                                {item.hasPackages && (
                                    <button 
                                        className="shop-button packages"
                                        onClick={() => setShowPackages(true)}
                                    >
                                        Packages
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showPackages && (
                <CameraPackages
                    onClose={() => setShowPackages(false)}
                    onAddToCart={handleAddToCart}
                />
            )}
        </>
    );
}

export default GridContainer;