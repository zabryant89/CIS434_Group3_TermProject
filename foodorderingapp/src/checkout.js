// All console.log statements will be replaced once it's pushed to main

class User{
    constructor(username,password, points){
        this.username = username;
        this.password = password;
        this.points = points;
    }
}

// List of all accounts
const userList = [];
// List of the currently logged in user
var currentUser;

function signUp(user,password){
    // Goes through the entire array to check for same username
    for (i= 0; i<=(userList.length-1);i++){
        // Doesn't allow username if it already exists
        if (userList[i].username == user){
            return console.log("Username already taken!");
        }
    }
    // If username isn't taken, creates an account for the user
    userList.push(new User(user, password, 500));
    return console.log("User " +user+ "'s account was created!");
}

var loggedIn = false;

function logIn(user,pass){
    // Goes through the entire array
    for (i= 0; i<=(userList.length-1);i++){
        // First checks if the user ID is in the array
        // Then checks if the password matches the given user
        if ((userList[i].username == user) && (userList[i].password == pass)){
            console.log("User: " +user+ " Logged in!");
            // Will now show this user's information
            currentUser = i;
            loggedIn = true;
            // Replace with code to view and use points in checkout
            return 0;
        }
    }
    // Informs the user of an incorrect input
    return console.log("Invalid Username/Password!");     
}


// $1 spent is equal to 10 points
// 100 points are equal to $1 off
// User chooses how many points they would like to spend
function spendPoints(pts) {
    if (userList[currentUser].points < pts){
        console.log("You cannot use more than your total amount of points!");
        return;
    }
    else {
        userList[currentUser].points -= pts;
        totalPrice -= pts * .01;
        console.log(userList[currentUser].points+ " Points Remaining");
        return console.log("$" +totalPrice+ " is the remaining price");
    }
}

// Points are calculated before taxes and after discounts/points are added
function obtainPoints() {
    if (totalPrice > 0){
        var earnedPoints = totalPrice * 10;
        userList[currentUser].points += earnedPoints;
        console.log(earnedPoints+ " Points Earned!");
        return console.log("You now have " +userList[currentUser].points+ " Total Points!");
    }         
}
// test values 
var totalPrice = 60.00;

signUp(1114,"password1");
logIn(1114,"password1");
signUp(1114,"password1");
// Test for incorrect value
spendPoints(600);
// Test for correct value
spendPoints(300);
obtainPoints();