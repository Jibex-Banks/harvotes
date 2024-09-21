import React from "react";

function Checkout(){
    return(
        <>
        <div className="">
            <h2>ORDER SUMMARY</h2>
            <div className="order-summary">
                <div className="order-summary-item">
                    <h4>Item's total (3)</h4>
                    <p>₦{subtotal}</p>
                    <h4>Delivery Fee</h4>
                    <p>₦{deliveryFee}</p>
                    <h4>Total</h4>
                    <p>₦{total}</p>
                </div>
            </div>
        </div>
        <div className="">
            <h2>DELIVERY ADDRESS</h2>
            <div className="delivery-address">
                <form action="">
                    
                </form>
            </div>
        </div>
        </>
    );
}
export default Checkout;