// All console.log statements will be replaced once it's pushed to main
class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
}

//test values
const userList = [];
userList.push(new User("1112", "password1"));
userList.push(new User("1113", "password2"));
console.log(userList[0].username);

function signUp(){
    //When clicked

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