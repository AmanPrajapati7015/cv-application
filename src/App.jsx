import { useState } from 'react'
import PersonalDlts from './personalDtls'
import Section from './section'
import Resume from './resume'

import {educationsStatic, experiencesStatic} from './utils'



function App() {
  const [details, setDetails] = useState({name:"Aman",email:"aman.prajapati7022@gmail.com", phone:"+91 9310543728", address:"New Delhi, India"});
  const [educations,setEducations] = useState(educationsStatic);
  const [experiences,setExperiences] = useState(experiencesStatic);

  function clearResume(){
    setDetails({name:"",email:"", phone:"", address:""});
    setEducations([]);
    setExperiences([]);
  }

  return (
    <div className='wrapper'>
      <div id='sidebar' className="sidebar">
        <Buttons clearResume={clearResume}/>
        <PersonalDlts details={details} setDetails={setDetails}/>
        <Section state={educations} setState={setEducations} section="education"/>
        <Section state={experiences} setState={setExperiences} section="experience"/>
      </div>
      <div className="preview">
        <section id="resume">
          <Resume details={details} educations={educations} experiences={experiences}/>
        </section>
      </div>

    </div>
  )
}

function Buttons ({clearResume}){
  function exractPdf(){
    window.print();
  }
  function reload(){
    location.reload();
  }

  return (
    <div className='input-section'>
      <div className='btns'>
        <button className='red' onClick={clearResume}>Clear Resume</button>
        <button onClick={reload}>Load Example</button>
        <button className='blue' onClick={exractPdf}>Save Pdf</button>
      </div>

    </div>
  )
}

export default App
