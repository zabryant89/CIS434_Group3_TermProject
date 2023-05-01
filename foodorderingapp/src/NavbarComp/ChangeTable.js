import {useState} from "react"
import './Style/Table.css'

export default function Table(){

    let intialTableState = [
        {id: 0, selected: false, display:"Table"},
        {id: 1, selected: false, display: "Table"},
        {id: 2, selected: false, display: "Table"},
        {id: 3, selected: false, display: "Table"},
        {id: 4, selected: false, display: "Table"},
        {id: 5, selected: false, display: "Table"},
        {id: 6, selected: false, display: "Table"},
        {id: 7, selected: false, display: "Table"}
        
    ]

    

    function createIntialTableState(){
        //localStorage.clear(); //debugging: just used to reset to initial state!
        if(localStorage.getItem("Table-data")){
            return JSON.parse(localStorage.getItem("Table-data"));
        }else{
           
            return intialTableState;
        }       
        
    }


    const [table, setTableSelection] = useState(createIntialTableState);
    const [tableMessage, setTableMessage] = useState('');

    const handleTableSelection = (val) =>{
        const determineShow = table.map(shows => 
            {
                if(shows.id === val)
                {
                   
               return {
                   ...shows,
                   selected: true,
                   display: "selectedTable"
               };
               } else{
                return {
                 ...shows
                };
            }
         
           });

      
                setTableSelection(determineShow);

               setTableMessage('You have selected Table ' + (val + 1))
                
                localStorage.setItem("Table-data", JSON.stringify(determineShow));

       

    }

let tableDis = table.map(
    (d => d.display)
  );

  
let buttonDis = table.map(
  b => b.selected
);

const handleMouseEnter = (val) => {
 
    if(table[val-1].selected){
        setTableMessage('Table ' + val + ' is unavaliable');
    }else{
        setTableMessage('You are about to select Table ' + val);
    }
        
      
}

    return(
        <div className="Tables">
            <h1 className="table-text">Please click which table you would like</h1>
            <h1>{tableMessage}</h1>
            <div className="allTables">
            <div className="topLeftTables">
           <div onMouseEnter={() =>handleMouseEnter(1)}  ><button type="button" disabled ={buttonDis[0]} className= {tableDis[0]} onClick={() =>handleTableSelection(0)}>Table 1</button></div>
            <div onMouseEnter={() =>handleMouseEnter(2)}><button type="button" disabled = {buttonDis[1]} className= {tableDis[1]} onClick={() => handleTableSelection(1)}>Table 2</button></div>
            </div>
            <div className="topRightTables">
            <div onMouseEnter={() =>handleMouseEnter(3)}><button type="button" disabled ={buttonDis[2]} className ={tableDis[2]} onClick={() => handleTableSelection(2)}>Table 3</button></div>
           <div onMouseEnter={() =>handleMouseEnter(4)}> <button type="button" disabled ={buttonDis[3]} className ={tableDis[3]} onClick={() => handleTableSelection(3)}>Table 4</button> </div>
           </div>
            <div className="bottomTables">
           <div onMouseEnter={()=>handleMouseEnter(5)}className="bt"><button type="button" disabled ={buttonDis[4]} className ={tableDis[4]} onClick={() => handleTableSelection(4)}>Table 5</button></div>
            <div onMouseEnter={()=>handleMouseEnter(6)}className="bt"><button type="button" disabled ={buttonDis[5]} className ={tableDis[5]} onClick={() => handleTableSelection(5)}>Table 6</button></div>
            <div onMouseEnter={()=>handleMouseEnter(7)}className="bt"><button type="button" disabled ={buttonDis[6]} className= {tableDis[6]} onClick={() => handleTableSelection(6)}>Table 7</button></div>
            <div onMouseEnter={()=>handleMouseEnter(8)} className="bt"><button type="button" disabled ={buttonDis[7]} className ={tableDis[7]} onClick={() => handleTableSelection(7)}>Table 8</button></div>
            </div>
            </div>
            
        </div>
       
    );
}
