import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    let total = 0;
    let shipping_cost = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity; 
        total = total + (product.price * quantity);
        shipping_cost = shipping_cost + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping_cost + tax).toFixed(2);
    
    return (
        <div className='cart_info'>
            <h2>Order Summary</h2>
            <p>Selected Items t: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping_cost}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;