import { v4 as uuid } from 'uuid';
const educations = [
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

export default educations;