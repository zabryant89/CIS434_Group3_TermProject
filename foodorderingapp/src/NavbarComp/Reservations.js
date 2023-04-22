
import React, { useState } from 'react';
import './Style/Reservation.css'

export default function Reservations(){


const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [table, setTable] = useState(-1)

const [show, setShow] = useState(true); 


// eslint-disable-next-line
const [tableD, setTableD] = useState((localStorage.getItem("Table-data") ? JSON.parse(localStorage.getItem("Table-data")) : -1));


const intialTableState = [
  {id: 0, selected: false, display:"Table"},
  {id: 1, selected: false, display: "Table"},
  {id: 2, selected: false, display: "Table"},
  {id: 3, selected: false, display: "Table"},
  {id: 4, selected: false, display: "Table"},
  {id: 5, selected: false, display: "Table"},
  {id: 6, selected: false, display: "Table"},
  {id: 7, selected: false, display: "Table"}
  
];


  const handleSubmit = () => {

  const res = [{
            Rname: name,
            Rphone: phone,
            Rtable: Number(table),
    }] ; 
  
   
   localStorage.setItem(phone, JSON.stringify(res)); //OPTIONAL: store reservation in local storage


if(tableD !== -1){
      const newTableData = tableD.map(t => 
        {
          if(t.id === (table - 1) ){
            return{
              ...t,
              selected: true,
              display: "selectedTable"
            };
       }else{
        return{
          ...t
        };
       }
      }
      );

     localStorage.setItem("Table-data", JSON.stringify(newTableData));
    }else
    {
  const createTableData = intialTableState.map(n => {
    if(n.id === (table - 1)){
      return{
        ...n,
        selected: true,
        display: "selectedTable"
      };
    }
      else{
        return{
          ...n
        };
      }
    }
  
  ); 
    
  localStorage.setItem("Table-data", JSON.stringify(createTableData));
    
  }
     

    setShow(false);

    }
    


  let tableData = (localStorage.getItem("Table-data")) ? JSON.parse(localStorage.getItem("Table-data")).map( a => a.selected ) : true ; 


  const handleAnother = ()=>{
    setShow(true);
    setName('');
    setPhone('');
    setTable(0);

  }

    return(
    <div>
      {show && (<div className="reservation-form">
      <h1>Would you like to make a reservation?</h1>
      <h1>Please enter the following</h1>
        <div className="form-group">
          <label>Name:   </label>
          <input
            type="text"
            placeholder='Larry Lobster'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone #:  </label>
          <input
            type="text"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder='123-456-7890'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Table:  </label>
          <select
            value={table}
            onChange={(e) => setTable(e.target.value)}
            required = {true}
          >
            <option value = "0">Select a Table</option>
            <option value="1"  disabled = {tableData[0]}>Table 1</option>
            <option value="2"  disabled = {tableData[1]}>Table 2 </option>
            <option value="3" disabled = {tableData[2]}>Table 3</option>
            <option value="4" disabled = {tableData[3]}>Table 4</option>
            <option value="5" disabled = {tableData[4]}>Table 5</option>
            <option value="6" disabled = {tableData[5]}>Table 6</option>
            <option value="7" disabled = {tableData[6]}>Table 7</option>
            <option value="8" disabled = {tableData[7]}>Table 8</option>
          </select>
        </div>
        <button type="submit" onClick={() =>handleSubmit()}>Make Reservation</button>
      </div> )}
      {!show && (
        <div className="resApprovalMessage"> 

       <h1>Thank you for your reservation {name}! </h1>

       <h1>Your estimated wait time is 20 minutes</h1>

       <h1>We will call you at {phone} {(table === -1 || table === 0) ? "when we are ready. ": "when Table " + table +" is ready."} </h1>

        <button onClick={handleAnother}>Make another reservation</button>

        </div>
      )}



    </div>
  );
    
}




