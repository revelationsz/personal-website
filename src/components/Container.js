import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Container.css'

function Container(props) {
    function setUp(){
        let arr = props.body        
        return (
            <div class="container"> 
                <div class="row">
                    {arr?.map(e => <div className="p-2 col-4 text-center"> {e} </div>)}
                </div>
            </div>
        )
    }
    
    return (
        <>
        <div className='body'>          
            <h3 className='Con_title'>{props.title}</h3>
            <div className='info'>
                {setUp()}
            </div>
        </div>
        </>
    )
}

export default Container
