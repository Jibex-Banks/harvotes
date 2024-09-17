import React from "react";
import './Cart.css';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
    const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace(',', '')) * item.quantity, 0);
    const phoneNumber="+2348155512886";

    if (cartItems.length === 0) {
        return (
            <div className="cart-content">
                <h2>Your cart is empty</h2>
            </div>
        );
    }

    return (
        <div className="cart-content">
            <div className="cart-summary">
                <h2>Cart Summary</h2>
                <div className="subtotal">
                    <h3>Subtotal</h3>
                    <h3>₦{subtotal.toLocaleString()}</h3>
                </div>
                <p>Delivery fees not included yet.</p>
            </div>
            <div className="cart-items">
                <h2>Cart ({cartItems.length})</h2>
                {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        <div className="cart-item-image" style={{ backgroundImage: item.image }}></div>
                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p>₦{item.price}</p>
                            <div className="quantity-controls">
                                <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                            </div>
                            <button className="remove-button" onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-actions">
                <a href={`tel:${phoneNumber}`}>
                <button className="call-button">Call</button></a>
                <button className="checkout-button">Checkout (₦{subtotal.toLocaleString()})</button>
            </div>
        </div>
    );
}

export default Cart;