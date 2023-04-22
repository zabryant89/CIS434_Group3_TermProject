import './Style/VIP.css'
export default function VIP(){


    return(
   <div className='signInBox'>
    <h1 align = "center"><b>Username</b><input className = "signInInfo" id ="username" minlength = "5" maxlength = "10"></input></h1>
    <h1 align = "center"><b>Password</b><input className = "signInInfo" id ="password" type = "password" minlength = "8" maxlength = "20"></input></h1>
    <button type = "submit" className = "signInButton">Sign In</button>
   </div>
    );

}