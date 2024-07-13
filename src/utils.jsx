import { v4 as uuid } from 'uuid';

const experiencesStatic = [
    {
        id: uuid(),
        company: 'Umbrella Inc.',
        position: 'UX & UI Designer',
        startDate: '08/2023',
        endDate: 'Present',
        location: 'New York City, US',
        descirption: 'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android'
    },
    {
        id: uuid(),
        company: 'Black Mesa Labs',
        position: 'UX Research Assistant',
        startDate: '04/2022',
        endDate: '02/2023',
        location: 'Berlin, Germany',
        descirption: 'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.'
    },
]

const educationsStatic = [
    {
        id: uuid(),
        school: 'Delhi Technological University', 
        degree: 'Bachelors in Computer Science', 
        startDate: '08/2023', 
        endDate: 'Present', 
        location: 'New Delhi, India'
    },
    {
        id: uuid(),
        school: 'Rajkiya Pratibha Vikash Vidhyalaya', 
        degree: 'Class 12 CBSE', 
        startDate: '03/2022', 
        endDate: '04/2023', 
        location: 'Dwarka, Delhi'
    },
    {
        id: uuid(),
        school: 'Rajkiya Pratibha Vikash Vidhyalaya', 
        degree: 'Class 10 CBSE', 
        startDate: '03/2020', 
        endDate: '04/2021', 
        location: 'Dwarka, Delhi'
    },
]

function Feild({id,label,onChange,curVal}){

    return (
    <div className="feild">
        <label htmlFor={id}>{label} :</label>
        <input id={id}
            type="text" 
            placeholder={"Enter "+label} 
            value={curVal}
            onChange={e=>onChange(e.target.value)} />
    </div>
    )
}

export {Feild,experiencesStatic,educationsStatic}