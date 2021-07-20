import React from 'react'
import { Link } from 'react-router-dom'
import './Container.css'

function Container(props) {
    return (
        <>
        
        <div className='idk'>
            <div className='body'>          
            <h3 className='Con_title'>{props.title}</h3>
            <div className='info'>
                <div className='row1'>
                    <a href={props.path1} className='text' Link >{props.body1}</a>
                    <a href={props.path2}className='text'>{props.body2}</a>
                    <a href={props.path3}className='text'>{props.body3}</a>
                </div>
                <div className='row2'>
                    <a href={props.path4}className='text'>{props.body4}</a>
                    <a href={props.path5}className='text'>{props.body5}</a>
                </div>    
            </div>
            </div>
        </div>
        
        </>
    )
}

export default Container
