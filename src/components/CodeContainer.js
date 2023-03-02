import React , {useState}from 'react'
import Container from '../components/Container'
import Project from '../components/ProjectContainer'
import fitGenPhoto from './images/fitgen.JPG'
import fkreviewPhoto from './images/fkpage.JPG'
import portfolio from './images/website.JPG'
import './CodeContainer.css'

function CodeContainer() {

    return (
        <>
        <div className="Containers">
            <div className="container codeCons">

                    <div className="d-flex row justify-content-evenly">
                        <Container className='col-2'
                            title = "Languages"
                            body = {["Java", "JavaScript", "Python", "CSS", "HTML", "XML", "JSON", "C", "SQL"]}
                        />

                        <Container className='col-2'
                            title = "Technologies"
                            body = {["Flask", "Express", "React JS", "Node JS", "Mongodb", "Selenium",
                                "Android Studio", "Google Cloud", "Freq-trade", "MySql", "Git", 
                                "AWS", "Mockito", "Google Places API"  ]}
                        />

                     </div>

                    <div className="row">

                        <Project  className="col-12"
                            title="Amazon Software development engineer internship"
                            info="Implemented internal error handling for an Alexa feature that boosts efficiency by 70% with
                            unit tests for multiple cases to ensure future stability.
                            Utilized AWS S3 bucket through Java to store data and built and presented multiple project proposal documents."
                            languages={["Java"]}
                            technologies={["AWS, Mockito, Git"]}
                            type="website"
                        />

                        <Project  className="col-12"
                            title="Personal Portfolio Website"
                            info="Designed and developed my own personal website using React JS. Gave it a unique 
                            and developed look to further enhance the user experience.
                            Hosted on google cloud app engine with a custom domain name."
                            languages={["Javascript, HTML, CSS"]}
                            technologies={["React JS, BootStrap, Node JS"]}
                            type="website"
                            img={portfolio}
                        />

                        <Project className="col-12"
                            title="Fitgen"
                            info="Developed Android Application that generates Clothing outfits on custom 
                            algorithms with your wardrobe. Stores User profiles on Google Firebase for cross device profile.
                            Used Weather, Background removal, and Color finding API’s."
                            languages={["Java, XML, Kotlin"]}
                            technologies={["Android 5.0, OpenWeather, Remove BG, Sight Engine, Firebase"]}
                            img={fitGenPhoto}
                            type="app"
                        />

                        <Project className="col-12"
                            title="Fried Chicken Reviews"
                            info="Developed website to show my reviews of 
                            Fried Chicken on Boston while also using the Google Places API to show the 
                            resturants closest location to you. Uses React JS frontend and a Node JS and Express Backend with 
                            Mongodb database to store all information about the reviews.
                            "
                            languages={["Javascript, CSS, HTML"]}
                            technologies={["Node JS, Express, MongoDB, Google Places"]}

                            img={fkreviewPhoto}
                            type="website"
                        />

                        {/* <Project className="col-12"
                            title="Moodify"
                            info="Developed a website that recomends Spotify Playlits using the Spotify API, based on your 
                            mood which is determined
                            by a custom survey, or the current weather and uses custom user profiles. 
                            Uses React JS for the front end with Node JS and express 
                            for the server and Mongodb for the database to store the user profiles."
                            languages={["Javascript, CSS, HTML"]}
                            technologies={["React JS, Node JS, Express, MongoDB, Spotify API, OpenWeather"]}
                            type="website"
                        />

                        <Project className="col-12"
                            title="Best Buy Checkout Automation bot"
                            info="Designed a Python bot using selenium which will automatically
                            checkout a specified product when it is in stock and sign into your specifed
                            Best Buy Account for payment and shipping. Which can run inside of a docker continer 
                            with mutiple instances for maximum efficency"
                            languages={["Python"]}
                            technologies={["Selenium"]}
                        />

                        <Project className="col-12"
                            title="Photo sharing application"
                            info="Web application developed with flask and SQL which lets you make a accunt with a custom login,
                            share photos, add friends, and view and rate other users photos."
                            languages={["Python, CSS, HTML, SQL"]}
                            technologies={["Flask, MySQL"]}
                            type="website"
                        /> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default CodeContainer
