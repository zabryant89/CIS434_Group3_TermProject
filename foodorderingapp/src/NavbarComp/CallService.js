import {useState} from "react"

export default function CallService(){

    const [serivce, setService] = useState(false);

   const handleService = (event) =>{
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