import React from "react";
import { Link } from "react-router-dom";
import "./CartCheckout.css";

function CartCheckout() {
  return (
    <>
    <div className="container">
        <p className="mt-3">Total:</p>
        <h2 className="m-0">₹1,098</h2>
        <p className="m-0"><del>₹08,699</del></p>
        <p className="m-0">87% off</p>
        <Link to="/checkout"><button className="checkout-button px-3 mb-5 mt-3 py-2">Checkout</button></Link>
        
    </div>
    </>
  )
}

export default CartCheckout