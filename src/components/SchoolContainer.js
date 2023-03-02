import React from 'react'
import './SchoolContainer.css'


function SchoolContainer(props) {
    return (
        <>
        <div className='Containers'>
                <h4>{props.school}</h4>
        </div>
        </>
    )
}

export default SchoolContainer
