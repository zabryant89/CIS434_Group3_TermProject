import ChangeTable from './ChangeTable.js';
import CallService from './CallService.js';
import Reservations from './Reservations.js';
import Deals from './Deals.js';
import Order from './Order.js';
import './Style/NavBar.css'

import { useState } from 'react';

export default function Nav(){

    let intialShow = [
        {id: 0, shown: false},
        {id: 1, shown: false},
        {id: 2, shown: false},
        {id: 3, shown: false},
        {id: 4, shown: false},
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
              <li><button type="button" onClick={()=>handleShowNavItem(0)}>Reservations </button></li>
                <li><button type="button" onClick={()=>handleShowNavItem(1)} >Change Table</button> </li>
              <li> <button type="button" onClick={()=>handleShowNavItem(2)} >Call Service </button> </li>
              <li><button type="button" onClick={()=>handleShowNavItem(3)} > Deals </button></li>
               <li> <button type="button" onClick={()=>handleShowNavItem(4)} >Order </button></li>
     
    </ul>

    <div> {showAr[0] && (<Reservations />)}</div>
    <div> {showAr[1] && (<ChangeTable />)}</div>
    <div> {showAr[2] && (<CallService />)}</div>
    <div> {showAr[3] && (<Deals />)}</div>
    <div> {showAr[4] && (<Order />)}</div>
        </div>
    );
}