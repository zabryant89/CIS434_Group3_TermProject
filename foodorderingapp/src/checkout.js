//Zachary Bryant
//USE: handle checking out of items.  For now it just displays a very simple UI of how it would calculate items.
//NEED: functionality for entering a card or using VIP points.
//      -hard code use cases: card # 1234 always has enough funds, card # 6789 always declined
//      -legitimate UI
import React, { useState, useEffect } from 'react';

function Checkout() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0.0);

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

    return (
        <div>
            <h1>Checkout</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.name}: ${item.price.toFixed(2)}</li>
                ))}
            </ul>
            <p>Total price: ${totalPrice.toFixed(2)}</p>
        </div>
    );
}

export default Checkout;
