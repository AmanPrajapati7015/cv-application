import { useState } from "react";
import {Feild} from './utils';
import './details.css'

export default function PersonalDlts(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    
    console.table({name,email,phone,address});

    return(
        <>
        <div className="input-section">
            <h2>Personal Details</h2>
            <Feild id="name" label="Full name" onChange={setName}/>
            <Feild id="email" label="Email" onChange={setEmail}/>
            <Feild id="phone" label="Phone Number" onChange={setPhone}/>
            <Feild id="address" label="Address" onChange={setAddress}/>
        </div>
        </>
    )

}