import { useState } from 'react'
import PersonalDlts from './personalDtls'
import Education from './education'
import Experience from './experience'
import Resume from './resume'
import educationsStatic from './educations'
import experiencesStatic from './experiences'

import '/node_modules/html2pdf.js/dist/html2pdf.bundle.min.js'


function App() {
  const [details, setDetails] = useState({name:"Aman",email:"aman.prajapati7022@gmail.com", phone:"+91 9310543728", address:"New Delhi, India"});
  const [educations,setEducations] = useState(educationsStatic);
  const [experiences,setExperiences] = useState(experiencesStatic);
  
  function exractPdf(){
    const resume = document.getElementById('resume');
    console.log(html2pdf);
    html2pdf().from(resume).save();
  }


  return (
    <div className='wrapper'>
      <div className="sidebar">
        <button onClick={exractPdf}>Save Pdf</button>
        <PersonalDlts details={details} setDetails={setDetails}/>
        <Education educations={educations} setEducations={setEducations}/>
        <Experience experiences={experiences} setExperiences={setExperiences}/>
      </div>
      <div className="preview">
        <section id="resume">
          <Resume details={details} educations={educations} experiences={experiences}/>
        </section>
      </div>

    </div>
  )
}

export default App
