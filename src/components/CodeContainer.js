import React , {useState}from 'react'
import Container from '../components/Container'
import './SchoolContainer.css'
import Project from '../components/ProjectContainer'

function CodeContainer() {
    const [bodyy, setBody] = useState(["Java", "JavaScript", "Python"])

    return (
        <>
        <div className="Containers">

                <div className="container">
                    <div className="row">
                        <Container className='con col-12'
                            title = "Languages"
                            body = {["Java", "JavaScript", "Python", "CSS", "HTML", "XML", "JSON", "C"]}
                        />

                        <Container className='con col-12'
                            title = "Technologies"
                            body = {["Flask", "Express", "React JS", "Node JS", "Mongodb", "Selenium",
                                "Android Studio", "Google Cloud", "Freq-trade", "MySql", "Git", 
                                "AWS", "Mockito", "Google Places API"  ]}
                        />

                        <Project  className="col-12"
                            title="Personal Portfolio Website"
                            info="Designed and developed my own personal website using React JS. Gave it a unique 
                            and developed look to further enhance the user experience.
                            Hosted on google cloud app engine with a custom domain name."
                            languages={["Javascript, HTML, CSS"]}
                        />

                        <Project className="col-12"
                            title="Fitgen"
                            info="Developed Android Application that generates Clothing outfits on custom 
                            algorithms with your wardrobe. Stores User profiles on Google Firebase for cross device profile.
                            Used Weather, Background removal, and Color finding API’s."
                            languages={["Java, XML, Kotlin"]}
                        />

                        <Project className="col-12"
                            title="Fried Chicken Reviews"
                            info="Developed website to show my reviews of 
                            Fried Chicken on Boston while also using the Google Places API to show the 
                            resturants closest location to you. Uses React JS frontend and a Node JS and Express Backend with 
                            Mongodb database to store all information about the reviews.
                            "
                            languages={["Javascript, CSS, HTML"]}
                        />

                        <Project className="col-12"
                            title="Moodify"
                            info="Developed a website that recomends Spotify Playlits using the Spotify API, based on your 
                            mood which is determined
                            by a custom survey, or the current weather and uses custom user profiles. 
                            Uses React JS for the front end with Node JS and express 
                            for the server and Mongodb for the database to store the user profiles."
                            languages={["Javascript, CSS, HTML"]}
                        />

                        <Project className="col-12"
                            title="Best Buy Checkout Automation bot"
                            info="Designed a Python bot using selenium which will automatically
                            checkout a specified product when it is in stock and sign into your specifed
                            Best Buy Account for payment and shipping. Which can run inside of a docker continer 
                            with mutiple instances for maximum efficency"
                            languages={["Python"]}
                        />

                    </div>
                </div>

                <div id="projects">
                

                </div>

            </div>
        </>
    )
}

export default CodeContainer
