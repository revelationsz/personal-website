import React from 'react'
import './About.css'
import SchoolInfo from '../SchoolContainer'
import profilePic from '../images/mePhoto.jpg'

function About() {
    return (
        <div className='fullpage'>
            
            <div className='moreinfo'>
            
                <h1 className='head'> About me</h1>

                <div className='container'>
                    <div className='row'>
                        
                        <div className='col-4 p-0' >
                            <img src={profilePic} className='profilePic'/>
                        </div>

                        <p className='t col-7 p-0 ms-4'>
                            Hello, I'm Sarsen Whatmore 
                            and I am currently pursuing a Bachelors in Computer
                            Science Boston University. 
                    
                            I swim competitively for BU's division one swim and dive program. 
                            Interned at Amazon Summer of 2022 as a Software Development
                             Engineer Intern working on internal Alex tools. And was a 
                             lesson developer for a local STEM summer camp called Stemania. 
                        </p>
                    </div>
                </div>

                
            </div>

            
            <div className='Con'>
                <SchoolInfo/>
            </div>   
        
       </div>
    )
    }

export default About