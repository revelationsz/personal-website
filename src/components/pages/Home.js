import '../../App.css'
import HeroSection from '../HeroSection'
import React from 'react'
import CodeContainer from '../CodeContainer'
import './Home.css'



function Home () {
    return (
        <>
         <HeroSection/>
         <div className="CodeContainer">
            <CodeContainer/>
         </div>
        </>
    )
}

export default Home