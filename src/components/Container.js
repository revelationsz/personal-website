import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Container.css'

function Container(props) {
    function setUp(){
        let arr = props.body        
        return (
            <div class="container"> 
                <div class="row justify-content-center">
                    {arr?.map(e => <p className="p-2 text-center" id="entery"> {e} </p>)}
                </div>
            </div>
        )
    }
    
    return (
        <>
            <div className='body m-3'>          
                <h3 className='Con_title' id='title'>{props.title}</h3>
                    {setUp()}
            </div>
        </>
    )
}

export default Container
