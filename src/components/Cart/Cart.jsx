import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;

    // console.log(cart);
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for (let product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1
        totalPrice += product.price * product.quantity;
        shipping += product.shipping;
        quantity += product.quantity;

    }

    const tax = totalPrice * 0.1;
    const grandTotalPrice = totalPrice + shipping + tax;
    return (
        <div className='cart'>
            <h5 className='order-summery'>Order Summery</h5>
            <div className='cart-info'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
            </div>
            <h6 className='grand-total'>Grand Total: ${grandTotalPrice.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;