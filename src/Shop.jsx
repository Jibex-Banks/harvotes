import React from 'react';
import { ShoppingCart } from 'lucide-react';
import './Shop.css';

const shopItems = [
    {
        name: 'Dell Latitude 5300',
        price: "480,000",
        image: 'url("src/Dell Latitude 530.jpeg")',
        detail: 'Intel Core i7, 16GB RAM, 512GB SSD, 13.3" FHD Touch Display, Windows 10 Pro'
      },
      {
        name: 'HP EliteBook 1030 G4',
        price: "420,000",
        image: 'url("src/HP EliteBook 1030 G4.jpeg")',
        detail: 'Intel Core i5, 8GB RAM, 256GB SSD, 13.3" FHD Display, Windows 10 Pro'
      },
      {
        name: 'Dell Latitude 7400',
        price: "470,000",
        image: 'url("src/Dell Latitude 7400.avif")',
        detail: 'Intel Core i7, 16GB RAM, 512GB SSD, 14" FHD Display, Windows 10 Pro'
      },
      {
        name: 'HP ProBook 430 G6',
        price: "250,000",
        image: 'url("src/HP ProBook 430 G6.png")',
        detail: 'Intel Core i5, 8GB RAM, 256GB SSD, 13.3" HD Display, Windows 10 Home'
      },
      {
        name: 'HP EliteBook 840 G5',
        price: "320,000",
        image: 'url("src/HP EliteBook 840 G5.jpeg")',
        detail: 'Intel Core i7, 16GB RAM, 512GB SSD, 14" FHD Display, Windows 10 Pro'
      },
      {
        name: 'Apple MacBook Air 13.3"',
        price: "2,000000",
        image: 'url("src/Apple MacBook Air 13.3.jpg")',
        detail: 'Apple M1 Chip, 8GB RAM, 256GB SSD, 13.3" Retina Display, macOS Big Sur'
      },
  { name: 'Apple Watch S6 40mm GPS LTE', price: "195,000", image: 'url("src/Apple Watch S6 40mm GPS LTE.jpeg")', detail: 'Available with charger' },
  { name: 'Apple Watch S6 44mm GPS ONLY', price: "205,000", image: 'url("src/Apple Watch S6 44mm GPS ONLY.jpeg")', detail: 'Available with charger' },
  { name: 'Apple Watch S7 41mm GPS ONLY', price: "230,000", image: 'url("src/Apple Watch S7 41mm GPS ONLY.jpeg")', detail: 'Available with charger' },
  { name: 'Apple Watch S7 45mm GPS LTE', price: "265,000", image: 'url("src/Apple Watch S7 45mm GPS LTE.jpeg")', detail: 'Available with charger' }
];

const ShopItem = ({ item, addToCart }) => (
  <div className="shop-item">
    <div className="shop-item-image" style={{ backgroundImage: item.image }}></div>
    <div className="shop-item-content">
      <h3 className="shop-item-name">{item.name}</h3>
      <p>{item.detail}</p>
      <p className="shop-item-price">₦{item.price}</p>
      <button className="shop-item-button" onClick={() => addToCart(item)}>
        <ShoppingCart size={18} />
        Add to Cart
      </button>
    </div>
  </div>
);

function Shop({ addToCart }) {
  return (
    <div className="shop-page">
      <header className="shop-header">
        <h1>Welcome To Our Store!!</h1>
        <p>Capture Life's Moments</p>
      </header>
      <main className="shop-main">
        <section className="shop-grid">
          {shopItems.map((item, index) => (
            <ShopItem key={index} item={item} addToCart={addToCart} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Shop;