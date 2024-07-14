import { useState } from "react";
import './styles/details.css'
import { Feild } from "./utils";

export default function PersonalDlts({details, setDetails}){    

    function setCustomDetail(val, id = ""){
        const newState = {...details};
        newState[id] = val;
        setDetails(newState);
    }

    return(
        <>
        <div className="input-section">
            <h2>Personal Details</h2>
            <Feild id="name" label="Full name" onChange={setCustomDetail} curVal={details.name} />
            <Feild id="email" label="Email" onChange={setCustomDetail}  curVal={details.email}/>
            <Feild id="phone" label="Phone Number" onChange={setCustomDetail}  curVal={details.phone}/>
            <Feild id="address" label="Address" onChange={setCustomDetail}  curVal={details.address}/>
        </div>
        </>
    )

}


