import { useState } from "react"
import {Feild} from '../utils';
import { v4 as uuid } from 'uuid';

export default function ExpericeForm({prev,setShow, setState}){
    const [company, setCompany] = useState(prev.company);
    const [position, setPosition] = useState(prev.position);
    const [startDate, setStartDate] = useState(prev.startDate);
    const [endDate, setEndDate] = useState(prev.endDate);
    const [location, setLocation] = useState(prev.location);
    const [descirption, setDescirption] = useState(prev.descirption);


    function handleDelete(id){
        setState(experiences=>{
            return  experiences.filter(exp=>exp.id !== id);
        })
        setShow("list");
    }

    function handleSave(id){
        //new experience
        const updatedEducation = {company,position,startDate,endDate,location,descirption};
        if(id==undefined){
            updatedEducation.id = uuid();
            setState(experiences=> ([...experiences, updatedEducation]))
        }
        //edit experience
        else{
            setState(experience=>{
                return experience.map(edu=>{
                    if(edu.id === id) return {...updatedEducation, id};
                    else return edu;
                })
            })
        }
        setShow("list");
    }

    return(
        <>
        <div className="education-form">
            <Feild id="company" label="Company Name" curVal={company} onChange={setCompany}/>
            <Feild id="position" label="Position Title"  curVal={position} onChange={setPosition}/>
            <div className="field-row">
                <Feild id="start-date" label="Start Date" curVal={startDate} onChange={setStartDate}/>
                <Feild id="end-date" label="End Date" curVal={endDate} onChange={setEndDate}/>
            </div>
            <Feild id="location" label="Location" curVal={location} onChange={setLocation}/>
            <div className="feild">
                <label htmlFor='desc'>Description :</label>
                <textarea id='desc'
                    type="text" 
                    rows="3"
                    placeholder={"Enter Description"} 
                    value={descirption}
                    onChange={e=>setDescirption(e.target.value)} />
            </div>

            <div className="btns">
                <button onClick={()=>handleDelete(prev.id)}>Delete</button>
                <div>
                    <button onClick={()=>setShow("list")} >Cancel</button>
                    <button onClick={()=>handleSave(prev.id)} id="save">Save</button>
                </div>
            </div>
        </div>
        </>
    )
}