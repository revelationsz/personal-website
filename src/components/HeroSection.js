import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return(
        <div className='hero-container'>
            <p>
                Welcome to Sarsen Whatmore Management
            </p>
            {/* <div className='btn'>
                <Button 
                  className='btns'
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'
                  onClick = '/resume'>
                    Click to View Resume
                </Button>
            </div> */}
        </div>
     
    )
}

export default HeroSection