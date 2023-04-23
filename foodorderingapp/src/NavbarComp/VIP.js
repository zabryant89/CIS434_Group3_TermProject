import './Style/VIP.css'
import { useState} from 'react';

export default function VIP(){
    const[userName, setUserName] = useState('');
    const[passWord, setPassWord] = useState('');
    const[loggedIn, setLoggedIn] = useState(false);

    class User{
        constructor(username,password, points){
            this.username = username;
            this.password = password;
            this.points = points;
        }
    }

    // List of all accounts
    var userList = [];

    function signUp(){
        // Goes through the entire array to check for same username
        for (var i= 0; i<=(userList.length-1);i++){
            // Doesn't allow username if it already exists
            if (userList[i].username == userName){
                return alert("Username already taken!");
            }
        }
        // If username isn't taken, creates an account for the user 
        if(userList != null){
            var user2 = new User(userName,passWord,500);
            userList.push(user2);
        } else {
            var user1 = new User(userName, passWord,500);
            userList.push(user1);
        }
        
        console.log(userList);     

        alert("User " +userName+ "'s account was created! 500 free points added!");
        return;
    }

    function logIn(){
        // Goes through the entire array
        for (var i= 0; i<=(userList.length-1);i++){
            // First checks if the user ID is in the array
            // Then checks if the password matches the given user
            if ((userList[i].username == userName) && (userList[i].password == passWord)){
                alert("User: " +userName+ " Logged in!");
                // Will now show this user's information
                currentUser = i;
                // Hides login and shows to view and use points in checkout
                setLoggedIn(true);
                document.getElementById("currUser").innerHTML = userList[currentUser].username;
                document.getElementById("currPoints").innerHTML = userList[currentUser].points;
                return;
            }
        }
        // Informs the user of an incorrect input
        return alert("Invalid Username/Password!");     
    }

    function logOut(){
        setLoggedIn(false);
        currentUser = null;
        alert("Successfully logged out!");
    }



    // The currently logged in user, used for calculating points earned/spent
    var currentUser;
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

    /*
    // Test for incorrect value
    spendPoints(600);
    // Test for correct value
    spendPoints(300);
    obtainPoints();
    */
    var user1 = new User("jovan", "password1",1500);
    var user2 = new User("jovan2", "password2",5200);
    var user3 = new User("jovan3", "password3",5300);
    userList.push(user1);
    userList.push(user2);
    userList.push(user3);

    return(
        <>
        <div id="signIn" className={`SigninBox ${(!loggedIn) ? '': 'hidden'}`}>
            <h1 align="center"> <b>Username</b><input className="infoBox" id="userInput" maxLength="10" value={userName} onChange={e => setUserName(e.target.value)}/></h1>
            <h1 align="center"> <b>Password</b><input className="infoBox" id="passInput" type="password" required minLength="8" maxLength="20" value={passWord} onChange={e => setPassWord(e.target.value)}/></h1>
            <button type="submit" className="signinButton" onClick={() => { logIn(); document.getElementById("userInput").value = ""; document.getElementById("passInput").value = ""; } }>Sign in</button>
            <button type="submit" className="signinButton" onClick={() => { signUp(); } }>Sign Up</button>
        </div>
        <div id ="Account" className={`AccountBox ${(loggedIn) ? '': 'hidden'}`}>
            <h1 align="center">Account Information</h1>
            <h2 align="center">Username: </h2>
            <p id = "currUser">User</p>
            <h2 align="center">Current Points: </h2>
            <p id = "currPoints">0</p>
            <button type="submit" className="signinButton" onClick={() => { logOut(); } }>Log Out</button>
        </div>
        </>
    );

}