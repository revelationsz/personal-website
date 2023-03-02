import React, {useEffect} from 'react'
import './About.css'
import SchoolInfo from '../SchoolContainer'
import profilePic from '../images/mePhoto.jpg'

function About() {


    useEffect(() => {
        window.scrollTo({top: 0, left:0})
    },[])
    

    return (
        <div className='fullpage'>
            
            <div className='moreinfo'>
            
                <h1 className='head text-center'> About me</h1>

                <div className='container myInfo'>
                    <div className='row d-flex justify-content-between'>
                        
                        <div className='col-3 d-flex' >
                            <img src={profilePic} className='profilePic'/>
                        </div>

                        <p className='t col-8 '>
                            Hello, I'm Sarsen Whatmore 
                            and I am currently pursuing a Bachelors in Computer
                            Science at Boston University. 

                            I swam competitively for BU's D1 swim and dive program for all 4 years. 
                            Interned at Amazon in the Summer of 2022 as a Software Development
                             Engineer Intern working on internal Alex tool and was a 
                             lesson developer for a local STEM summer camp called Stemania.
                             In my free time I love working out, and comming up with new side project ideas.      
              
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