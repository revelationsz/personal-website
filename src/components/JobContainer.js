import React from 'react'
import './SchoolContainer.css'
import Container from '../components/Container'


function JobContainer() {
    return (
        <>
        <div className='Containers'>
                    <Container className='con1'
                    title = 'Current'
                    body1 = 'Airbnb host' 
                    path1 = 'https://www.airbnb.com/rooms/35742690?guests=1&adults=1&s=67&unique_share_id=0f858308-fcf4-4bec-818d-5b128eaea60c'

                    />
                    
                    <div className='work'>

                    </div>

                    <Container className='Past'
                    title = 'Past'
                    body1 = 'Teacher At Stemania'
                    path1 = 'https://www.stemania.biz/'
                    />          
        </div>
        </>
    )
}

export default JobContainer
