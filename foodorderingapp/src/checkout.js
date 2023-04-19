// All console.log statements will be replaced once it's pushed to main

class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
}

const userList = [];

//test values for users

userList.push(new User("1112", "password1"));
userList.push(new User("1113", "password2"));
console.log(userList[0].username);
console.log(userList[1].password);

function signUp(){


}

function logIn(inputID,passID){
    // Goes through the entire array
    for (i= 0; i<(userList.length-1);i++){
        // First checks if the user ID is in the array
        if (userList.username.includes(inputID, i)){
            // Then checks if the password matches the given user
            if (userList.password[i] = passID){

            }
        }

    }        
}


// test values 
// $1 spent is equal to 10 points
// 100 points are equal to $1 off

var totalPrice = 60.00;
var totalPoints = 2000;
var selectedPoints = 1000;

function spendPoints() {
    if (totalPoints < selectedPoints){
        console.log("You cannot use more than your total amount of points!");
        return;
    }
    else {
        totalPoints -= selectedPoints;
        totalPrice -= selectedPoints * .01;
        console.log(totalPoints+ " Points Remaining");
        console.log("$" +totalPrice+ " is the remaining price");
        return totalPoints,totalPrice;
    }
}
spendPoints();

//test values pt 2
totalPrice = 30.00;
totalPoints = 1000;

// Points are calculated before taxes and after discounts/points are added
function obtainPoints() {
    if (totalPrice > 0){
        totalPoints += totalPrice * 10;
        console.log(totalPoints+ " Points Earned!");
        return totalPoints;
    }         
}
obtainPoints();