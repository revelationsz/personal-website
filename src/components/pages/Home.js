import '../../App.css'
import HeroSection from '../HeroSection'
import React , {useEffect} from 'react'
import CodeContainer from '../CodeContainer'
import './Home.css'



function Home () {



    useEffect(() => {
        const x = localStorage.getItem('location') || null
        if(x === 'coding') {
            window.scrollTo({top: 950, left:0})
            localStorage.removeItem('location')
        }
    },[])
    

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