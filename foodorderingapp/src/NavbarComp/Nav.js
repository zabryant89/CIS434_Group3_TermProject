import ChangeTable from './ChangeTable.js';
import CallService from './CallService.js';
import Reservations from './Reservations.js';
import Menu from './Menu.js';
import Order from './Order.js';
import VIP from './VIP.js'
import './Style/NavBar.css'

import { useState } from 'react';

export default function Nav(){

    let intialShow = [
        {id: 0, shown: false},
        {id: 1, shown: false},
        {id: 2, shown: false},
        {id: 3, shown: false},
        {id: 4, shown: false},
        {id: 5, shown: false},
       ]
                

    const [show, setShow] = useState(intialShow);


    function handleShowNavItem(val){
        const determineShow = show.map(shows => 
         {
             if(shows.id === val)
             {
                
            return {
                ...shows,
                shown: true,
            };
            }
        else{
                return {
                    ...shows,
                    shown: false,
                };
            }
        });
           

             setShow(determineShow);
    }

    

        let showAr = show.map(     (s) => s.shown  );

    return(
        <div className="navbar">
        <ul className="NavBarList">
        <li> <button className="buttonNavSpecial" onClick={()=>handleShowNavItem(0)} >Menu </button></li>
              <li><button className="buttonNav" onClick={()=>handleShowNavItem(1)}>Reservations </button></li>
                <li><button className="buttonNav" onClick={()=>handleShowNavItem(2)} >Change Table</button> </li>
              <li> <button className="buttonNav" onClick={()=>handleShowNavItem(3)} >Call Service </button> </li>
              <li><button className="buttonNav" onClick={()=>handleShowNavItem(4)} > Order </button></li>
       
               <li> <button className="buttonNavSpecial" onClick={()=>handleShowNavItem(5)} >Sign in </button></li>
     
    </ul>
    <div> {showAr[0] && (<Menu />)}</div>
    <div> {showAr[1] && (<Reservations />)}</div>
    <div> {showAr[2] && (<ChangeTable />)}</div>
    <div> {showAr[3] && (<CallService />)}</div>
 
    <div> {showAr[4] && (<Order />)}</div>
    <div> {showAr[5] && (<VIP />)}</div>
    
        </div>
    );
}
