import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './home';
import Shop from './Shop';
import Cart from './Cart';
import CameraPackages from './CameraPackages';
import Footer from './footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.name !== item.name));
  };

  const updateQuantity = (item, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(item);
    } else {
      setCartItems(cartItems.map(cartItem =>
        cartItem.name === item.name ? { ...cartItem, quantity: newQuantity } : cartItem
      ));
    }
  };

  return (
    <Router>
      <div>
        <Navbar cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/cart" element={
            <Cart 
              cartItems={cartItems} 
              removeFromCart={removeFromCart} 
              updateQuantity={updateQuantity} 
            />
          } />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;