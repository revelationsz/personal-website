import React , {useState}from 'react'
import Container from '../components/Container'
import './SchoolContainer.css'


function CodeContainer() {
    const [bodyy, setBody] = useState(["Java", "JavaScript", "Python"])

    return (
        <>
        <div className="Containers">
        
                <Container className='con1'
                title = "Languages"
                body = {["Java", "JavaScript", "Python", "CSS", "HTML", "XML", "JSON", "C"]}
                />

                <Container className='con2'
                title = "Technologies"
                body = {["Flask", "Express", "React JS", "Node JS", "Mongodb", "Selenium",
                     "Android Studio", "Google Cloud Services", "Freq-trade", "MySql", "Git", 
                     "AWS", "Mockito", "Google Places API"  ]}
                // body1 = "Interprter"
                // path1 = "https://github.com/revelationsz/Ocaml-Interpreter"
                // body2 = "Flight Scheduler"
                // path2 = "https://github.com/revelationsz/Flight-Schdeduler"
                // body3 = "Food review app"
                // path3 = "https://github.com/revelationsz/food-review-app"
                // body4 = "Auto Buy Bot"
                // path4 = "https://github.com/revelationsz/BestBuyautoBuyBot"
                // body5 = "Personal Website"
                // path5 = "https://github.com/revelationsz/personal-website"
                />
           
        </div>
        </>
    )
}

export default CodeContainer
