import { v4 as uuid } from 'uuid';
const educations = [
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

export default educations;