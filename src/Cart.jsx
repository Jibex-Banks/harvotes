import React from "react";
import { useState } from "react";

function Cart(){
    const subtotal=0;
    const ct=0;
    const [cont, setCont]=useState(0);
    const handleclick1 = () =>{
       setCont(cont-1);
    }

    const handleclick2 = () =>{
        setCont(cont+1);
     }
    return(
        <>
        <div>
            <div>
           <div>CART SUMMARY</div>
           <div className="">
           <h3>Subtotal</h3>
           <h3>${subtotal}</h3>
           </div>
           <p>Delivery fees not included yet.</p>
           </div>
           <div className="">
            <div className="">CART({ct})</div>
            <div className="">
                <div className="">
                    <a href="">Remove</a> 
                    <button onClick={handleclick1}>-</button>{cont}<button onClick={handleclick2}>+</button>
                </div>
                <button>Call</button> <button>CHECKOUT({subtotal})</button>
            </div>
           </div>
        </div>
        </>
    );
}
export default Cart;