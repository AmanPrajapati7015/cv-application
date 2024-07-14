import { useState } from "react"
import {Feild} from '../utils';
import { v4 as uuid } from 'uuid';

export default function EducationForm({prev,setShow, setState}){
    const [school, setSchool] = useState(prev.school );
    const [degree, setDegree] = useState(prev.degree);
    const [startDate, setStartDate] = useState(prev.startDate);
    const [endDate, setEndDate] = useState(prev.endDate);
    const [location, setLocation] = useState(prev.location);

    function handleDelete(id){
        setState(educations=>{
            return  educations.filter(edu=>edu.id !== id);
        })
        setShow("list");
    }

    function handleSave(id){
        //new education
        const updatedEducation = {school,degree,startDate,endDate,location};
        if(id==undefined){
            updatedEducation.id = uuid();
            setState(educations=> ([...educations, updatedEducation]))
        }
        //edit education
        else{
            setState(education=>{
                return education.map(edu=>{
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
            <Feild id="school" label="School" curVal={school} onChange={setSchool}/>
            <Feild id="degree" label="Degree"  curVal={degree} onChange={setDegree}/>
            <div className="field-row">
                <Feild id="start-date" label="Start Date" curVal={startDate} onChange={setStartDate}/>
                <Feild id="end-date" label="End Date" curVal={endDate} onChange={setEndDate}/>
            </div>
            <Feild id="location" label="Location" curVal={location} onChange={setLocation}/>
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