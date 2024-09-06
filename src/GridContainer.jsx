import React from 'react';
import './GridContainer.css';


const GridContainer = () => {
    return (
        <>
       <div>
       
       </div>
        <div className="welcome item">
            <h2>Welcome to our shop!</h2>
        </div>
        <div className="grid-container">
            <div className="grid-item item1">
            <div className="content">
                    <h3 className="category">Tech Installations</h3>
                    <p>Smart Home Systems, CCTV, Fire Alarm Installations</p>
                    <a href="#" className="shop-button">Shop</a>
                </div>
            </div>
            <div className="grid-item item2">
            <div className="content">
                    <h3 className="category">Cameras & Surveillance</h3>
                    <p>CCTV, Smart Cameras, Security Cameras</p>
                    <a href="#" className="shop-button">Shop</a>
                </div>
            </div>
            <div className="grid-item item3">
                <div className="content">
                    <h3 className="category">Smart Home Devices</h3>
                    <p>Automatic Gate Controllers, Smart Doors, Fire Alarms</p>
                    <a href="#" className="shop-button">Shop</a>
                </div>
            </div>
            <div className="grid-item item4">
            <div className="content">
                    <h3 className="category">Laptops & Tablets</h3>
                    <p>Laptops, Tablets, Keyboards, and Accessories</p>
                    <a href="#" className="shop-button">Shop</a>
                </div>
            </div>
            <div className="grid-item item5">
                <div className="content">
                    <h3 className="category">Entertainment & Gaming</h3>
                    <p>Game Consoles, Sound Bars, Gaming Controllers</p>
                    <a href="#" className="shop-button">Shop</a>
                </div>
            </div>
            <div className="grid-item item6">
            <div className="content">
                    <h3 className="category">Smartphones & Accessories</h3>
                    <p>Mobile Phones, Earbuds, Chargers, and Cases</p>
                    <a href="#" className="shop-button">Shop</a>
                </div>
            </div>
        </div>
        </>
    );
}

export default GridContainer;
