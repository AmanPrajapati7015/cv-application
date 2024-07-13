import { useState } from "react"
import {Feild} from './utils';
import "./education.css"
import { v4 as uuid } from 'uuid';


export default function Education({educations,setEducations}){
    
    const [expanded, setExpanded] = useState(false);

    // console.table(educations);

    return (
        <>
        <div className="education" >
            <div className="row"
              onClick={()=>setExpanded(!expanded)}
              style={{borderRadius: (expanded?"20px 20px 0 0" : "20px")}}
            >
                <img className="edu" src="education.svg" alt="" />
                <h2> Education</h2>
                <img src={expanded?"less.svg":"more.svg"} alt="" />
            </div>
            
            {expanded && 
                <OpenContainer educations={educations} setEducations={setEducations}/>
            }

        </div>
        </>
    )
}


function OpenContainer({educations,setEducations}){
    // state to control what to show 
    // "education"|"education-form"
    const [show, setShow] = useState("education"); 
    //state to store eductation that will be displayed in next reder of `EducationForm`
    const [prev, setPrev] = useState({school:"",degree:"",startDate:"",endDate:"",location:""});


    return (
        (show=="education") ?
        <EducationList educations={educations} setShow={setShow} setPrev={setPrev}/>
        :
        <EducationForm prev={prev} setShow={setShow} setEducations={setEducations}/>
    )

}


function EducationList({educations,setShow, setPrev}){
    const openEducationForm = (id) =>()=>{
        const education = educations.find((edu)=>edu.id==id);
        setShow("education-form");
        setPrev(education);
    }

    function openNewEducationForm(){
        setShow("education-form");
        setPrev({school:"",degree:"",startDate:"",endDate:"",location:""});
    }

    return (
        <>
            {educations.map(edu=>{
                return (<div key={edu.id} className="row" onClick={openEducationForm(edu.id)}>
                    <h3>{edu.school}</h3>
                </div>)
            })}

            <div className="row addmore" key="addmore">
                <button id="addEdu" onClick={()=>openNewEducationForm("new")}>+ Education</button>
            </div>
        </>
    )

}



function EducationForm({prev,setShow, setEducations}){
    const [school, setSchool] = useState(prev.school );
    const [degree, setDegree] = useState(prev.degree);
    const [startDate, setStartDate] = useState(prev.startDate);
    const [endDate, setEndDate] = useState(prev.endDate);
    const [location, setLocation] = useState(prev.location);

    function handleDelete(id){
        setEducations(educations=>{
            return  educations.filter(edu=>edu.id !== id);
        })
        setShow("education");
    }

    function handleSave(id){
        //new education
        const updatedEducation = {school,degree,startDate,endDate,location};
        if(id==undefined){
            updatedEducation.id = uuid();
            setEducations(educations=> ([...educations, updatedEducation]))
        }
        //edit education
        else{
            setEducations(education=>{
                return education.map(edu=>{
                    if(edu.id === id) return {...updatedEducation, id};
                    else return edu;
                })
            })
        }
        setShow("education");
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
                    <button onClick={()=>setShow("education")} >Cancel</button>
                    <button onClick={()=>handleSave(prev.id)} id="save">Save</button>
                </div>
            </div>
        </div>
        </>
    )

}