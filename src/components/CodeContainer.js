import React , {useState}from 'react'
import Container from '../components/Container'
import './SchoolContainer.css'


function CodeContainer() {
    const [bodyy, setBody] = useState(["Java", "JavaScript", "Python"])

    return (
        <>
        <div className="Containers">

                <div className="container">
                    <div className="row">
                        <Container className='con col'
                        title = "Languages"
                        body = {["Java", "JavaScript", "Python", "CSS", "HTML", "XML", "JSON", "C"]}
                        />

                        <Container className='con col'
                        title = "Technologies"
                        body = {["Flask", "Express", "React JS", "Node JS", "Mongodb", "Selenium",
                            "Android Studio", "Google Cloud Services", "Freq-trade", "MySql", "Git", 
                            "AWS", "Mockito", "Google Places API"  ]}
                        />
                        </div>
                </div>
            </div>
        </>
    )
}

export default CodeContainer
