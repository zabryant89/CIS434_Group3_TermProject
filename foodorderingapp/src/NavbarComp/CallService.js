import {useState} from "react"
import "./Style/Service.css"

export default function CallService(){

    let intialServiceDisplay = [
        {id: 1, shown: true},
        {id: 2, shown: false},
        {id: 3, shown: false}
    ]

    const [service, setService] = useState(intialServiceDisplay);

   function handleServiceDisplay(val){
        
    const determineShow = service.map(shows => 
        {
            if(shows.id === (( (val) % 3 ) + 1 ))
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
          
        //(val !== 2) ? alert('You have requested service!') : alert('You have cancelled service request')
            setService(determineShow);
   }

   let showAr = service.map(     (s) => s.shown  );
  

    return(
        <div className="CallService">
        <div className="CalledService">
          {showAr[0] &&  (<div>
        <h1>Would you like to call service?</h1>
        <button type="submit" className="CalledService" onClick={() => handleServiceDisplay(1)}>Call Service</button>
        </div>
           ) }
        </div>
            <div className='RequestedService'>
            {showAr[1] &&    (<div>
        <h1>You have requsted service.</h1>
        <h1>A member of our staff will be with you shortly</h1>
        <button type="submit" className="CancelService" onClick={() => handleServiceDisplay(2)}>Cancel Request</button>
            </div>
            )}
        </div>
            <div className="CanceledService">
                {showAr[2] && (<div>
        <h1>You have cancelled your request for summoning service</h1>
        <h1>Would you like to call service again?</h1>
        <button type="submit" className="CanceledService" onClick={() =>handleServiceDisplay(3)}>Call Service Again</button>
        </div>
                )}
        </div>
        </div>
    );

    
}