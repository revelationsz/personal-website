import React from 'react'
import Footer from '../Footer'
import './About.css'
import SchoolInfo from '../SchoolContainer'

function About() {
    return (
        
        <div className='fullpage'>
            
            <div className='moreinfo'>
            
                <h1 className='head'> About me</h1>
            
                <p className='t'>
                    Hello, I'm Sarsen Whatmore 
                    and I am currently persuing a Bachelor  in Computer
                     Science Boston University. I grew up in Sarsota Florida, 
                     and attended the Out of Door Academy from 1st grade to 12th.
                </p>
                <p>
                    Outside of school I swim competitively and currently swim for Boston 
                    University 
                    Mens Team. I also love doing side coding projects as using them 
                    for automation of tasks has always been intriguing  to me.
                </p>
            </div>

            
            <div className='Con'>
                <SchoolInfo/>
            </div>   
        
       </div>
    )
    }

export default About