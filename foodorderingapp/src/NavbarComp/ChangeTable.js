import {useState} from "react"
import './Style/Table.css'

export default function Table(){

    let intialTableState = [
        {id: 0, selected: true, display:"selectedTable"},
        {id: 1, selected: false, display:  "Table"},
        {id: 2, selected: false, display: "Table"},
        {id: 3, selected: false, display: "Table"},
        {id: 4, selected: false, display: "Table"},
        {id: 5, selected: true, display: "Table"},
        {id: 6, selected: false, display: "selectedTable"},
        {id: 7, selected: false, display: "Table"}
        
    ]


    function createIntialTableState(){
        
        if(localStorage.getItem("Table-data")){
            return JSON.parse(localStorage.getItem("Table-data"))
        }else{
           
            return intialTableState;
        }       
        
    }


    const [table, setTableSelection] = useState(createIntialTableState);
    const [sitTable, setSitTable] = useState('')
  

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
             
                localStorage.setItem("Table-data", JSON.stringify(determineShow));
                setSitTable(val + 1);
       

    }

let tableDis = table.map(
    (d => d.display)
  );





    return(
        <div className="Tables">
            <h1 className="table-text">Please click which table you would like</h1>
            <h1>You have selected to sit at Table {sitTable}</h1>
            <div className="allTables">
            <div className="topLeftTables">
           <div><button type="button" className= {tableDis[0]} onClick={() =>handleTableSelection(0)}>Table 1</button></div>
            <div><button type="button" className= {tableDis[1]} onClick={() => handleTableSelection(1)}>Table 2</button></div>
            </div>
            <div className="topRightTables">
            <div><button type="button" className ={tableDis[2]} onClick={() => handleTableSelection(2)}>Table 3</button></div>
           <div> <button type="button" className ={tableDis[3]} onClick={() => handleTableSelection(3)}>Table 4</button> </div>
           </div>
            <div className="bottomTables">
           <div className="bt"><button type="button" className ={tableDis[4]} onClick={() => handleTableSelection(4)}>Table 5</button></div>
            <div className="bt"><button type="button" className ={tableDis[5]} onClick={() => handleTableSelection(5)}>Table 6</button></div>
            <div className="bt"><button type="button" className= {tableDis[6]} onClick={() => handleTableSelection(6)}>Table 7</button></div>
            <div className="bt"><button type="button" className ={tableDis[7]} onClick={() => handleTableSelection(7)}>Table 8</button></div>
            </div>
            </div>
            
        </div>
       
    );
}
