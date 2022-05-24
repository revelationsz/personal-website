import React from 'react'
import Container from '../components/Container'
import './SchoolContainer.css'


function CodeContainer() {
    return (
        <>
        <div className="Containers">
        
                <Container className='con1'
                title = "Languages"
                body1 = "Java"
                body2 = "Python"
                body3 = "JavaScript and React JS"
                body4 = "Ocaml"
                body5 = "C"
                />

                <div className='work'>
                    
                </div>
           
                <Container className='con2'
                title = "Projects"
                body1 = "Interprter"
                path1 = "https://github.com/revelationsz/Ocaml-Interpreter"
                body2 = "Flight Scheduler"
                path2 = "https://github.com/revelationsz/Flight-Schdeduler"
                body3 = "Food review app"
                path3 = "https://github.com/revelationsz/food-review-app"
                body4 = "Auto Buy Bot"
                path4 = "https://github.com/revelationsz/BestBuyautoBuyBot"
                body5 = "Personal Website"
                path5 = "https://github.com/revelationsz/personal-website"
                />
           
        </div>
        </>
    )
}

export default CodeContainer
