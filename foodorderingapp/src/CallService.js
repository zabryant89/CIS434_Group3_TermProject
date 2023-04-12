import {useState} from "react"

export default function CallSerive(){

    const [serivce, setService] = useState(false);

   const handleService = (event) =>{
    setService(event.target.value);
    setService(true); 
   }

    return(
        <div className="CallService">
        <h1>You have requsted service.</h1>
        <h2>A member of our staff will be with you shortly</h2>
        <button type="submit" className="CancelService" onClick={handleService}>Cancel Request</button>
        </div>
    );

    
}