import {useState} from "react"


export default function Table(){

    const [table, setTableSelection] = useState(false);

    const handleTableSelection = (event) =>{
     setTableSelection(event.target.value);
     setTableSelection(true); 
    } 


    return(
        <div className="Table">
            <p>I am a table</p>
            <div className="allTables">
            <button type="button" className="Table" onClick={handleTableSelection}>Table 1</button>
            <button type="button" className="Table" onClick={handleTableSelection}>Table 2</button>
            <button type="button" className="Table" onClick={handleTableSelection}>Table 3</button>
            <button type="button" className="Table" onClick={handleTableSelection}>Table 4</button>
            <button type="button" className="Table" onClick={handleTableSelection}>Table 5</button>
            <button type="button" className="Table" onClick={handleTableSelection}>Table 6</button>
            <button type="button" className="Table" onClick={handleTableSelection}>Table 7</button>
            <button type="button" className="Table" onClick={handleTableSelection}>Table 8</button>
            </div>
        </div>
    );
}
