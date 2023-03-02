import '../../App.css'
import HeroSection from '../HeroSection'
import React , {useEffect} from 'react'
import CodeContainer from '../CodeContainer'
import About from './About'
import './Home.css'



function Home () {



    useEffect(() => {
        const x = localStorage.getItem('location') || null
        if(x === 'coding') {
            window.scrollTo({top: 900, left:0})
            localStorage.removeItem('location')
        }
    },[])
    

    return (
        <>
         <HeroSection/>
         {/* <About/> */}
         <div className="CodeContainer">
            <CodeContainer/>
         </div>
            
        </>
    )
}

export default Home