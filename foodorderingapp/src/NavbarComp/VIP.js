import './Style/VIP.css'
import { useState, useEffect } from 'react';

var totalPoints = 0;

export default function VIP() {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    //total points moved from here to global, needed for export
    const [loggedIn, setLoggedIn] = useState(
        JSON.parse(localStorage.getItem('log')) ?? false);
    const [userList, setUserList] = useState(
        JSON.parse(localStorage.getItem('users')) ?? []);
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('curr')) ?? 0);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(userList));
    }, [userList]);

    // Moves to signinpage and always updates with currentUser values
    useEffect(() => {
        localStorage.setItem('log', JSON.stringify(loggedIn));
        if (loggedIn) {
            document.getElementById("currUser").innerHTML = userList[currentUser].username;
            document.getElementById("currPoints").innerHTML = userList[currentUser].points;
        }
    }, [loggedIn]);

    useEffect(() => {
        localStorage.setItem('curr', currentUser);
    }, [currentUser]);

    // Updates list of all accounts
    const updateList = () => {
        setUserList([...userList, {
            username: userName,
            password: passWord,
            points: totalPoints
        }]);
    }

    function setPoints(val){
        totalPoints = val;
    }

    function signUp(e) {
        e.preventDefault();
        // Goes through the entire array to check for same username
        for (var i = 0; i <= (userList.length - 1); i++) {
            // Doesn't allow username if it already exists
            if (userList[i].username == userName) {
                setUserName('');
                setPassWord('');
                return alert("Username already taken!");
            }
        }
        // Checks username+password length
        if (userName.length < 5) {
            return alert("The username needs to be between 5-10 characters!");
        }
        if (passWord.length < 8) {
            return alert("The password needs to be between 8-20 characters!");
        }
        // Sets the user's initial points to 500
        setPoints(500);
        // If username isn't taken, creates an account for the user        
        updateList(userName, passWord, totalPoints);
        alert("User " + userName + "'s account was created! 500 free points added!");
        return;
    }

    function logIn(e) {
        e.preventDefault();
        // Goes through the entire array
        for (var i = 0; i <= (userList.length - 1); i++) {
            // First checks if the user ID is in the array
            // Then checks if the password matches the given user
            if ((userList[i].username == userName) && (userList[i].password == passWord)) {
                alert("User: " + userName + " Logged in!");
                // Will now show this user's information
                setCurrentUser(i);
                // Hides login and shows to view and use points in checkout
                setLoggedIn(true);
                return setCurrentUser(i);
            }
        }
        // Informs the user of an incorrect input
        setUserName('');
        setPassWord('');
        return alert("Invalid Username/Password!");
    }

    function logOut(e) {
        e.preventDefault();
        setLoggedIn(false);
        setCurrentUser(0);
        alert("Successfully logged out!");
    }

    // $1 spent is equal to 10 points
    // 100 points are equal to $1 off
    // User chooses how many points they would like to spend
    function spendPoints(pts) {
        if (userList[currentUser].points < pts) {
            alert("You cannot use more than your total amount of points!");
            return;
        }
        else {
            userList[currentUser].points -= pts;
            totalPrice -= pts * .01;
            alert(userList[currentUser].points + " Points Remaining");
            return alert("$" + totalPrice + " is the remaining price");
        }
    }

    // Points are calculated before taxes and after discounts/points are added
    function obtainPoints() {
        if (totalPrice > 0) {
            var earnedPoints = totalPrice * 10;
            userList[currentUser].points += earnedPoints;
            alert(earnedPoints + " Points Earned!");
            return alert("You now have " + userList[currentUser].points + " Total Points!");
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

    return (
        <>
            <div id="signIn" className={`SigninBox ${(!loggedIn) ? '' : 'hidden'}`}>
                <h1 align="center"> <b>Username</b><input className="infoBox" id="userInput" maxLength="10" value={userName} onChange={e => setUserName(e.target.value)} /></h1>
                <h1 align="center"> <b>Password</b><input className="infoBox" id="passInput" type="password" required maxLength="20" value={passWord} onChange={e => setPassWord(e.target.value)} /></h1>
                <button type="submit" className="signinButton" onClick={(e) => { logIn(e); document.getElementById("userInput").value = ""; document.getElementById("passInput").value = ""; }}>Sign in</button>
                <button type="submit" className="signinButton" onClick={(e) => { signUp(e); }}>Sign Up</button>
            </div>
            <div id="Account" className={`AccountBox ${(loggedIn) ? '' : 'hidden'}`}>
                <h1 align="center">Account Information</h1>
                <h2 align="center">Username: </h2>
                <p id="currUser">User</p>
                <h2 align="center">Current Points: </h2>
                <p id="currPoints">0</p>
                <button type="submit" className="signinButton" onClick={(e) => { logOut(e); }}>Log Out</button>
            </div>
        </>
    );
}

export const points = totalPoints;