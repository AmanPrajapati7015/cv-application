import { v4 as uuid } from 'uuid';
const educations = [
    {
        id: uuid(),
        school: 'RPVV sec 10', 
        degree: 'B Tech', 
        startDate: '08/2023', 
        endDate: 'Present', 
        location: 'New Delhi, India'
    },
    {
        id: uuid(),
        school: 'NSUT delhi', 
        degree: 'B Tech', 
        startDate: '08/2023', 
        endDate: 'Present', 
        location: 'New Delhi, India'
    },
    {
        id: uuid(),
        school: 'DTU delhi', 
        degree: 'B Tech', 
        startDate: '08/2023', 
        endDate: 'Present', 
        location: 'New Delhi, India'
    }
]

export default educations;