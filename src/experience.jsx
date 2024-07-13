import { useState } from "react"
import {Feild} from './utils';
import experiencesStatic from './experiences'
import { v4 as uuid } from 'uuid';


export default function Experience(){
    
    const [expanded, setExpanded] = useState(false);
    const [experiences,setExperiences] = useState(experiencesStatic);


    return (
        <>
        <div className="education" >
            <div className="row"
              onClick={()=>setExpanded(!expanded)}
              style={{borderRadius: (expanded?"20px 20px 0 0" : "20px")}}
            >
                <img className="edu" src="experience.svg" alt="" />
                <h2> Experience</h2>
                <img src={expanded?"less.svg":"more.svg"} alt="" />
            </div>
            
            {expanded && 
                <OpenContainer experiences={experiences} setExperiences={setExperiences}/>
            }

        </div>
        </>
    )
}


function OpenContainer({experiences,setExperiences}){
    // state to control what to show 
    // "experience"|"experience-form"
    const [show, setShow] = useState("experience"); 
    //state to store eductation that will be displayed in next reder of `EducationForm`
    const [prev, setPrev] = useState({company:"",position:"",startDate:"",endDate:"",location:"", descirption:""});

    return (
        (show=="experience") ?
        <ExpericeList experiences={experiences} setShow={setShow} setPrev={setPrev}/>
        :
        <ExpericeForm prev={prev} setShow={setShow} setExperiences={setExperiences}/>
    )

}


function ExpericeList({experiences,setShow, setPrev}){
    const openExperienceForm = (id) =>()=>{
        const experience = experiences.find((edu)=>edu.id==id);
        setShow("experience-form");
        setPrev(experience);
    }

    function openNewExperienceForm(){
        setShow("experience-form");
        setPrev({company:"",position:"",startDate:"",endDate:"",location:"", descirption:""});
    }

    return (
        <>
            {experiences.map(exp=>{
                return (<div key={exp.id} className="row" onClick={openExperienceForm(exp.id)}>
                    <h3>{exp.company}</h3>
                </div>)
            })}

            <div className="row addmore" key="addmore">
                <button id="addEdu" onClick={()=>openNewExperienceForm("new")}>+ Experience</button>
            </div>
        </>
    )

}

function ExpericeForm({prev,setShow, setExperiences}){
    const [company, setCompany] = useState(prev.company);
    const [position, setPosition] = useState(prev.position);
    const [startDate, setStartDate] = useState(prev.startDate);
    const [endDate, setEndDate] = useState(prev.endDate);
    const [location, setLocation] = useState(prev.location);
    const [descirption, setDescirption] = useState(prev.descirption);


    function handleDelete(id){
        setExperiences(experiences=>{
            return  experiences.filter(exp=>exp.id !== id);
        })
        setShow("experience");
    }

    function handleSave(id){
        //new experience
        const updatedEducation = {company,position,startDate,endDate,location,descirption};
        if(id==undefined){
            updatedEducation.id = uuid();
            setExperiences(experiences=> ([...experiences, updatedEducation]))
        }
        //edit experience
        else{
            setExperiences(experience=>{
                return experience.map(edu=>{
                    if(edu.id === id) return {...updatedEducation, id};
                    else return edu;
                })
            })
        }
        setShow("experience");
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
                    <button onClick={()=>setShow("experience")} >Cancel</button>
                    <button onClick={()=>handleSave(prev.id)} id="save">Save</button>
                </div>
            </div>
        </div>
        </>
    )

}