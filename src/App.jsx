import { useState } from 'react'
import PersonalDlts from './personalDtls'
import Education from './education'
import Experience from './experience'
import Resume from './resume'

function App() {
  const [details, setDetails] = useState({name:"",email:"", phone:"", address:""});


  return (
    <div className='wrapper'>
      <div className="sidebar">
        <PersonalDlts details={details} setDetails={setDetails}/>
        <Education/>
        <Experience/>
      </div>
      <div className="preview">
        <section id="resume">
          <Resume details={details}/>
        </section>
      </div>

    </div>
  )
}

export default App
