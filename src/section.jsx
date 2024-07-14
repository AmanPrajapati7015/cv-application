import { useState } from "react"
import ExpericeForm from "./sectionForms/experienceForm";
import EducationForm from "./sectionForms/educationForm";
import './styles/education.css'

const sectionDetails = {
    experience : {company:"",position:"",startDate:"",endDate:"",location:"", descirption:"", head:"company", form : ExpericeForm},
    education  : {school:"",degree:"",startDate:"",endDate:"",location:"", head:"school" , form:EducationForm},
}


export default function Section({state,setState,section}){
    const [expanded, setExpanded] = useState(false);

    return (
        <>
        <div className="education" >
            <div className="row"
              onClick={()=>setExpanded(!expanded)}
              style={{borderRadius: (expanded?"20px 20px 0 0" : "20px")}}
            >
                <img className="edu" src={section+".svg"} alt="" />
                <h2>{section[0].toUpperCase()+section.slice(1)}</h2>
                <img src={expanded?"less.svg":"more.svg"} alt="" />
            </div>
            
            {expanded && 
                <OpenContainer state={state} setState={setState} section={section}/>
            }

        </div>
        </>
    )
}



function OpenContainer({state,setState, section}){
    // state to control what to show 
    // "list"|"form"
    const [show, setShow] = useState("list"); 
    //state to store section[i][Detail] that will be displayed in next reder of `Form`
    const [prev, setPrev] = useState(sectionDetails[section]);

    const Form = sectionDetails[section].form

    return (
        (show=="list") ?
        <SectionList state={state} setShow={setShow} setPrev={setPrev} section={section}/>
        :
        <Form prev={prev} setShow={setShow} setState={setState}/>
    )

}


function SectionList({state,setShow, setPrev,section}){
    const openExperienceForm = (id) =>()=>{
        const detail = state.find((det)=>det.id==id);
        setShow("form");
        setPrev(detail);
    }

    function openNewExperienceForm(){
        setShow("form");
        setPrev(sectionDetails[section]);
    }

    return (
        <>
            {state.map(det=>{
                return ( 
                <div key={det.id} className="row" onClick={openExperienceForm(det.id)}>
                    <h3>{det[sectionDetails[section].head]}</h3>
                </div>)
            })}

            <div className="row addmore" key="addmore">
                <button id="addEdu" onClick={()=>openNewExperienceForm()}>+ {section[0].toUpperCase()+section.slice(1)}</button>
            </div>
        </>
    )

}

