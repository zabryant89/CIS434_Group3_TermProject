import {useState} from "react"
import './Style/Table.css'

export default function Table(){

    const [table, setTableSelection] = useState(false);
    const[value, setValue] = useState("Table 1");

    const handleTableSelection = (event) =>{
     setTableSelection(event.target.value);
     setTableSelection(true); 
    } 


    return(
        <div className="Tables">
            <h1 className="table-text">Please select which table you would like</h1>
            <div className="allTables">
            <div className="topLeftTables">
           <div><button type="button" className="Table" onClick={handleTableSelection}>{value}</button></div>
            <div><button type="button" className="Table" onClick={handleTableSelection}>Table 2</button></div>
            </div>
            <div className="topRightTables">
            <div><button type="button" className="Table" onClick={handleTableSelection}>Table 3</button></div>
           <div> <button type="button" className="Table" onClick={handleTableSelection}>Table 4</button> </div>
           </div>
            <div className="bottomTables">
           <div className="bt"><button type="button" className="Table" onClick={handleTableSelection}>Table 5</button></div>
            <div className="bt"><button type="button" className="Table" onClick={handleTableSelection}>Table 6</button></div>
            <div className="bt"><button type="button" className="Table" onClick={handleTableSelection}>Table 7</button></div>
            <div className="bt"><button type="button" className="Table" onClick={handleTableSelection}>Table 8</button></div>
            </div>
            </div>
        </div>
       
    );
}
