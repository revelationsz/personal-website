import React from 'react'
import Container from '../components/Container'
import './SchoolContainer.css'


function SchoolContainer() {
    return (
        <>
        <div className='Containers'>
                    <Container className='con1'
                    title = 'University'
                    body1 = 'Attending: Boston University' 
                    body2 = 'GPA: 3.21'
                    body4 = 'Graduation year: 2023'
                    body5 = 'Major: Computer Science'
                    />
                    
                    <div className='work'>

                    </div>

                    <Container className='con2'
                    title = 'High School'
                    body1 = 'Attended: The Out of Door Academy'
                    body2 = 'GPA: 3.6'
                    body4 = 'Graduation year: 2019'
                    />          
        </div>
        </>
    )
}

export default SchoolContainer
