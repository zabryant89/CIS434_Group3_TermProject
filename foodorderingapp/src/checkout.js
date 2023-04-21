//Zachary Bryant
//USE: handle checking out of items.  For now it just displays a very simple UI of how it would calculate items.
//NEED: functionality for entering a card or using VIP points.
//      -hard code use cases: card # 1234 always has enough funds, card # 6789 always declined
//      -legitimate UI
import React, { useState, useEffect } from 'react';
import './checkout.css';

function Checkout({ setCheckoutFalse, setCheckoutTrue }) {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0.0);
    const [returning, setReturning] = useState(true); //if not returning, we are here!
    const [isVisible, setIsVisible] = useState(true);
    const [userLoggedIn, setUserLoggedIn] = useState(true);
    const [paying, setPaying] = useState(false);
    const [cardNumber, setCardNumber] = useState('');


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
        showCheckout();
    }, [cartItems]); //dependency on cartItems, any changes to cartItems re-apply this useEffect

    function prompt() {
        //logic to prompt user for VIP register/login
        //if logged in already, do not prompt, skip
        if (!userLoggedIn) {
            paymentScreen();
        }
        else {
            //hide checkout window
            //i dont know a better way to do this right now
            setIsVisible(false);
        }
    }

    function paymentScreen() {
        //logic to process VIP/card payment
        //user logged in, can use VIP points
        //user not logged in, card only
        if (userLoggedIn) {
            alert("Thank you for being a member and for your payment!");
            setPaying(true);
        }
        else {
            alert("Thank you for your payment!");
        }
        setIsVisible(false);
    }

    function pay() {
        //check the val for a proper value:
        var val = document.getElementById('cardNumber').value;
        if (val.trim() === '') {
            alert("Please enter a card number");
            return;
        }

        //handle the payment
        if (val == 1234) {
            alert("Payment success!");
            hideCheckout();
        }
        else if (val === 6789) {
            alert("Payment failed, please try again!");
        }
        else {
            alert("Error: Please enter a proper card number!");
        }
    }

    function vipLogin() {
        //logic to send to the vip login screen then continue the payment
        alert("Need to call the login for VIP members here!")
    }

    function hideCheckout() {
        setReturning(true);
        setPaying(false);
    }

    function showCheckout() {
        setReturning(false);
    }

    return (
        <>
            <div className={`checkout ${(isVisible && !returning) ? '' : 'hidden'}`}>
                <h1 className='checkout__item__title'>Checkout</h1>
                <ul className='checkout__item__list'>
                    {cartItems.map((item, index) => (
                        <li key={index} className='checkout__item'>{item.name}: ${item.price.toFixed(2)}</li>
                    ))}
                </ul>
                <p className='checkout__final__price'>Total price: ${totalPrice.toFixed(2)}</p>
                <button onClick={() => { setCheckoutFalse(); hideCheckout(); }} className='buttons'>Return to order</button>
                <button className='buttons' onClick={prompt}>Proceed to Payment</button>
            </div>
            <div className={`vip ${(!isVisible && !returning) ? '' : 'hidden'}`}>
                <h1>You're not a VIP Member!</h1>
                <p>VIP Members gain points on every purchase!</p>
                <p>Use points to purchase items and receive discounts!</p>
                <button className='buttons' onClick={paymentScreen}>Continue as Guest</button>
                <button className='buttons' onClick={vipLogin}>Register!</button>
            </div>
            <div className={`payment ${(paying && userLoggedIn && !returning) ? '' : 'hidden'}`}>
                <h1>Payment</h1>
                <p>Points: ---</p>
                <form onSubmit={() => { setCheckoutFalse(); hideCheckout(); }}>
                    <p>
                        <label htmlFor='cardNumber'>Enter your card number</label>
                        <input type='number' id='cardNumber' />
                    </p>
                    <button className='buttons' type='button' onClick={() => { setCheckoutFalse(); hideCheckout(); }}>Return to order</button>
                    <button className='buttons' type='button' onClick={pay}>Pay Now</button>
                </form>
                {/* <p>Card number: <input type='number' id='cardNumber'></input></p>
                <label for='cardNumber'>Enter your card number</label>
                <button className='buttons' onSubmit={() => {setCheckoutFalse(); hideCheckout();}}>Return to order</button>
                <button className='buttons' onClick={pay()}>Pay Now</button> */}
            </div>
        </>
    );
}

export default Checkout;
