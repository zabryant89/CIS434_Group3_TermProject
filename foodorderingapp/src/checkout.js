//Zachary Bryant
//USE: handle checking out of items.  For now it just displays a very simple UI of how it would calculate items.
//NEED: functionality for entering a card or using VIP points.
//      -hard code use cases: card # 1234 always has enough funds, card # 6789 always declined
//      -legitimate UI
import React, { useState, useEffect } from 'react';
import './checkout.css';

function Checkout({ handleCheckout }) {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0.0);
    const [isVisible, setIsVisible] = useState(true);
    const [userLoggedIn, setUserLoggedIn] = useState(true);
    

    class MenuItem {
        constructor(nam, pric) {
            this.name = nam;
            this.price = pric;
        }
    }

    var food1 = new MenuItem("steak", 20.00);
    var food2 = new MenuItem("chicken", 12.12);
    var food3 = new MenuItem("super food", 100.50);

    function receiveCart() {
        console.log("building list of food items");
        setCartItems([food1, food2, food3]);
    }

    function calcTotal() {
        console.log("calculating...");
        let total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(total);
        console.log("total: " + total);
        console.log("total price: " + totalPrice);
    }

    useEffect(() => {
        console.log("Checkout loaded, calling receiveCart");
        receiveCart();
    }, []);

    useEffect(() => {
        console.log("Cart items changed, recalculating total");
        calcTotal();
    }, [cartItems]);

    function prompt() {
        //logic to prompt user for VIP register/login
        //if logged in already, do not prompt, skip
        if (!userLoggedIn) {
            payment();
        }
        else {
            //hide checkout window
            //i dont know a better way to do this right now
            setIsVisible(false);
        }
    }

    function payment() {
        //logic to process VIP/card payment
    }

    function vipLogin(){
        //logic to send to the vip login screen then continue the payment
    }

    return (
        <>
            <div className={`checkout ${isVisible ? '' : 'hidden'}`}>
                <h1 className='checkout__item__title'>Checkout</h1>
                <ul className='checkout__item__list'>
                    {cartItems.map((item, index) => (
                        <li key={index} className='checkout__item'>{item.name}: ${item.price.toFixed(2)}</li>
                    ))}
                </ul>
                <p className='checkout__final__price'>Total price: ${totalPrice.toFixed(2)}</p>
                <button onClick={handleCheckout} className='buttons'>Return to main</button>
                <button className='buttons' onClick={prompt}>Proceed to Payment</button>
            </div>
            <div className={`vip ${!isVisible ? '' : 'hidden'}`}>
                <h1>You're not a VIP Member!</h1>
                <p>VIP Members gain points on every purchase!</p>
                <p>Use points to purchase items and receive discounts!</p>
                <button className='buttons' onClick={payment}>Continue as Guest</button>
                <button className='buttons' onClick={vipLogin}>Register!</button>
            </div>
        </>
    );
}

export default Checkout;
