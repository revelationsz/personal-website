import React from 'react'
import Container from '../components/Container'
import './SchoolContainer.css'


function SchoolContainer() {
    return (
        <>
        <div className='Containers'>
                    <Container className='con1'
                    title = 'University'
                    body = {['Attending: Boston University','Graduation year: 2023', 'Major: Computer Science']}
                    />
                    

                    <Container className='con2'
                    title = 'High School'
                    body = {['Attended: The Out of Door Academy','GPA: 3.6','Graduation year: 2019']}
                    />          
        </div>
        </>
    )
}

export default SchoolContainer
