//Zachary Bryant - Primary
//temporarily using test values

//global vars/consts
const cartItems = new Array;
const totalPrice = 0.00;

//test values
const menuItem = {
    name: nam,
    price: pric
};

function MenuItem(nam, pric){
    this.name = nam;
    this.price = pric;
}

var food1 = new MenuItem("steak", 20.00);
var food2 = new MenuItem("chicken", 12.12);
var food3 = new MenuItem("super food", 100.50);

//this function will receive a list/array of items from the cart when entering checkout
function receiveCart(){
    //logic to input the list into the global constant, use push method
    cartItems.push(food1);
    cartItems.push(food2);
    cartItems.push(food3);
}

//below will calculate the total price from the list of selections in the cart
function calcTotal(){
    //logic to cycle through each item, add its price to the total
    //for loop
    for (i = 0; i < cartItems.length; i++){
        totalPrice += cartItems[i].price;
    }

    console.log(totalPrice);
}

