import './resume.css'


function Resume({details, educations, experiences}){


    return(
        <>
        <TopSection details={details}/>

        <section className='education-section'>
            <h3>Education</h3>
            <div className="education-list">
                {educations.map(education=>{
                    return <EducationEntry key={education.id} education={education}/>
                })}
            </div>
        </section>

        <section className='education-section'>
            <h3>Professional Experience</h3>
            <div className="education-list">
                {experiences.map(experience=>{
                    return <ExperienceEntry key={experience.id} experience={experience}/>
                })}
            </div>
        </section>

       </>
    )
}

function TopSection({details}){
    const {name, email,phone, address} = details;
    return(
    <section className="top">
        <h1>{name}</h1>
        <div className="details">
            {(email !=="") &&
            <div>
                <img src="mail.svg" alt="" />
                <p>{email}</p>
            </div>
            }

            {(phone !=="") &&
            <div>
                <img src="phone.svg" alt="" />
                <p>{phone}</p>
            </div>
            }
            {(address !== "") &&
            <div>
                <img src="location.svg" alt="" />
                <p>{address}</p>
            </div>
            }
        </div>
    </section>
    )
}

function EducationEntry({education}){
    return (
    <div className="education-entry">
        <div className="side">
            <p>{education.startDate} - {education.endDate}</p>
            <p>{education.location}</p>
        </div>
        <div className="main">
            <strong>{education.school}</strong>
            <p>{education.degree}</p>
        </div>
    </div>
    )
}

function ExperienceEntry({experience}){
    console.log(experience);
    return (
    <div className="education-entry">
        <div className="side">
            <p>{experience.startDate} - {experience.endDate}</p>
            <p>{experience.location}</p>
        </div>
        <div className="main">
            <strong>{experience.company}</strong>
            <p><em>{experience.position}</em></p>
            <p>{experience.descirption}</p>

        </div>
    </div>
    )
}




export default Resume;