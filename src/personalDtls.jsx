import { useState } from "react";
import './details.css'

export default function PersonalDlts({details, setDetails}){    

    return(
        <>
        <div className="input-section">
            <h2>Personal Details</h2>
            <Feild id="name" label="Full name" setDetails={setDetails} details={details} />
            <Feild id="email" label="Email" setDetails={setDetails}  details={details}/>
            <Feild id="phone" label="Phone Number" setDetails={setDetails}  details={details}/>
            <Feild id="address" label="Address" setDetails={setDetails}  details={details}/>
        </div>
        </>
    )

}

function Feild({id,label, details, setDetails}){
    return (
    <div className="feild">
        <label htmlFor={id}>{label} :</label>
        <input id={id}
            type="text" 
            placeholder={"Enter "+label} 
            onChange={e=>{
                const newState = {...details};
                newState[id] = e.target.value;
                setDetails(newState);
            } 
        }/>
    </div>
    )
}
