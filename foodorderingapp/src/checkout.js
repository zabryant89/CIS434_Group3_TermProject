//Zachary Bryant - Primary
//temporarily using test values

import React, { useEffect, useState } from 'react';

//the list of cart items will be passed as a parameter here later
function Checkout() {
    //global vars/consts
    let cartItems = new Array;
    // let totalPrice = 0.00;
    // const [cartItems, setCartItems] = useState([]);
    let totalPrice = 0.00;

    class MenuItem {
        constructor(nam, pric) {
            this.name = nam;
            this.price = pric;
        }
    }

    //ensures the functions are called after Checkout() function is mounted
    useEffect(() => {
        receiveCart();
        //calcTotal();
    }, []);

    //test values
    const food1 = new MenuItem("steak", 20.00);
    const food2 = new MenuItem("chicken", 12.12);
    const food3 = new MenuItem("super food", 100.50);

    //this function will receive a list/array of items from the cart when entering checkout
    function receiveCart() {
        //logic to input the list into the global constant, use push method OR simply assign it to cartItems
        cartItems.push(food1);
        cartItems.push(food2);
        cartItems.push(food3);

        // const food1 = { name: "steak", price: 20.00 };
        // const food2 = { name: "chicken", price: 12.12 };
        // const food3 = { name: "super food", price: 100.50 };

        // setCartItems([food1, food2, food3]);

        calcTotal();

        //this functions similarly to a loop to properly sum the prices
        //note: using for loop with a state can have unintended consequences with the critical region
        // const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        // setTotalPrice(total);

        // console.log(totalPrice);

        for (let i = 0; i < cartItems.length; i++) {
            console.log(cartItems[i].name);
        }

        // console.log("total: " + total);
        console.log("totalPrice: " + totalPrice);
    }

    //below will calculate the total price from the list of selections in the cart
    function calcTotal() {
        //logic to cycle through each item, add its price to the total
        //for loop
        for (let i = 0; i < cartItems.length; i++) {
            totalPrice += cartItems[i].price;
            // setTotalPrice(totalPrice + cartItems[i].price);
        }

        console.log("totalPrice: " + totalPrice);
    }

    return (
        <div>
            <h1>Checkout</h1>
            <p>Total: {totalPrice}</p>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.name} - {item.price}</li>
                ))}
                <li>Total: {totalPrice}</li>
            </ul>
        </div>
    );
}

export default Checkout;